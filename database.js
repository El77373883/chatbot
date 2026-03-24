// database.js - Repositorio de Datos de NexusCore
const NexusDatabase = {
    "categorias": {
        "saludos": {
            "claves": ["hola", "buenos dias", "que tal", "activar"],
            "respuestas": [
                "Bienvenido. Los sistemas están listos para tu entrada.",
                "Hola. Iniciando comunicación encriptada.",
                "Sistemas NexusCore activos. ¿Qué análisis deseas ejecutar hoy?"
            ]
        },
        "infraestructura": {
            "claves": ["servidor", "error", "codigo", "archivo", "github", "bug"],
            "respuestas": [
                "[ANÁLISIS] Se detectó una consulta de arquitectura. El núcleo recomienda auditar los permisos de acceso.",
                "Iniciando escaneo de logs remotos... No se detectan anomalías críticas en el despliegue.",
                "Entrada técnica procesada. Los parámetros de sistema se mantienen en niveles óptimos."
            ]
        },
        "identidad": {
            "claves": ["quien eres", "nombre", "creado", "nexus"],
            "respuestas": [
                "Soy NexusCore, un asistente de arquitectura móvil modular desarrollado para eficiencia máxima.",
                "Mi identidad es NexusCore AI, operando desde un entorno Apple Mobile."
            ]
        }
    },
    "default": [
        "Comando analizado. Sin coincidencias en la base de datos local. ¿Deseas ampliar el contexto?",
        "Entrada recibida. Los protocolos actuales sugieren que esta consulta requiere análisis manual.",
        "Sistemas en espera. Proporciona más parámetros para ejecutar el análisis."
    ]
};

window.NexusDatabase = NexusDatabase;
