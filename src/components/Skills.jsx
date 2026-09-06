const Skills = () => {
  return (
    <section className="bg-gray-900 py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Mi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tecnologías con las que construyo soluciones escalables.
          </p>
        </div>

        {/* Grid de Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend Card */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
              Frontend
            </h3>
            <ul className="flex flex-wrap gap-2">
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                React
              </li>
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                JavaScript
              </li>
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                TypeScript
              </li>
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                Tailwind CSS
              </li>
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                HTML5 / CSS3
              </li>
            </ul>
          </div>

          {/* Backend MERN Card */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
              Backend (Node)
            </h3>
            <ul className="flex flex-wrap gap-2">
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                Node.js
              </li>
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                Python
              </li>
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                Express.js
              </li>
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                MongoDB
              </li>
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                REST APIs
              </li>
            </ul>
          </div>

          {/* Backend Java Card (NUEVO) */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-red-500/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              Ecosistema Java
            </h3>
            <ul className="flex flex-wrap gap-2">
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm border border-red-500/30">
                Java (Core)
              </li>
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                Spring Boot (Básico)
              </li>
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                JDBC
              </li>
              <li className="bg-gray-900 text-gray-300 px-3 py-1 rounded-md text-sm">
                Maven
              </li>
            </ul>
          </div>

          {/* Herramientas & Cloud Card */}
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 md:col-span-2 lg:col-span-3 hover:border-purple-500/50 transition-colors duration-300">
            <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
              Infraestructura, DevOps & Herramientas
            </h3>
            <ul className="flex flex-wrap gap-3">
              <li className="bg-gray-900 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Git & GitHub
              </li>
              <li className="bg-gray-900 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Vercel
              </li>
              <li className="bg-gray-900 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Cloudinary
              </li>
              <li className="bg-gray-900 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold">
                VS Code & Terminal
              </li>
              <li className="bg-gray-900 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Ciberseguridad Básica
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
