const NexusDatabase = {
    "categorias": {
        "saludos": {
            "claves": [
                "hola", "buenos dias", "buenas tardes", "buenas noches", 
                "buen dia", "hey", "que tal", "saludos", "noche", "dias", "tarde"
            ],
            "respuestas": {
                "manana": "¡Buenos días! El sistema NexusCore ha despertado. ¿Qué análisis iniciamos hoy?",
                "tarde": "Buenas tardes. Los motores están operando a temperatura óptima. ¿En qué te asisto?",
                "noche": "Buenas noches. Iniciando protocolos de procesamiento nocturno. Estoy a tu disposición."
            }
        },
        "minecraft": {
            "claves": ["minecraft", "server", "plugin", "spigot", "bukkit", "lag", "java"],
            "respuestas": [
                "Analizando entorno de bloques... El módulo Java está listo.",
                "Optimización detectada: Recomiendo revisar los 'Aikar's Flags' para tu servidor.",
                "Si experimentas TPS bajos, revisa la entidad 'Ticking' en el archivo spigot.yml."
            ]
        }
    },
    "motores": {
        "Nexus-V3": "<b>[NEXUS V3 - STABLE]</b>",
        "Nexus-V5": "<b>[NEXUS V5 - NEURAL PRO]</b>",
        "Claude-V3": "<b>[CLAUDE V3 - CREATIVE]</b>"
    },
    "default": [
        "Comando analizado. Sin coincidencias exactas en la base de datos local.",
        "Analizando... Por favor, amplía la información para procesar la respuesta."
    ]
};
window.NexusDatabase = NexusDatabase;
