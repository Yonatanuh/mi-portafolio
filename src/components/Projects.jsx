const Projects = () => {
  const misProyectos = [
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
    <section id="proyectos" className="bg-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Mis Proyectos Destacados
          </h2>
          <p className="text-gray-400 text-lg">
            Una selección de mis trabajos más recientes y significativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {misProyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {proyecto.title}
                </h3>
                <span className="bg-green-900/30 text-green-400 text-xs font-bold px-2 py-1 rounded">
                  Completado
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                {proyecto.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proyecto.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-400 text-sm font-semibold px-3 py-1 rounded-full border border-blue-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-gray-700 pt-4">
                <a
                  href={proyecto.linkRepo}
                  className="flex items-center text-gray-300 hover:text-white font-medium transition-colors"
                >
                  <span className="mr-2">💻</span>
                  Ver Código
                </a>
                <a
                  href={proyecto.linkDemo}
                  target={proyecto.linkDemo !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-400 font-medium transition-colors"
                >
                  <span className="mr-2">🚀</span>
                  Ver Detalles
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
