// brain.js - El motor lógico de NexusCore
const NexusBrain = {
    async analyze(input, modelId) {
        const msg = input.toLowerCase();
        const categorias = window.NexusDatabase.categorias;
        let finalResponse = "";

        // 1. Buscar coincidencias en las categorías
        for (let cat in categorias) {
            const currentCat = categorias[cat];
            if (currentCat.claves.some(clave => msg.includes(clave))) {
                const rList = currentCat.respuestas;
                // Elige una respuesta aleatoria
                finalResponse = rList[Math.floor(Math.random() * rList.length)];
                break;
            }
        }

        // 2. Si no encontró nada, usa una respuesta por defecto
        if (!finalResponse) {
            const defaults = window.NexusDatabase.default;
            finalResponse = defaults[Math.floor(Math.random() * defaults.length)];
        }

        // 3. Retornar con el formato del modelo seleccionado
        return `<b>[${modelId}]</b><br>${finalResponse}`;
    }
};

// Exportar al navegador
window.NexusBrain = NexusBrain;
