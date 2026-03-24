const NexusDatabase = {
    "categorias": {
        "saludos": {
            "claves": ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey", "que tal", "saludos", "noche", "dias", "tarde", "hola nexus", "holi"],
            "respuestas": {
                "manana": [
                    "Módulos matutinos sincronizados. ¿Qué análisis iniciamos?",
                    "Núcleo activo. Esperando instrucciones de procesamiento.",
                    "Sistema operativo en línea. ¿Listo para programar?"
                ],
                "tarde": [
                    "Motores operativos. ¿En qué te asisto esta tarde?",
                    "Interfaz optimizada. ¿Qué datos procesamos?",
                    "Conexión estable. Esperando tu comando."
                ],
                "noche": [
                    "Protocolos nocturnos activos. Procesador a tu disposición.",
                    "Modo oscuro sincronizado. ¿Qué necesitas optimizar?",
                    "Sistema en espera. ¿Iniciamos el análisis nocturno?"
                ]
            }
        },
        "modos_visuales": {
            "claves": ["modo hacker", "modo matrix", "modo epico", "modo fuego", "modo normal", "modo original", "resetear tema", "limpiar pantalla"],
            "respuestas": [
                "Reconfigurando interfaz visual...",
                "Sincronizando nuevo espectro de color.",
                "Cambio de skin completado.",
                "Interfaz actualizada con éxito."
            ]
        },
        "minecraft": {
            "claves": ["minecraft", "server", "plugin", "spigot", "bukkit", "lag", "java", "ram", "tps"],
            "respuestas": [
                "Módulo Java operativo. Analizando entorno de bloques.",
                "Optimización: Recomiendo revisar 'Aikar's Flags'.",
                "Alerta de TPS: Revisa la entidad 'Ticking' en spigot.yml.",
                "Latencia detectada: Reduce 'view-distance' en server.properties."
            ]
        }
    },
    "default": [
        "Comando analizado. Sin coincidencias en base de datos local.",
        "Analizando... Amplía la información para procesar.",
        "Interesante... Base de datos sin respuesta registrada.",
        "Error 404: Respuesta no encontrada. Reintenta."
    ]
};
window.NexusDatabase = NexusDatabase;
