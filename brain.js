const NexusBrain = {
    async analyze(input, modelId) {
        const msg = input.toLowerCase();
        const db = window.NexusDatabase;
        let response = "";
        let action = "none";

        // 1. Detectar Cambios de Interfaz
        if (msg.includes("hacker") || msg.includes("matrix")) action = "hacker";
        else if (msg.includes("epico") || msg.includes("fuego")) action = "epico";
        else if (msg.includes("normal") || msg.includes("original") || msg.includes("resetear")) action = "normal";

        // 2. Determinar momento del día
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";

        // 3. Buscar respuesta en la DB
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));
        
        if (esSaludo) {
            const lista = db.categorias.saludos.respuestas[momento];
            response = lista[Math.floor(Math.random() * lista.length)];
        } else {
            for (let cat in db.categorias) {
                if (db.categorias[cat].claves.some(clave => msg.includes(clave))) {
                    const rList = db.categorias[cat].respuestas || db.categorias[cat].responses;
                    response = rList[Math.floor(Math.random() * rList.length)];
                    break;
                }
            }
        }

        // 4. Fallback si no hay respuesta
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
        }

        // 5. Retornar solo el texto de la respuesta (sin prefijo extra)
        return {
            text: response, // Ahora la respuesta ya trae el tag [NEXUS V5 PRO]
            action: action
        };
    }
};
window.NexusBrain = NexusBrain;
