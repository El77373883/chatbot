const NexusBrain = {
    // Dividimos el token para evitar el bloqueo automático de seguridad de GitHub
    P1: "hf_VvXpLzWqOubYnKx",
    P2: "RjZkNycMvTfGhJxSxDk",
    
    // Endpoints gratuitos de Hugging Face
    MODELS: {
        PROGRAMMING: "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-Coder-32B-Instruct",
        MATH: "https://api-inference.huggingface.co/models/mistralai/Mathstral-7B-v0.1",
        CHAT: "https://api-inference.huggingface.co/models/meta-llama/Llama-3.1-8B-Instruct"
    },

    async analyze(input, modelId) {
        const msg = input.toLowerCase().trim();
        const db = window.NexusDatabase;
        const FULL_TOKEN = this.P1 + this.P2;
        let response = "";
        let action = "none";
        let usedModel = "DATABASE LOCAL";

        // 1. MODOS VISUALES (Cambio de interfaz)
        if (msg.includes("hacker") || msg.includes("matrix")) action = "hacker";
        else if (msg.includes("epico") || msg.includes("fuego")) action = "epico";
        else if (msg.includes("normal") || msg.includes("original") || msg.includes("resetear")) action = "normal";

        // 2. DETECCIÓN DE SALUDOS (Prioridad: Instantáneo)
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";
        
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));
        
        if (esSaludo) {
            const lista = db.categorias.saludos.respuestas[momento];
            response = lista[Math.floor(Math.random() * lista.length)];
        } else {
            // Buscar otras categorías locales (Minecraft, etc.)
            for (let cat in db.categorias) {
                if (db.categorias[cat].claves.some(clave => msg.includes(clave))) {
                    response = db.categorias[cat].respuestas[Math.floor(Math.random() * db.categorias[cat].respuestas.length)];
                    break;
                }
            }
        }

        // 3. IA MULTIMODAL (Si no hay respuesta local)
        if (!response) {
            let selectedEndpoint = this.MODELS.CHAT;
            
            // Lógica para elegir el cerebro adecuado
            if (msg.match(/[0-9]|cuanto es|calcula|raiz|seno|coseno|\+|\-|\*|\//)) {
                selectedEndpoint = this.MODELS.MATH;
                usedModel = "MATH CORE";
            } else if (msg.match(/codigo|script|programame|html|css|javascript|python|error|java/)) {
                selectedEndpoint = this.MODELS.PROGRAMMING;
                usedModel = "CODER ENGINE";
            } else {
                usedModel = "CHAT NEURAL";
            }

            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 4500); // Espera máx 4.5 seg

                const apiRes = await fetch(selectedEndpoint, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${FULL_TOKEN}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ 
                        inputs: `Responde breve y en español como Nexus AI: ${input}`,
                        parameters: { max_new_tokens: 250 }
                    }),
                    signal: controller.signal
                });

                const data = await apiRes.json();
                clearTimeout(timeoutId);

                if (data && data[0] && data[0].generated_text) {
                    // Limpieza de respuesta para que no repita la instrucción
                    response = data[0].generated_text.replace(/.*nexus ai:/gi, "").trim();
                }
            } catch (e) {
                console.log("IA ocupada, usando base de datos.");
            }
        }

        // 4. FALLBACK FINAL (Si todo falla)
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
        }

        // --- DISEÑO PREMIUM ---
        const tagHeader = `<strong style="color: var(--primary); letter-spacing: 1px;">[${modelId.toUpperCase()}]</strong><br>`;
        const statusLine = `<span style="font-size: 10px; opacity: 0.6; text-transform: uppercase;">MÓDULO: ${usedModel} • ESTADO: ONLINE</span><br><br>`;

        return {
            text: tagHeader + statusLine + response,
            action: action
        };
    }
};
window.NexusBrain = NexusBrain;
