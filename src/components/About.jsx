import { FaCode, FaLayerGroup, FaShieldHalved } from "react-icons/fa6";

const pillars = [
  { icon: FaCode, title: "Desarrollo integral", text: "Interfaces, APIs y datos pensados como un solo producto coherente." },
  { icon: FaShieldHalved, title: "Seguridad desde el inicio", text: "Autenticación, permisos y validaciones integrados en la arquitectura." },
  { icon: FaLayerGroup, title: "Sistemas que pueden crecer", text: "Código modular, mantenible y preparado para evolucionar con el negocio." },
];

const About = () => (
  <section id="sobre-mi" className="section-shell bg-[#f2f3ed] text-[#07111f]">
    <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
        <div><p className="section-kicker section-kicker--dark">01 · Perfil</p><h2 className="section-title section-title--dark mt-5">Pensamiento técnico con visión de producto.</h2></div>
        <div><p className="text-2xl font-medium leading-[1.45] tracking-[-0.025em] text-[#26384a] sm:text-3xl">Conecto las necesidades del negocio con decisiones técnicas claras para entregar experiencias rápidas, seguras y fáciles de usar.</p><p className="mt-6 max-w-3xl text-base leading-7 text-[#607083]">Mi experiencia combina React, Java Spring Boot, Node.js, Python y bases de datos modernas. Me interesa especialmente el punto donde una buena arquitectura se convierte en una experiencia simple para las personas.</p></div>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#d3d8d4] bg-[#d3d8d4] md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }, index) => <article key={title} className="bg-[#f8f9f4] p-7 sm:p-9"><div className="flex items-center justify-between"><Icon className="text-xl text-[#3151c6]" aria-hidden="true" /><span className="font-mono text-xs text-[#8793a0]">0{index + 1}</span></div><h3 className="mt-12 text-xl font-bold tracking-[-0.025em]">{title}</h3><p className="mt-3 leading-7 text-[#667587]">{text}</p></article>)}
      </div>
    </div>
  </section>
);

export default About;
