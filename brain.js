const NexusBrain = {
    async analyze(input, modelId) {
        const msg = input.toLowerCase().trim();
        const db = window.NexusDatabase;
        let response = "";
        let action = "none";
        let moduleUsed = "NEXUS CORE";

        // 1. MODOS VISUALES (Instantáneo)
        if (msg.includes("hacker") || msg.includes("matrix")) action = "hacker";
        else if (msg.includes("epico") || msg.includes("fuego")) action = "epico";
        else if (msg.includes("normal") || msg.includes("original") || msg.includes("resetear")) action = "normal";

        // 2. BUSCAR EN TU BASE DE DATOS (Saludos y comandos locales)
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));

        if (esSaludo) {
            const lista = db.categorias.saludos.respuestas[momento];
            response = lista[Math.floor(Math.random() * lista.length)];
            moduleUsed = "LINGUISTIC";
        }

        // 3. MOTOR DE BÚSQUEDA "GOOGLE-STYLE" (Gratis y sin Token)
        // Si no es saludo, intentamos buscar información en la red
        if (!response) {
            moduleUsed = "NET SEARCH";
            try {
                // Usamos la API de DuckDuckGo que es como un "Google abierto"
                // El parámetro callback=? ayuda a saltar bloqueos de seguridad
                const searchUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(input)}&format=json&no_html=1&skip_disambig=1`;
                
                const res = await fetch(searchUrl);
                const data = await res.json();

                if (data.AbstractText) {
                    response = data.AbstractText;
                } else if (data.Definition) {
                    response = data.Definition;
                } else if (data.RelatedTopics && data.RelatedTopics.length > 0) {
                    // Si no hay un resumen, agarra el primer resultado relacionado
                    response = data.RelatedTopics[0].Text;
                }
            } catch (e) {
                console.warn("Error de conexión con la red.");
            }
        }

        // 4. MOTOR MATEMÁTICO INTERNO (Por si falla el internet)
        if (!response && msg.match(/[0-9]/) && msg.match(/[\+\-\*\/]/)) {
            try {
                const formula = msg.replace(/[^-()\d/*+.]/g, '');
                const result = Function('"use strict";return (' + formula + ')')();
                response = `Cálculo completado: El resultado de **${formula}** es **${result}**.`;
                moduleUsed = "MATH CORE";
            } catch (e) {}
        }

        // 5. RESPUESTA DE EMERGENCIA
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
            moduleUsed = "FALLBACK";
        }

        // --- DISEÑO PREMIUM ---
        const tag = `<strong style="color: var(--primary);">[${modelId.toUpperCase()}]</strong><br>`;
        const status = `<span style="font-size: 10px; opacity: 0.6;">MÓDULO: ${moduleUsed} • STATUS: ONLINE</span><br><br>`;

        return {
            text: tag + status + response,
            action: action
        };
    }
};
window.NexusBrain = NexusBrain;
