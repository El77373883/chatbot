const NexusBrain = {
    // API de Programación (Hugging Face)
    API_URL: "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-Coder-32B-Instruct",
    API_TOKEN: "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",

    async analyze(input, modelId) {
        const msg = input.toLowerCase().trim();
        const db = window.NexusDatabase;
        let response = "";
        let action = "none";

        // 1. MODOS VISUALES (Respuesta instantánea)
        if (msg.includes("hacker") || msg.includes("matrix")) action = "hacker";
        else if (msg.includes("epico") || msg.includes("fuego")) action = "epico";
        else if (msg.includes("normal") || msg.includes("original") || msg.includes("resetear")) action = "normal";

        // 2. BUSCAR EN DATABASE LOCAL (Prioridad 1: Siempre funciona)
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";
        
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));
        
        if (esSaludo) {
            const lista = db.categorias.saludos.respuestas[momento];
            response = lista[Math.floor(Math.random() * lista.length)];
        } else {
            for (let cat in db.categorias) {
                if (db.categorias[cat].claves.some(clave => msg.includes(clave))) {
                    const rList = db.categorias[cat].respuestas;
                    response = rList[Math.floor(Math.random() * rList.length)];
                    break;
                }
            }
        }

        // 3. SI NO HAY RESPUESTA LOCAL, INTENTAR API CON TIEMPO LÍMITE (TIMEOUT)
        if (!response) {
            try {
                // Si la API no responde en 2.5 segundos, pasamos al plan B
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 2500);

                const apiRes = await fetch(this.API_URL, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${this.API_TOKEN}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        inputs: `Responde breve en español: ${input}`,
                    }),
                    signal: controller.signal
                });

                const data = await apiRes.json();
                clearTimeout(timeoutId);

                if (data && data[0] && data[0].generated_text) {
                    response = data[0].generated_text.replace(/<[^>]*>?/gm, ''); // Limpiar HTML
                }
            } catch (error) {
                console.warn("API lenta o bloqueada. Usando respuesta por defecto.");
            }
        }

        // 4. FALLBACK DE SEGURIDAD (Si todo lo anterior falla)
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
        }

        // --- DISEÑO PREMIUM FINAL ---
        const tag = `**[${modelId.toUpperCase()}]** <br>`;
        const status = `<small style="color:var(--primary); font-weight:bold; opacity:0.8;">> STATUS: ONLINE | RED NEXUS</small><br><br>`;

        return {
            text: tag + status + response,
            action: action
        };
    }
};
window.NexusBrain = NexusBrain;
