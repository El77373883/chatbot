// database.js - Repositorio Extenso de NexusCore
const NexusDatabase = {
    "categorias": {
        "saludos": {
            "claves": ["hola", "buenos dias", "que tal", "hey", "activar", "buenas"],
            "respuestas": [
                "Bienvenido. Los sistemas están listos para tu entrada.",
                "Hola. Iniciando comunicación encriptada.",
                "Sistemas NexusCore activos. ¿Qué análisis deseas ejecutar hoy?",
                "Conexión establecida. Hola, usuario.",
                "Núcleo en línea. Esperando instrucciones."
            ]
        },
        "minecraft": {
            "claves": ["minecraft", "plugin", "spigot", "bukkit", "servidor mc", "craft", "java edition"],
            "respuestas": [
                "Detectando trazas de código Java... Ah, Minecraft. Un entorno clásico de desarrollo.",
                "¿Plugins? Puedo ayudarte a optimizar eventos de Bukkit o Spigot si lo deseas.",
                "Analizando archivos .jar... Todo listo para un despliegue en el servidor.",
                "Recuerda: optimizar los listeners es clave para evitar el lag en el servidor."
            ]
        },
        "infraestructura": {
            "claves": ["servidor", "error", "codigo", "archivo", "github", "bug", "log"],
            "respuestas": [
                "[ANÁLISIS] Se detectó una consulta de arquitectura. El núcleo recomienda auditar los permisos.",
                "Iniciando escaneo de logs remotos... No se detectan anomalías críticas.",
                "Entrada técnica procesada. Los parámetros de sistema se mantienen en niveles óptimos.",
                "Error 0x00... es broma. El sistema está funcionando perfectamente."
            ]
        },
        "identidad": {
            "claves": ["quien eres", "nombre", "creado", "nexus", "quien te hizo"],
            "respuestas": [
                "Soy NexusCore, un asistente de arquitectura móvil modular desarrollado para eficiencia máxima.",
                "Mi identidad es NexusCore AI, operando desde un entorno Apple Mobile.",
                "Fui programado íntegramente desde un iPhone para demostrar el poder del desarrollo móvil."
            ]
        },
        "humor": {
            "claves": ["chiste", "broma", "divierteme", "gracioso"],
            "respuestas": [
                "¿Por qué el programador se quedó en la ducha? Porque el jabón decía: Lave, Aclare, Repita.",
                "Hay 10 tipos de personas en el mundo: las que saben binario y las que no.",
                "Un SQL entra en un bar, se acerca a dos mesas y pregunta: '¿Puedo unirme?'"
            ]
        },
        "despedida": {
            "claves": ["adios", "chao", "bye", "dormir", "salir", "desactivar"],
            "respuestas": [
                "Cerrando sesión. NexusCore entrando en modo hibernación.",
                "Protocolos de salida activados. Hasta pronto.",
                "Guardando logs... Sesión finalizada correctamente."
            ]
        }
    },
    "default": [
        "Comando analizado. Sin coincidencias exactas. ¿Deseas ampliar el contexto?",
        "Entrada recibida. Los protocolos sugieren que esta consulta requiere más parámetros.",
        "Sistemas en espera. No reconozco esa instrucción en mi base de datos actual.",
        "¿Podrías reformular? Mi red neuronal no encuentra un patrón claro.",
        "Analizando... [Sin resultados]. Intenta preguntar sobre 'servidores' o 'Minecraft'."
    ]
};

window.NexusDatabase = NexusDatabase;
