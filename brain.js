const NexusBrain = {
    async analyze(input, modelId) {
        const msg = input.toLowerCase().trim();
        const db = window.NexusDatabase;
        let response = "";
        let action = "none";
        let moduleUsed = "OFFLINE CORE";

        // 1. MODOS VISUALES (Instantáneo)
        if (msg.includes("hacker") || msg.includes("matrix")) action = "hacker";
        else if (msg.includes("epico") || msg.includes("fuego")) action = "epico";
        else if (msg.includes("normal") || msg.includes("original") || msg.includes("resetear")) action = "normal";

        // 2. MOTOR DE TIEMPO (Funciona sin internet)
        if (msg.includes("hora") || msg.includes("fecha") || msg.includes("dia es")) {
            const ahora = new Date();
            const time = ahora.toLocaleTimeString();
            const date = ahora.toLocaleDateString();
            response = `Sincronización temporal completada. La hora actual es **${time}** y la fecha es **${date}**.`;
            moduleUsed = "TIME ENGINE";
        }

        // 3. MOTOR MATEMÁTICO (Calculadora interna avanzada)
        if (!response && msg.match(/[0-9]/) && msg.match(/[\+\-\*\/]/)) {
            try {
                // Extrae solo los números y signos: 2+2, 50*10, etc.
                const formula = msg.replace(/[^-()\d/*+.]/g, '');
                if (formula) {
                    const resultado = Function('"use strict";return (' + formula + ')')();
                    response = `Cálculo procesado con éxito. El resultado de **${formula}** es **${resultado}**.`;
                    moduleUsed = "MATH ENGINE";
                }
            } catch (e) {
                response = "Error en la cadena matemática. Revisa los operadores.";
            }
        }

        // 4. BÚSQUEDA EN DATABASE LOCAL (Saludos y Minecraft)
        if (!response) {
            const hora = new Date().getHours();
            let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";
            
            const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));
            
            if (esSaludo) {
                const lista = db.categorias.saludos.respuestas[momento];
                response = lista[Math.floor(Math.random() * lista.length)];
                moduleUsed = "LINGUISTIC CORE";
            } else {
                for (let cat in db.categorias) {
                    if (db.categorias[cat].claves.some(clave => msg.includes(clave))) {
                        response = db.categorias[cat].respuestas[Math.floor(Math.random() * db.categorias[cat].respuestas.length)];
                        moduleUsed = cat.toUpperCase();
                        break;
                    }
                }
            }
        }

        // 5. RESPUESTA POR DEFECTO (Si no entiende)
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
        }

        // --- DISEÑO PREMIUM ---
        const tag = `<strong style="color: var(--primary); letter-spacing: 1px;">[${modelId.toUpperCase()}]</strong><br>`;
        const status = `<span style="font-size: 10px; opacity: 0.6; text-transform: uppercase;">MÓDULO: ${moduleUsed} • STATUS: ONLINE</span><br><br>`;

        return {
            text: tag + status + response,
            action: action
        };
    }
};
window.NexusBrain = NexusBrain;
