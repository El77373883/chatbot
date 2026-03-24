// brain.js - El motor lógico de NexusCore AI

const NexusBrain = {
    // Memoria persistente simple
    memory: {
        userName: localStorage.getItem('nexus_user_name') || null
    },

    models: {
        "Nexus-G4": { name: "Nexus GPT-4", info: "Análisis técnico profundo" },
        "Nexus-C3": { name: "Nexus Claude 3", info: "Creatividad y contexto" },
        "Nexus-G-Pro": { name: "Nexus Gemini Pro", info: "Procesamiento veloz" }
    },

    async analyze(input, modelId) {
        const query = input.toLowerCase();
        const model = this.models[modelId];

        // 1. Lógica de Memoria (¿Me está diciendo su nombre?)
        if (query.includes("mi nombre es") || query.includes("me llamo")) {
            const words = input.split(" ");
            const name = words[words.length - 1];
            this.memory.userName = name;
            localStorage.setItem('nexus_user_name', name);
            return `Entendido. He registrado tu identidad como **${name}**. ¿En qué puedo asistirte, ${name}?`;
        }

        // 2. Lógica de Análisis Técnico
        if (query.includes("analiza") || query.includes("servidor") || query.includes("error")) {
            return `[${model.name}] **Análisis de Capa de Datos:** Se han detectado patrones inusuales en el tráfico. Sugiero optimizar los scripts de backend y revisar el archivo de configuración.`;
        }

        // 3. Respuesta personalizada si conoce el nombre
        if (query.includes("quien soy") || query.includes("mi nombre")) {
            return this.memory.userName 
                ? `Según mis registros, eres **${this.memory.userName}**. Operas bajo el modelo ${model.name}.`
                : "Aún no tengo tu nombre en mis registros. Puedes decirme 'mi nombre es...' para guardarlo.";
        }

        // 4. Saludos y General
        if (query.includes("hola") || query.includes("buenos dias")) {
            return `Hola ${this.memory.userName || ""}. Soy el núcleo lógico ${model.name}. Estoy listo para procesar tus comandos técnicos.`;
        }

        // 5. Respuesta por defecto con "Análisis"
        return `[${model.name}] Consulta analizada. No se encontraron palabras clave críticas. Los parámetros de ${model.info} se mantienen estables.`;
    }
};

// Exportar objeto al contexto global (window)
window.NexusBrain = NexusBrain;
