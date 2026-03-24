const NexusBrain = {
    async analyze(input, modelId) {
        const msg = input.toLowerCase();
        const db = window.NexusDatabase;
        let response = "";

        // 1. Detectar el momento del día
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";

        // 2. BUSCAR EN CATEGORÍAS
        // Primero revisamos saludos para manejar el tiempo del día
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));
        
        if (esSaludo) {
            const listaSaludos = db.categorias.saludos.respuestas[momento];
            response = listaSaludos[Math.floor(Math.random() * listaSaludos.length)];
        } else {
            // Buscar en otras categorías (Minecraft, estado_animo, agradecimiento, etc.)
            for (let cat in db.categorias) {
                if (cat !== "saludos" && db.categorias[cat].claves.some(clave => msg.includes(clave))) {
                    const rList = db.categorias[cat].respuestas || db.categorias[cat].responses;
                    response = rList[Math.floor(Math.random() * rList.length)];
                    break;
                }
            }
        }

        // 3. Respuesta por defecto si no encontró nada
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
        }

        // 4. Aplicar el prefijo del Motor elegido
        const motorPrefix = db.motores[modelId] || `<b>[${modelId}]</b>`;
        
        // Simular un pequeño retraso de "pensamiento" más humano
        return `${motorPrefix}<br>${response}`;
    }
};
window.NexusBrain = NexusBrain;
