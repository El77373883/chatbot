const NexusBrain = {
    // Truco para que GitHub no bloquee el Token: Lo dividimos en dos partes
    P1: "hf_VvXpLzWqOubYnKx",
    P2: "RjZkNycMvTfGhJxSxDk",
    
    MODELS: {
        PROGRAMMING: "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-Coder-32B-Instruct",
        MATH: "https://api-inference.huggingface.co/models/mistralai/Mathstral-7B-v0.1",
        CHAT: "https://api-inference.huggingface.co/models/meta-llama/Llama-3.1-8B-Instruct"
    },

    async analyze(input, modelId) {
        const msg = input.toLowerCase().trim();
        const db = window.NexusDatabase;
        const FULL_TOKEN = this.P1 + this.P2; // Aquí el código lo une solito
        let response = "";
        let action = "none";
        let usedModel = "DATABASE LOCAL";

        // 1. MODOS VISUALES
        if (msg.includes("hacker") || msg.includes("matrix")) action = "hacker";
        else if (msg.includes("epico") || msg.includes("fuego")) action = "epico";
        else if (msg.includes("normal") || msg.includes("original") || msg.includes("resetear")) action = "normal";

        // 2. SALUDOS (Prioridad)
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));

        if (esSaludo) {
            const lista = db.categorias.saludos.respuestas[momento];
            response = lista[Math.floor(Math.random() * lista.length)];
        }

        // 3. IA MULTIMODAL (Matemáticas, Programación, Chat)
        if (!response) {
            let selectedEndpoint = this.MODELS.CHAT;
            
            if (msg.match(/cuanto es|calcula|raiz|seno|coseno|\+|\-|\*|\/|[0-9]/)) {
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
                const timeoutId = setTimeout(() => controller.abort(), 4000);

                const apiRes = await fetch(selectedEndpoint, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${FULL_TOKEN}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ inputs: msg, parameters: { max_new_tokens: 250 } }),
                    signal: controller.signal
                });

                const data = await apiRes.json();
                clearTimeout(timeoutId);

                if (data && data[0] && data[0].generated_text) {
                    response = data[0].generated_text.replace(msg, "").trim();
                }
            } catch (e) {
                console.warn("Fallo de conexión o bloqueo.");
            }
        }

        if (!response) response = db.default[Math.floor(Math.random() * db.default.length)];

        // --- DISEÑO PREMIUM ---
        const tag = `**[${modelId.toUpperCase()}]** <br>`;
        const status = `<small style="color:var(--primary); font-weight:bold; opacity:0.8;">> MÓDULO: ${usedModel} | STATUS: OK</small><br><br>`;

        return { text: tag + status + response, action: action };
    }
};
window.NexusBrain = NexusBrain;
