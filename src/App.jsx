import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050510] text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050510]/85 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo de Marca Personal */}
            <div className="shrink-0">
              <a
                href="#"
                className="text-2xl md:text-3xl font-extrabold text-white tracking-tight ml-2 md:ml-4 transition-transform hover:scale-105 flex items-center group"
              >
                <span className="text-cyan-400 font-mono mr-1 group-hover:-translate-x-0.5 transition-transform">&lt;</span>
                Jonathan
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  .dev
                </span>
                <span className="text-cyan-400 font-mono ml-1 group-hover:translate-x-0.5 transition-transform">/&gt;</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection("sobre-mi")}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                >
                  Sobre Mí
                </button>
                <button
                  onClick={() => scrollToSection("habilidades")}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                >
                  Habilidades
                </button>
                <button
                  onClick={() => scrollToSection("proyectos")}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                >
                  Proyectos
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
                >
                  Contacto
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg border border-white/10"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a1a] border-b border-white/10 px-4 pt-3 pb-5 space-y-2 mt-2">
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2.5 rounded-lg text-base font-medium w-full text-left"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("habilidades")}
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2.5 rounded-lg text-base font-medium w-full text-left"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2.5 rounded-lg text-base font-medium w-full text-left"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold block px-3 py-2.5 rounded-xl text-base w-full text-center mt-3"
            >
              Contacto
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-[#03030a] py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <p className="text-gray-300 font-medium">
            © {new Date().getFullYear()} Jonathan Gonzalez. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Diseñado y desarrollado con React, Tailwind CSS y Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
