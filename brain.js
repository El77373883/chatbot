const NexusBrain = {
    analyze: function(input, modelId) {
        var msg = input.toLowerCase().trim();
        var db = window.NexusDatabase;
        var respuestaFinal = "";
        var colorModo = "none";

        // 1. MODOS VISUALES
        if (msg.includes("hacker")) {
            colorModo = "hacker";
            respuestaFinal = "🖥️ Modo Hacker activado";
        } else if (msg.includes("epico")) {
            colorModo = "epico";
            respuestaFinal = "🔥 Modo Épico activado";
        } else if (msg.includes("normal") || msg.includes("resetear")) {
            colorModo = "normal";
            respuestaFinal = "🔄 Modo Normal restaurado";
        }

        // Si ya se activó un modo, retornamos inmediatamente
        if (colorModo !== "none") {
            return {
                text: "<strong>[" + modelId.toUpperCase() + "]</strong><br><br>" + respuestaFinal,
                action: colorModo
            };
        }

        // 2. BUSCAR EN LA BASE DE DATOS
        var encontrado = false;
        
        for (var cat in db.categorias) {
            var categoria = db.categorias[cat];
            
            // Verificar si alguna clave coincide
            for (var i = 0; i < categoria.claves.length; i++) {
                if (msg.includes(categoria.claves[i])) {
                    
                    // Si es saludo
                    if (cat === "saludos") {
                        var hora = new Date().getHours();
                        var momento;
                        if (hora >= 6 && hora < 12) {
                            momento = "manana";
                        } else if (hora >= 12 && hora < 19) {
                            momento = "tarde";
                        } else {
                            momento = "noche";
                        }
                        var respuestasMomento = categoria.respuestas[momento];
                        var numAleatorio = Math.floor(Math.random() * respuestasMomento.length);
                        respuestaFinal = respuestasMomento[numAleatorio];
                    } 
                    // Para otras categorías
                    else {
                        var numAleatorio = Math.floor(Math.random() * categoria.respuestas.length);
                        respuestaFinal = categoria.respuestas[numAleatorio];
                    }
                    encontrado = true;
                    break;
                }
            }
            if (encontrado) break;
        }

        // 3. SI NO HAY COINCIDENCIA, USA DEFAULT
        if (!respuestaFinal) {
            var numAleatorio = Math.floor(Math.random() * db.default.length);
            respuestaFinal = db.default[numAleatorio];
        }

        // 4. DEVOLVER RESULTADO
        return {
            text: "<strong>[" + modelId.toUpperCase() + "]</strong><br><br>" + respuestaFinal,
            action: colorModo
        };
    }
};

window.NexusBrain = NexusBrain;
