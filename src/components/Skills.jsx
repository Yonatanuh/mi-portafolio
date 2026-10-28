import { motion } from "framer-motion";

const groups = [
  { number: "01", label: "Frontend", lead: "Interfaces rápidas, accesibles y centradas en el usuario.", items: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML / CSS"] },
  { number: "02", label: "Backend", lead: "Servicios robustos y APIs preparadas para producción.", items: ["Java 21", "Spring Boot", "Node.js", "Express", "Python", "C# / .NET", "REST APIs"] },
  { number: "03", label: "Datos & Cloud", lead: "Persistencia, despliegue y operación con una base sólida.", items: ["PostgreSQL", "MongoDB", "SQL Server", "Docker", "Vercel", "Render", "Git / GitHub"] },
  { number: "04", label: "Seguridad", lead: "Riesgo y protección tratados como parte del producto.", items: ["JWT / RBAC", "OWASP", "Análisis de riesgos", "Auditoría", "Hardening", "Documentación técnica"] },
];

const Skills = () => (
  <section id="habilidades" className="section-shell bg-[#0c1929]">
    <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-kicker">02 · Experiencia</p>
          <h2 className="section-title mt-5">Tecnología elegida con intención.</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#9fb0c2]">No se trata de acumular herramientas, sino de combinar las correctas para entregar una solución confiable.</p>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {groups.map((group, index) => (
            <motion.article key={group.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45, delay: index * 0.05 }} className="grid gap-5 py-8 sm:grid-cols-[90px_1fr] sm:py-10">
              <span className="font-mono text-sm text-[#c7f464]">{group.number}</span>
              <div><h3 className="text-2xl font-bold tracking-[-0.03em] text-white">{group.label}</h3><p className="mt-2 text-[#9fb0c2]">{group.lead}</p><ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tecnologías de ${group.label}`}>{group.items.map((item) => <li key={item} className="skill-pill">{item}</li>)}</ul></div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
