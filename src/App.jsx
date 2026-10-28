import { useEffect, useState } from "react";
import { FaArrowUp, FaBars, FaXmark } from "react-icons/fa6";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const navItems = [["sobre-mi", "Perfil"], ["habilidades", "Experiencia"], ["proyectos", "Proyectos"]];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    const onKeyDown = (event) => event.key === "Escape" && setIsMenuOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-[#f4f5ef] selection:bg-[#c7f464] selection:text-[#07111f]">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
        <nav className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8" aria-label="Navegación principal">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir al inicio">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#c7f464] text-sm font-black text-[#07111f] transition-transform group-hover:rotate-6">JG</span>
            <span className="text-sm font-semibold tracking-[-0.02em] text-white">Jonathan González</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([id, label]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
            <a href="#contacto" className="button button--small">Hablemos</a>
          </div>
          <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-lg text-white md:hidden" aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isMenuOpen} aria-controls="mobile-menu" onClick={() => setIsMenuOpen((value) => !value)}>
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </nav>
        <div id="mobile-menu" className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}>
          <div className="flex flex-col gap-2 px-5 pb-6 pt-2">
            {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setIsMenuOpen(false)} className="mobile-menu__link">{label}</a>)}
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="button mt-2 justify-center">Hablemos</a>
          </div>
        </div>
      </header>

      <main id="contenido"><Hero /><About /><Skills /><Projects /><Contact /></main>

      <footer className="border-t border-white/10 bg-[#050c16]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-5 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Jonathan González. Desarrollo de producto digital.</p>
          <a href="#inicio" className="inline-flex items-center gap-2 text-white transition-colors hover:text-[#c7f464]">Volver arriba <FaArrowUp aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
