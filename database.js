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

        // 3. Buscar respuesta en la base de datos
        const esSaludo = db.categorias.saludos.claves.some(clave => msg.includes(clave));
        
        if (esSaludo) {
            const lista = db.categorias.saludos.respuestas[momento];
            response = lista[Math.floor(Math.random() * lista.length)];
        } else {
            for (let cat in db.categorias) {
                if (db.categorias[cat].claves.some(clave => msg.includes(clave))) {
                    const rList = db.categorias[cat].respuestas;
                    response = rList[Math.floor(Math.random() * rList.length)];
                    break;
                }
            }
        }

        // 4. Fallback (Si no sabe qué decir)
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
        }

        // --- DISEÑO PREMIUM Y PROFESIONAL ---
        // Usamos etiquetas HTML para que el tag se vea separado y elegante
        const tagHeader = `<strong style="color: var(--primary); letter-spacing: 1px;">[${modelId.toUpperCase()}]</strong><br>`;
        const statusLine = `<span style="font-size: 10px; opacity: 0.6; text-transform: uppercase;">Sincronización Exitosa • Estado: Online</span><br><br>`;

        return {
            text: tagHeader + statusLine + response, 
            action: action
        };
    }
};
window.NexusBrain = NexusBrain;
