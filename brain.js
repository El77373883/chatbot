const NexusBrain = {
    async analyze(input, modelId) {
        const msg = input.toLowerCase();
        const db = window.NexusDatabase;
        let response = "";
        let action = "none";

        // 1. Detectar Cambios de Interfaz (Modos visuales)
        if (msg.includes("hacker") || msg.includes("matrix")) action = "hacker";
        else if (msg.includes("epico") || msg.includes("fuego")) action = "epico";
        else if (msg.includes("normal") || msg.includes("original") || msg.includes("resetear")) action = "normal";

        // 2. Determinar momento del día para el saludo
        const hora = new Date().getHours();
        let momento = (hora >= 6 && hora < 12) ? "manana" : (hora >= 12 && hora < 19) ? "tarde" : "noche";

        // 3. Buscar respuesta en la base de datos local
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

        // 4. Fallback si no hay coincidencia
        if (!response) {
            response = db.default[Math.floor(Math.random() * db.default.length)];
        }

        // --- MEJORA PREMIUM: TAG DINÁMICO Y MENSAJE DE ESTADO ---
        // Esto limpia el tag de la base de datos si ya traía uno y le pone el seleccionado actualmente
        const cleanResponse = response.replace(/\[.*?\]/g, "").trim(); 
        
        // Formato Profesional: [NOMBRE DEL MOTOR] > STATUS: OK
        const professionalTag = `**[${modelId.toUpperCase()}]** > \`SISTEMA OPERATIVO\`<br>`;
        const statusLine = `<span style="font-size:11px; color:var(--primary); opacity:0.8;">LOG: Procesamiento de datos completado con éxito.</span><br><br>`;

        return {
            text: professionalTag + statusLine + cleanResponse, 
            action: action
        };
    }
};
window.NexusBrain = NexusBrain;
