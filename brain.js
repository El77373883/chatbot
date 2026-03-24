const NexusBrain = {
    async analyze(input, modelId) {
        const msg = input.toLowerCase();
        const db = window.NexusDatabase;
        let response = "";

        // 1. Detectar el momento del día según el reloj del iPhone
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";

        // 2. BUSCAR SALUDOS ESPECÍFICOS PRIMERO
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));
        
        if (esSaludo) {
            // Si detecta cualquier saludo, responde según la hora actual
            response = db.categorias.saludos.respuestas[momento];
        } else {
            // 3. Si no es saludo, buscar en otras categorías (Minecraft, etc.)
            for (let cat in db.categorias) {
                if (cat !== "saludos" && db.categorias[cat].claves.some(clave => msg.includes(clave))) {
                    const rList = db.categorias[cat].respuestas;
                    response = rList[Math.floor(Math.random() * rList.length)];
                    break;
                }
            }
        }

        // 4. Si sigue vacío, dar respuesta por defecto
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
        }

        // 5. Aplicar el prefijo del Motor elegido
        const motorPrefix = db.motores[modelId] || `<b>[${modelId}]</b>`;
        return `${motorPrefix}<br>${response}`;
    }
};
window.NexusBrain = NexusBrain;
