import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare, FaShieldHalved } from "react-icons/fa6";

const Projects = () => {
  const misProyectos = [
    {
      id: 0,
      title: "Neo Banco - Fintech",
      badge: "PROYECTO DESTACADO",
      description:
        "Plataforma completa de banca digital full-stack desarrollada con Spring Boot, React y MongoDB. Cuenta con autenticación segura JWT, notificaciones automáticas por correo electrónico, manejo de saldo y tarjetas virtuales con diseño responsivo.",
      technologies: [
        "React",
        "Java Spring Boot",
        "MongoDB",
        "Tailwind CSS",
        "Docker",
        "JWT",
      ],
      linkRepo: "https://github.com/Yonatanuh/Neo-banco",
      linkDemo: "https://neo-banco.vercel.app",
    },
    {
      id: 1,
      title: "Yonild-Apks-Tv",
      badge: "PLATAFORMA WEB",
      description:
        "Plataforma web dinámica para catálogo y distribución de aplicaciones Android y Smart TV. Desarrollo integral con interfaz interactiva, filtros dinámicos y almacenamiento multimedia en la nube.",
      technologies: ["React", "Node.js", "Cloudinary", "Tailwind CSS"],
      linkRepo: "https://github.com/Yonatanuh",
      linkDemo: "https://www.yonild-apks.com/",
    },
    {
      id: 2,
      title: "Farmacia Cyber Amistad",
      badge: "AUDITORÍA DE SEGURIDAD",
      description:
        "Caso de estudio enfocado en procesos empresariales y ciberseguridad. Incluye evaluación exhaustiva de controles de seguridad, matriz de análisis de riesgos y planes de contingencia para la continuidad operativa.",
      technologies: [
        "Ciberseguridad",
        "Matriz de Riesgos",
        "Auditoría de Procesos",
        "Análisis Preventivo",
      ],
      isCaseStudy: true,
      caseStudyTag: "Caso de Estudio Confidencial",
    },
    {
      id: 3,
      title: "Evaluación ANUNCIART",
      badge: "GESTIÓN DE RIESGOS",
      description:
        "Desarrollo e implementación de matriz de evaluación de riesgos corporativos. Análisis cualitativo y cuantitativo de probabilidad e impacto para blindar la infraestructura tecnológica del negocio.",
      technologies: ["Análisis de Vulnerabilidades", "Evaluación de Impacto", "Documentación Técnica"],
      isCaseStudy: true,
      caseStudyTag: "Auditoría de Infraestructura",
    },
  ];

  return (
    <section
      id="proyectos"
      className="bg-[#050510] py-24 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-4 tracking-tight">
            Mis Proyectos Destacados
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas reales que demuestran mi capacidad para resolver problemas complejos con arquitecturas seguras y modernas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {misProyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-900/60 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4 gap-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {proyecto.title}
                </h3>
                {proyecto.badge && (
                  <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shrink-0">
                    {proyecto.badge}
                  </span>
                )}
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed flex-grow text-sm md:text-base">
                {proyecto.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proyecto.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-black/40 text-cyan-200/90 text-xs font-medium px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-cyan-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 border-t border-white/10 pt-5 mt-auto items-center">
                {proyecto.isCaseStudy ? (
                  <div className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
                    <FaShieldHalved className="text-cyan-400 text-sm" />
                    <span>{proyecto.caseStudyTag || "Caso de Estudio Confidencial"}</span>
                  </div>
                ) : (
                  <>
                    {proyecto.linkRepo && (
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={proyecto.linkRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 bg-gray-800/80 hover:bg-gray-700 text-white text-sm font-medium py-3 px-4 rounded-xl transition-all border border-gray-700 hover:border-cyan-500/40"
                      >
                        <FaGithub className="text-base" />
                        <span>Código</span>
                      </motion.a>
                    )}
                    {proyecto.linkDemo && (
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={proyecto.linkDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold py-3 px-4 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                      >
                        <span>Sitio Web</span>
                        <FaArrowUpRightFromSquare className="text-xs" />
                      </motion.a>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
