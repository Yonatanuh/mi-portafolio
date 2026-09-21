import { motion } from "framer-motion";

const Projects = () => {
  const misProyectos = [
    {
      id: 0,
      title: "Neo Banco - Fintech",
      description:
        "Plataforma completa de banca digital (Neo Banco). Arquitectura full-stack avanzada con autenticación segura, manejo de divisas, transferencias SWIFT, notificaciones automáticas por correo electrónico y diseño altamente interactivo. Desplegada en la nube.",
      technologies: [
        "React",
        "Java Spring Boot",
        "Python",
        "MongoDB",
        "Tailwind CSS",
        "Docker",
      ],
      linkRepo: "https://github.com/Yonatanuh/Neo-banco",
      linkDemo: "https://neo-banco.onrender.com",
    },
    {
      id: 1,
      title: "Yonild-Apks-Tv",
      description:
        "Plataforma web para descargas de APKs. Desarrollo completo abarcando una interfaz dinámica con filtros y un backend robusto con gestión de almacenamiento multimedia en la nube.",
      technologies: ["React", "Node.js", "Cloudinary", "Tailwind CSS"],
      linkRepo: "#",
      linkDemo: "https://www.yonild-apks.com/",
    },
    {
      id: 2,
      title: "Farmacia Cyber Amistad",
      description:
        "Caso de estudio enfocado en procesos de negocio y seguridad. Incluye evaluación de controles de ciberseguridad, análisis de riesgos y diagramas de flujo para optimización operativa.",
      technologies: [
        "Ciberseguridad",
        "Diagramas de Flujo",
        "Análisis de Riesgos",
      ],
      linkRepo: "#",
      linkDemo: "#",
    },
    {
      id: 3,
      title: "Evaluación ANUNCIART",
      description:
        "Creación de matriz de evaluación de riesgos corporativos. Análisis detallado de probabilidad e impacto para proteger la infraestructura tecnológica del negocio.",
      technologies: ["Análisis de Vulnerabilidades", "Documentación"],
      linkRepo: "#",
      linkDemo: "#",
    },
  ];

  return (
    <section
      id="proyectos"
      className="bg-gray-800 py-20 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 tracking-tight">
            Mis Proyectos Destacados
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas reales que demuestran mi capacidad para
            resolver problemas complejos usando arquitecturas modernas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {misProyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {proyecto.title}
                </h3>
                {proyecto.id === 0 && (
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    NUEVO
                  </span>
                )}
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                {proyecto.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proyecto.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-blue-300 text-sm font-medium px-3 py-1 rounded-full border border-blue-900/50 group-hover:border-blue-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-gray-700/50 pt-5 mt-auto">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={proyecto.linkRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors border border-gray-600 hover:border-gray-500"
                >
                  <span className="mr-2">💻</span>
                  Código
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={proyecto.linkDemo}
                  target={proyecto.linkDemo !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center flex-1 font-medium py-2 px-4 rounded-lg transition-colors ${
                    proyecto.linkDemo !== "#"
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
                      : "bg-gray-800 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <span className="mr-2">🚀</span>
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
