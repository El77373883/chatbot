const NexusBrain = {
    async analyze(input, modelId) {
        // 1. Limpiar el texto que escribe el usuario
        const msg = input.toLowerCase().trim();
        const db = window.NexusDatabase;
        let response = "";
        let action = "none";

        // 2. Cambiar colores (Modos visuales)
        if (msg.includes("hacker") || msg.includes("matrix")) action = "hacker";
        else if (msg.includes("epico") || msg.includes("fuego")) action = "epico";
        else if (msg.includes("normal") || msg.includes("original") || msg.includes("resetear")) action = "normal";

        // 3. Buscar en la base de datos (Saludos y categorías)
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";

        // Revisar si es un saludo
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));
        
        if (esSaludo) {
            const lista = db.categorias.saludos.respuestas[momento];
            response = lista[Math.floor(Math.random() * lista.length)];
        } else {
            // Revisar si coincide con otra cosa que tengas en database.js
            for (let cat in db.categorias) {
                if (db.categorias[cat].claves.some(clave => msg.includes(clave))) {
                    const rList = db.categorias[cat].respuestas;
                    response = rList[Math.floor(Math.random() * rList.length)];
                    break;
                }
            }
        }

        // 4. Si el bot no encuentra la palabra, usa la respuesta por defecto
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
        }

        // 5. El diseño que se ve en pantalla
        const tagHeader = `<strong>[${modelId.toUpperCase()}]</strong><br>`;
        const statusLine = `<small style="opacity: 0.6;">ESTADO: CONECTADO</small><br><br>`;

        return {
            text: tagHeader + statusLine + response, 
            action: action
        };
    }
};
window.NexusBrain = NexusBrain;
