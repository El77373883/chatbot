// database.js - Diccionario de respuestas de NexusCore
const NexusDatabase = {
    "saludos": {
        "keywords": ["hola", "buenos dias", "hey", "que tal", "saludos"],
        "responses": [
            "Sistema NexusCore en línea. ¿En qué puedo asistirte?",
            "Hola. Núcleo lógico activo y esperando comandos.",
            "Saludos. Analizando entorno de usuario... Todo estable."
        ]
    },
    "tecnico": {
        "keywords": ["error", "codigo", "servidor", "java", "github", "plugin", "bug"],
        "responses": [
            "[ANÁLISIS] Se detectó una consulta técnica. Sugiero revisar los logs de consola.",
            "Iniciando escaneo de sintaxis... No se detectan anomalías críticas.",
            "Entrada técnica recibida. El modelo actual recomienda optimizar el script."
        ]
    },
    "quien_soy": {
        "keywords": ["quien eres", "que eres", "tu nombre", "nexus"],
        "responses": [
            "Soy NexusCore AI, una interfaz de inteligencia modular ejecutada desde un iPhone.",
            "Mi identidad es NexusCore, un asistente de arquitectura móvil avanzada."
        ]
    },
    "desconocido": [
        "Consulta analizada. No hay coincidencias exactas en la base de datos.",
        "Comando no reconocido. ¿Deseas que intente un análisis profundo?",
        "Entrada recibida, pero el núcleo lógico requiere más contexto."
    ]
};

window.NexusDatabase = NexusDatabase;
