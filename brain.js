const NexusBrain = {
    async analyze(input, modelId) {
        const msg = input.toLowerCase().trim();
        const db = window.NexusDatabase;
        let response = "";
        let action = "none";
        let moduleUsed = "NEXUS CORE";

        // 1. MODOS VISUALES (Inmediato)
        if (msg.includes("hacker") || msg.includes("matrix")) action = "hacker";
        else if (msg.includes("epico") || msg.includes("fuego")) action = "epico";
        else if (msg.includes("normal") || msg.includes("original") || msg.includes("resetear")) action = "normal";

        // 2. BUSCAR EN TU BASE DE DATOS (Saludos y Minecraft - Rapidez total)
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";
        
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));
        
        if (esSaludo) {
            const lista = db.categorias.saludos.respuestas[momento];
            response = lista[Math.floor(Math.random() * lista.length)];
            moduleUsed = "SALUDOS LOCAL";
        } else {
            // Revisar otras categorías (Minecraft, etc.)
            for (let cat in db.categorias) {
                if (db.categorias[cat].claves.some(clave => msg.includes(clave))) {
                    response = db.categorias[cat].respuestas[Math.floor(Math.random() * db.categorias[cat].respuestas.length)];
                    moduleUsed = cat.toUpperCase();
                    break;
                }
            }
        }

        // 3. IA DE RESPUESTA LIBRE (Si no está en la DB local)
        // Usamos un motor de respuesta abierta que NO requiere TOKEN (Gratis e ilimitado)
        if (!response) {
            moduleUsed = "EXTERNAL KNOWLEDGE";
            try {
                const proxyUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(input)}&format=json&no_html=1`;
                const res = await fetch(proxyUrl);
                const data = await res.json();

                if (data.AbstractText) {
                    response = data.AbstractText;
                } else if (data.Definition) {
                    response = data.Definition;
                } else if (data.RelatedTopics && data.RelatedTopics.length > 0) {
                    response = data.RelatedTopics[0].Text;
                }
            } catch (e) {
                console.warn("Fallo de red externa.");
            }
        }

        // 4. LÓGICA MATEMÁTICA INTERNA (Gratis y sin API)
        if (!response && msg.match(/[0-9]/) && msg.match(/[\+\-\*\/]/)) {
            try {
                // Limpiamos el texto para dejar solo la operación
                const operacion = msg.replace(/[^-()\d/*+.]/g, '');
                const resultado = eval(operacion); // Calculadora nativa
                response = `Análisis matemático completado: El resultado de **${operacion}** es **${resultado}**.`;
                moduleUsed = "MATH ENGINE";
            } catch (e) {
                response = null;
            }
        }

        // 5. RESPUESTA FINAL (Si nada funcionó)
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
        }

        // --- DISEÑO PREMIUM ---
        const tag = `<strong style="color: var(--primary); letter-spacing: 1px;">[${modelId.toUpperCase()}]</strong><br>`;
        const status = `<span style="font-size: 10px; opacity: 0.6; text-transform: uppercase;">MÓDULO: ${moduleUsed} • ESTADO: ONLINE</span><br><br>`;

        return {
            text: tag + status + response,
            action: action
        };
    }
};
window.NexusBrain = NexusBrain;
