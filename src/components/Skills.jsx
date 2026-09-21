import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#050510] py-24 px-4 relative overflow-hidden">
      {/* Background decoration optimizado */}
      <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-center items-center">
        <div className="w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(6,182,212,0.03)_0%,transparent_60%)] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Mi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tecnologías con las que construyo soluciones escalables.
          </p>
        </motion.div>

        {/* Grid de Habilidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Frontend Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <span className="p-2 bg-cyan-900/30 rounded-lg">🎨</span> Frontend
            </h3>
            <ul className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Vite",
                "JavaScript (ES6+)",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "HTML5 / CSS3",
              ].map((tech) => (
                <li
                  key={tech}
                  className="bg-black/50 border border-gray-800 text-gray-300 px-3 py-1.5 rounded-lg text-sm group-hover:border-cyan-900/50 transition-colors"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
              <span className="p-2 bg-green-900/30 rounded-lg">⚙️</span> Backend
            </h3>
            <ul className="flex flex-wrap gap-2">
              {[
                "Java 21",
                "Spring Boot",
                "C#",
                ".NET Core",
                "Node.js",
                "Express.js",
                "Python",
                "REST APIs",
              ].map((tech) => (
                <li
                  key={tech}
                  className="bg-black/50 border border-gray-800 text-gray-300 px-3 py-1.5 rounded-lg text-sm group-hover:border-green-900/50 transition-colors"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bases de Datos Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] group"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              <span className="p-2 bg-yellow-900/30 rounded-lg">🗄️</span> Bases
              de Datos
            </h3>
            <ul className="flex flex-wrap gap-2">
              {["SQL Server", "PostgreSQL", "MongoDB", "Entity Framework"].map(
                (tech) => (
                  <li
                    key={tech}
                    className="bg-black/50 border border-gray-800 text-gray-300 px-3 py-1.5 rounded-lg text-sm group-hover:border-yellow-900/50 transition-colors"
                  >
                    {tech}
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Herramientas & Cloud Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
              <span className="p-2 bg-purple-900/30 rounded-lg">☁️</span>{" "}
              Herramientas & Cloud
            </h3>
            <ul className="flex flex-wrap gap-2">
              {[
                "Git & GitHub",
                "Docker",
                "Render",
                "Vercel",
                "VS Code",
                "Ciberseguridad",
              ].map((tech) => (
                <li
                  key={tech}
                  className="bg-black/50 border border-gray-800 text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium group-hover:border-purple-900/50 transition-colors"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Habilidades Blandas Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:col-span-2 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] group"
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-6 flex items-center gap-3">
              <span className="p-2 bg-pink-900/30 rounded-lg">🤝</span>{" "}
              Habilidades Blandas
            </h3>
            <ul className="flex flex-wrap gap-3">
              {[
                "Trabajo en equipo",
                "Resolución de problemas",
                "Proactividad",
                "Innovación",
                "Comunicación asertiva",
                "Capacidad de análisis",
                "Adaptabilidad",
              ].map((tech) => (
                <li
                  key={tech}
                  className="bg-black/50 border border-gray-800 text-gray-300 px-4 py-2 rounded-xl text-sm font-semibold group-hover:border-pink-900/50 transition-colors"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
