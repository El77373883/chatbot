const NexusBrain = {
    // Función de análisis ultra-directa
    analyze: function(input, modelId) {
        var msg = input.toLowerCase().trim();
        var db = window.NexusDatabase;
        var respuestaFinal = "";
        var colorModo = "none";

        // 1. MODOS VISUALES (Al instante)
        if (msg.includes("hacker")) colorModo = "hacker";
        else if (msg.includes("epico")) colorModo = "epico";
        else if (msg.includes("normal") || msg.includes("resetear")) colorModo = "normal";

        // 2. BUSCAR EN LA BASE DE DATOS (database.js)
        // Buscamos si el mensaje coincide con alguna clave
        for (var cat in db.categorias) {
            var categoria = db.categorias[cat];
            if (categoria.claves.some(function(clave) { return msg.includes(clave); })) {
                
                // Si es un saludo (tiene mañana, tarde, noche)
                if (cat === "saludos") {
                    var hora = new Date().getHours();
                    var momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";
                    respuestaFinal = categoria.respuestas[momento][0];
                } else {
                    // Si es otra categoría (Minecraft, etc)
                    respuestaFinal = categoria.respuestas[0];
                }
                break;
            }
        }

        // 3. SI NO HAY COINCIDENCIA, USA EL DEFAULT
        if (!respuestaFinal) {
            respuestaFinal = db.default[0];
        }

        // 4. DEVOLVER EL RESULTADO (Sin promesas, sin esperas)
        return {
            text: "<strong>[" + modelId.toUpperCase() + "]</strong><br><br>" + respuestaFinal,
            action: colorModo
        };
    }
};
window.NexusBrain = NexusBrain;
