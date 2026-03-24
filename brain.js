const NexusBrain = {
    API_URL: "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-Coder-32B-Instruct",
    API_TOKEN: "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",

    async analyze(input, modelId) {
        const msg = input.toLowerCase().trim();
        const db = window.NexusDatabase;
        let response = "";
        let action = "none";

        // 1. MODOS VISUALES (Instantáneo)
        if (msg.includes("hacker") || msg.includes("matrix")) action = "hacker";
        else if (msg.includes("epico") || msg.includes("fuego")) action = "epico";
        else if (msg.includes("normal") || msg.includes("original") || msg.includes("resetear")) action = "normal";

        // 2. DETECCIÓN DE SALUDOS (Prioridad Absoluta - Sin usar API)
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";
        
        // Buscamos si el mensaje coincide con alguna clave de saludo
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));

        if (esSaludo) {
            const lista = db.categorias.saludos.respuestas[momento];
            response = lista[Math.floor(Math.random() * lista.length)];
        } 

        // 3. SI NO ES SALUDO, INTENTAR API (Con protección total)
        if (!response) {
            try {
                // Si la API no responde en 2 segundos, cancelamos
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 2000);

                const apiRes = await fetch(this.API_URL, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${this.API_TOKEN}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ inputs: msg }),
                    signal: controller.signal
                });

                const data = await apiRes.json();
                clearTimeout(timeoutId);

                if (data && data[0] && data[0].generated_text) {
                    response = data[0].generated_text.split("\n")[0]; // Solo la primera línea
                }
            } catch (e) {
                console.log("IA no disponible, usando base de datos local.");
            }
        }

        // 4. RESPUESTA POR DEFECTO (Si la IA falló o no entendió)
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
        }

        // --- DISEÑO PREMIUM ---
        const tag = `**[${modelId.toUpperCase()}]** <br>`;
        const status = `<small style="color:var(--primary); font-weight:bold; opacity:0.7;">> STATUS: ONLINE | NÚCLEO ACTIVO</small><br><br>`;

        return {
            text: tag + status + response,
            action: action
        };
    }
};
window.NexusBrain = NexusBrain;
