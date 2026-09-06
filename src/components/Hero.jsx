import profilePic from "../assets/imagen-perfil/profile.png";
// IMPORTAMOS LOS ÍCONOS AQUÍ
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-8">
          {/* Profile image */}
          <div className="flex-shrink-0 transform md:-translate-x-38 md:-translate-y-8">
            <div className="w-48 h-48 md:w-85 md:h-85 rounded-full ring-4 ring-blue-600/30 bg-gradient-to-br from-blue-800 to-purple-600 p-1 shadow-xl overflow-hidden">
              <img
                src={profilePic}
                alt="Foto de Jonathan Gonzalez"
                className="w-full h-full object-cover rounded-full"
                style={{ objectPosition: "18% 50%" }}
              />
            </div>
          </div>

          {/* Text content */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 border border-blue-700 text-blue-400 text-sm font-semibold mb-4">
                Disponible para nuevos proyectos
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Jonathan Gonzalez
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-4">
              Desarrollador Full Stack &{" "}
              <span className="text-green-400">
                Entusiasta de la Ciberseguridad
              </span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg mb-6 max-w-xl leading-relaxed">
              Me especializo en construir aplicaciones web dinámicas y
              escalables, integrando buenas prácticas de seguridad y análisis de
              riesgos desde el diseño hasta el despliegue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <a
                href="#proyectos"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Ver mis proyectos
              </a>
              <a
                href="#contacto"
                className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contactar
              </a>
            </div>

            {/* Website link */}
            <div className="mt-4">
              <a
                href="https://www.yonild-apks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-blue-300 hover:text-white bg-blue-900/30 border border-blue-700 py-2 px-4 rounded-full text-sm font-semibold shadow-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3l7 7m0 0v7a2 2 0 0 1-2 2h-7m9-9L10 21"
                  />
                </svg>
                Visitar mi página
              </a>
            </div>

            {/* SOCIAL LINKS MODIFICADOS AQUÍ CON LOS ÍCONOS */}
            <div className="mt-8 flex gap-6 justify-center md:justify-start">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                {/* Ícono de GitHub */}
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                {/* Ícono de LinkedIn */}
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                aria-label="Twitter / X"
              >
                {/* Ícono de X (Twitter) */}
                <FaXTwitter className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
