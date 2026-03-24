const NexusDatabase = {
    "categorias": {
        "saludos": {
            "claves": ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey", "que tal", "saludos", "noche", "dias", "tarde", "hola nexus", "holi"],
            "respuestas": {
                "manana": [
                    "¡Buenos días! El sistema NexusCore ha despertado. ¿Qué análisis iniciamos hoy?",
                    "¡Buen día! Todos los módulos están cargados. ¿En qué puedo ayudarte?",
                    "Hola. He sincronizado tus tareas matutinas. ¿Listo para programar?"
                ],
                "tarde": [
                    "Buenas tardes. Los motores están operando a temperatura óptima. ¿En qué te asisto?",
                    "Hola, espero que tu tarde esté siendo productiva. ¿Qué procesamos?",
                    "Buenas tardes. Sistema en línea. ¿Necesitas optimizar algo?"
                ],
                "noche": [
                    "Buenas noches. Iniciando protocolos de procesamiento nocturno. Estoy a tu disposición.",
                    "Hola. ¿Trabajando hasta tarde? Me quedaré despierto contigo.",
                    "Buenas noches. Modo nocturno activado (Glass UI). ¿Qué necesitas?"
                ]
            }
        },
        "modos_visuales": {
            "claves": ["modo hacker", "modo matrix", "modo epico", "modo fuego", "modo normal", "modo original", "resetear tema", "limpiar pantalla"],
            "respuestas": [
                "Ejecutando protocolo de reconfiguración visual...",
                "Sincronizando interfaz con el nuevo espectro de color.",
                "Cambio de skin completado. ¿Qué te parece el nuevo aspecto?",
                "Interfaz NexusCore actualizada con éxito. ¿Alguna otra instrucción?"
            ]
        },
        "minecraft": {
            "claves": ["minecraft", "server", "plugin", "spigot", "bukkit", "lag", "java", "ram", "tps"],
            "respuestas": [
                "Analizando entorno de bloques... El módulo Java está listo.",
                "Optimización detectada: Recomiendo revisar los 'Aikar's Flags' para tu servidor.",
                "Si experimentas TPS bajos, revisa la entidad 'Ticking' en el archivo spigot.yml.",
                "¿Mucho lag? Prueba a reducir la 'view-distance' en server.properties."
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
        "Analizando... Por favor, amplía la información para procesar la respuesta.",
        "Interesante... Mi base de datos aún no tiene una respuesta para eso.",
        "Error 404: Respuesta no encontrada, pero sigo aquí para intentarlo de nuevo."
    ]
};
window.NexusDatabase = NexusDatabase;
