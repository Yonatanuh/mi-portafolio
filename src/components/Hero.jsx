import profilePic from "../assets/imagen-perfil/profile.png";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#050510] min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12">
          {/* Profile image with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex-shrink-0 transform md:-translate-x-12"
          >
            <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full p-1 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 rounded-full animate-spin-slow opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-1 bg-[#050510] rounded-full"></div>
              <img
                src={profilePic}
                alt="Foto de Jonathan Gonzalez"
                className="relative w-full h-full object-cover rounded-full z-10 border-4 border-transparent"
                style={{ objectPosition: "18% 50%" }}
              />
            </div>
          </motion.div>

          {/* Text content with staggered animation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="text-center md:text-left flex-1"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mb-6"
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                🚀 Disponible para nuevos retos
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight"
            >
              Hola, soy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Jonathan
              </span>
            </motion.h1>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
            >
              Desarrollador Full Stack &{" "}
              <span className="text-cyan-400">Experto en Seguridad</span>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
            >
              Transformo ideas complejas en experiencias web excepcionales.
              Especializado en React, Spring Boot, automatización en Python y
              arquitecturas de nube seguras.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            >
              <a
                href="#proyectos"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
              >
                Ver mis proyectos
              </a>
              <a
                href="#contacto"
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Contactar
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-10 flex gap-6 justify-center md:justify-start"
            >
              <a
                href="https://github.com/Yonatanuh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 hover:-translate-y-1 duration-300"
              >
                <FaGithub className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#0A66C2] transition-colors transform hover:scale-110 hover:-translate-y-1 duration-300"
              >
                <FaLinkedin className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 hover:-translate-y-1 duration-300"
              >
                <FaXTwitter className="text-4xl" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
