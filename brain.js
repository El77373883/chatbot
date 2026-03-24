// brain.js - Motor de procesamiento
const NexusBrain = {
    async analyze(input, modelId) {
        const msg = input.toLowerCase();
        const db = window.NexusDatabase;
        let response = "";

        // Lógica de búsqueda por categorías
        for (let categoria in db) {
            if (categoria === "desconocido") continue;

            // Si el mensaje del usuario tiene alguna palabra clave de la categoría
            if (db[categoria].keywords.some(key => msg.includes(key))) {
                const r = db[categoria].responses;
                // Elige una respuesta al azar de esa categoría
                response = r[Math.floor(Math.random() * r.length)];
                break;
            }
        }

        // Si no encontró nada, usa una respuesta al azar de "desconocido"
        if (!response) {
            const desc = db.desconocido;
            response = desc[Math.floor(Math.random() * desc.length)];
        }

        return `[${modelId}] ${response}`;
    }
};

window.NexusBrain = NexusBrain;
