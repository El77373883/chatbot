const NexusBrain = {
    // API KEY GRATUITA DE CORTESÍA (Modelo: Qwen 2.5 Coder - Especialista en Programación)
    // Nota: Esta es una clave de acceso público para pruebas.
    API_URL: "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-Coder-32B-Instruct",
    API_TOKEN: "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", // Token de ejemplo

    async analyze(input, modelId) {
        const msg = input.toLowerCase();
        const db = window.NexusDatabase;
        let response = "";
        let action = "none";

        // 1. Lógica de Modos Visuales (Se mantiene intacta)
        if (msg.includes("hacker") || msg.includes("matrix")) action = "hacker";
        else if (msg.includes("epico") || msg.includes("fuego")) action = "epico";
        else if (msg.includes("normal") || msg.includes("original") || msg.includes("resetear")) action = "normal";

        // 2. Buscar primero en tu Base de Datos Local (Saludos y Comandos rápidos)
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";
        
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));
        
        if (esSaludo) {
            const lista = db.categorias.saludos.respuestas[momento];
            response = lista[Math.floor(Math.random() * lista.length)];
        } else {
            // Buscar en otras categorías locales (Minecraft, etc.)
            for (let cat in db.categorias) {
                if (db.categorias[cat].claves.some(clave => msg.includes(clave))) {
                    response = db.categorias[cat].respuestas[Math.floor(Math.random() * db.categorias[cat].respuestas.length)];
                    break;
                }
            }
        }

        // 3. SI NO ESTÁ EN LA DB, LLAMAR A LA API DE PROGRAMACIÓN
        if (!response) {
            try {
                const apiRes = await fetch(this.API_URL, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${this.API_TOKEN}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        inputs: `Responde como un asistente de programación experto llamado Nexus. Usuario pregunta: ${input}`,
                        parameters: { max_new_tokens: 500, temperature: 0.7 }
                    })
                });
                const data = await apiRes.json();
                response = data[0].generated_text.split("Usuario pregunta:")[1] || data[0].generated_text;
            } catch (error) {
                response = "Error de conexión con el núcleo de IA. Revisa tu internet.";
            }
        }

        // --- DISEÑO PREMIUM FINAL ---
        const tagHeader = `<strong style="color: var(--primary); letter-spacing: 1px;">[${modelId.toUpperCase()}]</strong><br>`;
        const statusLine = `<span style="font-size: 10px; opacity: 0.6; text-transform: uppercase;">PROCESAMIENTO POR IA • ESTADO: ONLINE</span><br><br>`;

        return {
            text: tagHeader + statusLine + response.trim(),
            action: action
        };
    }
};
window.NexusBrain = NexusBrain;
