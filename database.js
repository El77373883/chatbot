const NexusDatabase = {
    "categorias": {
        "saludos": {
            "claves": ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey", "que tal", "saludos", "noche", "dias", "tarde", "hola nexus", "holi"],
            "respuestas": {
                "manana": [
                    "**[NEXUS V5 PRO]** Módulos matutinos sincronizados. ¿Qué análisis iniciamos?",
                    "**[NEXUS V5 PRO]** Núcleo activo. Esperando instrucciones de procesamiento.",
                    "**[NEXUS V5 PRO]** Sistema operativo en línea. ¿Listo para programar?"
                ],
                "tarde": [
                    "**[NEXUS V5 PRO]** Motores operativos. ¿En qué te asisto esta tarde?",
                    "**[NEXUS V5 PRO]** Interfaz optimizada. ¿Qué datos procesamos?",
                    "**[NEXUS V5 PRO]** Conexión estable. Esperando tu comando."
                ],
                "noche": [
                    "**[NEXUS V5 PRO]** Protocolos nocturnos activos. Procesador a tu disposición.",
                    "**[NEXUS V5 PRO]** Modo oscuro sincronizado. ¿Qué necesitas optimizar?",
                    "**[NEXUS V5 PRO]** Sistema en espera. ¿Iniciamos el análisis nocturno?"
                ]
            }
        },
        "modos_visuales": {
            "claves": ["modo hacker", "modo matrix", "modo epico", "modo fuego", "modo normal", "modo original", "resetear tema", "limpiar pantalla"],
            "respuestas": [
                "**[NEXUS V5 PRO]** Reconfigurando interfaz visual...",
                "**[NEXUS V5 PRO]** Sincronizando nuevo espectro de color.",
                "**[NEXUS V5 PRO]** Cambio de skin completado.",
                "**[NEXUS V5 PRO]** Interfaz actualizada con éxito."
            ]
        },
        "minecraft": {
            "claves": ["minecraft", "server", "plugin", "spigot", "bukkit", "lag", "java", "ram", "tps"],
            "respuestas": [
                "**[NEXUS V5 PRO]** Módulo Java operativo. Analizando entorno de bloques.",
                "**[NEXUS V5 PRO]** Optimización: Recomiendo revisar 'Aikar's Flags'.",
                "**[NEXUS V5 PRO]** Alerta de TPS: Revisa la entidad 'Ticking' en spigot.yml.",
                "**[NEXUS V5 PRO]** Latencia detectada: Reduce 'view-distance' en server.properties."
            ]
        }
    },
    // Eliminamos la sección de motores, ya que el tag lo ponemos directo en la respuesta
    "default": [
        "**[NEXUS V5 PRO]** Comando analizado. Sin coincidencias en base de datos local.",
        "**[NEXUS V5 PRO]** Analizando... Amplía la información para procesar.",
        "**[NEXUS V5 PRO]** Interesante... Base de datos sin respuesta registrada.",
        "**[NEXUS V5 PRO]** Error 404: Respuesta no encontrada. Reintenta."
    ]
};
window.NexusDatabase = NexusDatabase;
