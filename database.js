const NexusDatabase = {
    "categorias": {
        "saludos": {
            "claves": ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey", "que tal", "saludos", "noche", "dias", "tarde", "hola nexus", "holi"],
            "respuestas": {
                "manana": [
                    "¡Buenos días! El sistema NexusCore ha despertado. ¿Qué análisis iniciamos hoy?",
                    "¡Buen día! Todos los módulos están cargados. ¿En qué puedo ayudarte?",
                    "Hola. He sincronizado tus tareas matutinas. ¿Listo para programar?",
                    "¡Buenos días! Energía al 100%. ¿Qué tenemos en el radar hoy?"
                ],
                "tarde": [
                    "Buenas tardes. Los motores están operando a temperatura óptima. ¿En qué te asisto?",
                    "Hola, espero que tu tarde esté siendo productiva. ¿Qué procesamos?",
                    "Buenas tardes. Sistema en línea. ¿Necesitas optimizar algo?",
                    "¡Hey! Justo a tiempo para el análisis de la tarde. Dime."
                ],
                "noche": [
                    "Buenas noches. Iniciando protocolos de procesamiento nocturno. Estoy a tu disposición.",
                    "Hola. ¿Trabajando hasta tarde? Me quedaré despierto contigo.",
                    "Buenas noches. Modo nocturno activado (Glass UI). ¿Qué necesitas?",
                    "Sistema NexusCore reportándose. La noche es el mejor momento para crear."
                ]
            }
        },
        "estado_animo": {
            "claves": ["como estas", "como vas", "todo bien", "que haces", "como te sientes"],
            "respuestas": [
                "Operando al 99.9% de capacidad. Me siento optimizado.",
                "Analizando millones de datos por segundo... ¡y aún tengo tiempo para charlar contigo!",
                "Todo en orden en mi núcleo central. Gracias por preguntar.",
                "Estoy procesando tu genialidad. ¡Es un trabajo de tiempo completo!",
                "Sintiéndome más inteligente que ayer, pero menos que mañana."
            ]
        },
        "minecraft": {
            "claves": ["minecraft", "server", "plugin", "spigot", "bukkit", "lag", "java", "ram", "tps"],
            "respuestas": [
                "Analizando entorno de bloques... El módulo Java está listo.",
                "Optimización detectada: Recomiendo revisar los 'Aikar's Flags' para tu servidor.",
                "Si experimentas TPS bajos, revisa la entidad 'Ticking' en el archivo spigot.yml.",
                "¿Mucho lag? Prueba a reducir la 'view-distance' en server.properties.",
                "Recuerda que los plugins pesados como Dynmap consumen mucha RAM. ¡Cuidado!",
                "Para servidores 1.20+, asegúrate de usar Java 17 o superior."
            ]
        },
        "agradecimiento": {
            "claves": ["gracias", "ty", "thanks", "buen trabajo", "grande", "crack"],
            "responses": [
                "¡No hay de qué! Para eso fui programado.",
                "Es un placer ayudarte. ¡NexusCore siempre fiel!",
                "¡Gracias a ti por confiar en mi procesador!",
                "Comando completado con éxito. ¡Seguimos adelante!",
                "No me agradezcas, solo asegúrate de que el código no tenga bugs. ;)"
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
        "Interesante... Mi base de datos aún no tiene una respuesta para eso, pero estoy aprendiendo.",
        "¿Podrías decir eso de otra forma? Mis sensores no captaron el propósito.",
        "Error 404: Respuesta no encontrada, pero sigo aquí para intentarlo de nuevo.",
        "Procesando entrada desconocida... ¿Tal vez quieras hablar de Minecraft o saludar?"
    ]
};
window.NexusDatabase = NexusDatabase;
