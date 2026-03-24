// database.js - Base de Datos de NexusCore
const NexusDatabase = {
    "categorias": {
        "saludos_horario": {
            "claves": ["buenos dias", "buenas tardes", "buenas noches", "buen dia", "buena noche"],
            "respuestas": [
                "Saludos. He sincronizado mi reloj interno con tu jornada actual. ¿En qué puedo asistirte?",
                "Detectando zona horaria... Saludos cordiales. Todos los sistemas están listos.",
                "Entrada recibida. Espero que estés teniendo una excelente sesión de trabajo."
            ]
        },
        "saludos_general": {
            "claves": ["hola", "hey", "que tal", "activar", "bueno"],
            "respuestas": [
                "Sistemas NexusCore activos. ¿Qué análisis deseas ejecutar?",
                "Hola. Conexión establecida con el núcleo lógico de procesamiento.",
                "Núcleo en línea. Esperando instrucciones del usuario."
            ]
        },
        "minecraft": {
            "claves": ["minecraft", "plugin", "spigot", "bukkit", "servidor", "java"],
            "respuestas": [
                "Analizando entorno de bloques... El módulo de desarrollo Java está listo para optimizar tu servidor.",
                "¿Problemas con los plugins? Puedo ayudarte a revisar la carga de eventos en Spigot.",
                "Recuerda que para evitar el lag, la pre-generación de chunks es vital."
            ]
        },
        "identidad": {
            "claves": ["quien eres", "tu nombre", "nexus", "creador"],
            "respuestas": [
                "Soy NexusCore AI, una interfaz modular diseñada para operar con máxima eficiencia en dispositivos móviles.",
                "Mi nombre es NexusCore. Fui programado para gestionar tareas y análisis de datos en tiempo real."
            ]
        }
    },
    "default": [
        "Comando analizado. Sin coincidencias exactas en la base de datos local.",
        "Entrada recibida, pero el núcleo lógico requiere más contexto para procesarla.",
        "Analizando... No reconozco esa instrucción. Intenta preguntar sobre 'servidores' o 'saludos'."
    ]
};

// Exportar al navegador
window.NexusDatabase = NexusDatabase;
