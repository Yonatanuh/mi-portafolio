import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaGithub } from "react-icons/fa6";
import profilePic from "../assets/imagen-perfil/profile.png";

const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

const Hero = () => (
  <section id="inicio" className="relative isolate overflow-hidden pt-[72px]">
    <div className="hero-grid" aria-hidden="true" /><div className="hero-glow" aria-hidden="true" />
    <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-[1240px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-20 lg:py-20">
      <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }} className="relative z-10">
        <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="eyebrow mb-7"><span className="status-dot" /> Disponible para oportunidades</motion.div>
        <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#9db1c8]">Full-stack developer · Ciberseguridad</motion.p>
        <motion.h1 variants={fadeUp} transition={{ duration: 0.55 }} className="max-w-4xl text-[clamp(3.2rem,8vw,6.8rem)] font-black leading-[0.9] tracking-[-0.065em] text-white">Construyo software que inspira <span className="text-[#c7f464]">confianza.</span></motion.h1>
        <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="mt-7 max-w-2xl text-lg leading-8 text-[#aebed0] sm:text-xl">Soy Jonathan González. Diseño y desarrollo productos web robustos, desde interfaces claras hasta APIs seguras y automatizaciones que resuelven problemas reales.</motion.p>
        <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#proyectos" className="button">Ver proyectos <FaArrowRight aria-hidden="true" /></a>
          <a href="/cv.pdf" download="CV-Jonathan-Gonzalez.pdf" className="button button--secondary"><FaDownload aria-hidden="true" /> Descargar CV</a>
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-[#91a5bb]">
          <span>Santo Domingo · Remoto</span>
          <a href="https://github.com/Yonatanuh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white hover:text-[#c7f464]"><FaGithub aria-hidden="true" /> github.com/Yonatanuh</a>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto w-full max-w-[470px] lg:mr-0">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-[#0c1b2d] p-2 shadow-2xl shadow-black/30">
          <img src={profilePic} alt="Retrato profesional de Jonathan González" width="512" height="683" fetchPriority="high" className="h-full w-full rounded-[1.55rem] object-cover object-[50%_35%]" />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[#07111f]/90 p-4 backdrop-blur-xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c7f464]">Enfoque</p><p className="mt-1 font-semibold text-white">Producto, rendimiento y seguridad</p></div>
        </div>
        <div className="absolute -right-5 -top-5 hidden rounded-2xl border border-white/10 bg-[#102238] px-5 py-4 shadow-xl sm:block"><p className="font-mono text-xs text-[#9db1c8]">CURRENTLY_BUILDING</p><p className="mt-1 font-bold text-white">Soluciones escalables</p></div>
      </motion.div>
    </div>
    <div className="expertise-rail" aria-label="Áreas de especialización">
      <div><span>PRODUCTO DIGITAL</span><i>✦</i><span>FULL-STACK</span><i>✦</i><span>AUTOMATIZACIÓN</span><i>✦</i><span>CIBERSEGURIDAD</span><i>✦</i><span>APIs & DATOS</span></div>
    </div>
  </section>
);

export default Hero;
