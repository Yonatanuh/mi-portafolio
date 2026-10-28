import { FaArrowUpRightFromSquare, FaGithub, FaShieldHalved } from "react-icons/fa6";

const projects = [
  { number: "01", title: "WhatsApp Gateway & Cobranzas", type: "Automatización empresarial", lead: "Una operación de mensajería compleja convertida en un centro de control claro y seguro.", description: "Arquitectura full-stack para campañas, cobros y seguimiento en tiempo real. Incluye perfiles RBAC, tareas programadas y persistencia distribuida.", contributions: ["Consola en tiempo real con WebSockets", "Roles Admin, Cliente y Demo", "Procesamiento programado y trazabilidad"], stack: ["React", "Node.js", "Socket.IO", "MongoDB", "Puppeteer"], repo: "https://github.com/Yonatanuh/bot-whatsapp-mensajes-automatico", demo: "https://bot-whatsapp-mensajes-automatico.vercel.app", access: "demo@ventas.com · demo123", image: "/projects/whatsapp-gateway.jpg", imageAlt: "Pantalla real de acceso de WhatsApp Gateway y Cobranzas", accent: "lime" },
  { number: "02", title: "Neo Banco", type: "Fintech full-stack", lead: "Una experiencia bancaria que prioriza claridad, seguridad y respuesta inmediata.", description: "Producto digital para administrar saldo, tarjetas virtuales y movimientos con autenticación JWT y notificaciones automáticas.", contributions: ["Flujo de autenticación y autorización", "API REST con Spring Boot", "Diseño adaptable para operaciones diarias"], stack: ["React", "Spring Boot", "MongoDB", "Docker", "JWT"], repo: "https://github.com/Yonatanuh/Neo-banco", demo: "https://neo-banco.vercel.app", image: "/projects/neo-banco.jpg", imageAlt: "Pantalla real de acceso de la aplicación Neo Banco", accent: "blue" },
  { number: "03", title: "Yonild APKS TV", type: "Plataforma multimedia", lead: "Descubrimiento de contenido pensado para pantallas, categorías y navegación rápida.", description: "Catálogo dinámico para aplicaciones Android y Smart TV, con filtros, gestión de contenido y almacenamiento multimedia en la nube.", contributions: ["Exploración y filtros dinámicos", "Gestión integral del catálogo", "Activos multimedia con Cloudinary"], stack: ["React", "Node.js", "Cloudinary", "Tailwind CSS"], repo: "https://github.com/Yonatanuh", demo: "https://www.yonild-apks.com/", image: "/projects/yonild-apks.jpg", imageAlt: "Catálogo real de aplicaciones de Yonild APKS TV", accent: "violet" },
];

const Projects = () => (
  <section id="proyectos" className="section-shell bg-[#f2f3ed] text-[#07111f]">
    <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
      <div className="grid gap-8 border-b border-[#cfd6d0] pb-12 lg:grid-cols-[1fr_.6fr] lg:items-end">
        <div><p className="section-kicker section-kicker--dark">03 · Trabajo seleccionado</p><h2 className="section-title section-title--dark mt-5">No solo código.<br />Productos con intención.</h2></div>
        <p className="max-w-md text-lg leading-8 text-[#627183] lg:justify-self-end">Una selección de soluciones donde estrategia, experiencia de usuario y arquitectura trabajan juntas.</p>
      </div>

      <div className="divide-y divide-[#cfd6d0]">
        {projects.map((project, index) => {
          return (
            <article key={project.title} className="case-study py-16 lg:py-24">
              <div className="grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4"><span className="font-mono text-sm font-bold text-[#3151c6]">{project.number}</span><span className="h-px w-9 bg-[#aeb9b1]" /><span className="text-xs font-black uppercase tracking-[.14em] text-[#607083]">{project.type}</span></div>
                  <h3 className="mt-7 text-[clamp(2.6rem,5vw,4.7rem)] font-black leading-[.95] tracking-[-.06em]">{project.title}</h3>
                  <p className="mt-6 text-xl font-semibold leading-8 tracking-[-.02em] text-[#304255]">{project.lead}</p>
                  <p className="mt-4 leading-7 text-[#6b7888]">{project.description}</p>
                  <ul className="mt-7 space-y-3">{project.contributions.map((item) => <li key={item} className="case-point"><span>↳</span>{item}</li>)}</ul>
                  <ul className="mt-7 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.title}`}>{project.stack.map((tech) => <li key={tech} className="project-tech">{tech}</li>)}</ul>
                  {project.access && <p className="mt-6 font-mono text-xs text-[#59697a]"><b className="font-sans text-[#26384a]">Acceso demo</b> · {project.access}</p>}
                  <div className="mt-8 flex flex-wrap gap-3"><a href={project.demo} target="_blank" rel="noreferrer" className="project-link">Explorar producto <FaArrowUpRightFromSquare aria-hidden="true" /></a><a href={project.repo} target="_blank" rel="noreferrer" className="project-link project-link--muted"><FaGithub aria-hidden="true" /> Repositorio</a></div>
                </div>
                <div className={`project-stage project-stage--${project.accent} ${index % 2 ? "lg:order-1" : ""}`}>
                  <div className="project-stage__label">Producto real · 0{index + 1}</div>
                  <div className="real-project-shot"><div className="real-project-shot__bar"><span /><span /><span /><p>{project.demo.replace("https://", "")}</p></div><img src={project.image} alt={project.imageAlt} width="1440" height="1080" loading="lazy" /></div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="security-note"><FaShieldHalved aria-hidden="true" /><div><p className="text-xs font-black uppercase tracking-[.15em] text-[#c7f464]">Trabajo de ciberseguridad</p><h3 className="mt-2 text-2xl font-bold text-white">Auditorías y matrices de riesgo</h3><p className="mt-2 max-w-2xl text-[#aebed0]">Evaluaciones para Farmacia Cyber Amistad y ANUNCIART, con análisis de controles, probabilidad, impacto y continuidad operativa.</p></div><span className="ml-auto hidden font-mono text-xs text-[#788da4] md:block">DOCUMENTACIÓN CONFIDENCIAL</span></div>
    </div>
  </section>
);

export default Projects;
