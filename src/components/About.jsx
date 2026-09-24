const About = () => {
  return (
    <section id="sobre-mi" className="bg-[#050510] py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[45vw] h-[45vw] bg-[radial-gradient(circle,rgba(6,182,212,0.04)_0%,transparent_70%)] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-4 tracking-tight">
            Sobre Mí
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Pasión por la ingeniería de software, arquitectura limpia y seguridad digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-center space-y-5">
            <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span>🚀</span> Mi Trayectoria
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Soy un desarrollador de software enfocado en crear soluciones tecnológicas robustas. Con formación integral en desarrollo full-stack (React, Java Spring Boot, Python) y especial énfasis en ciberseguridad, diseño aplicaciones resilientes, seguras y de alto rendimiento.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Mi objetivo es traducir requerimientos complejos de negocio en productos digitales intuitivos, escalables y protegidos con las mejores prácticas de la industria.
            </p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span>🛡️</span> Principios de Ingeniería
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-cyan-400 text-xl mr-3 font-bold">✓</span>
                <div>
                  <span className="text-white font-semibold block">Seguridad por Diseño (Security-First)</span>
                  <span className="text-gray-400 text-sm">Validación estricta, prevención OWASP y control de acceso robusto.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 text-xl mr-3 font-bold">✓</span>
                <div>
                  <span className="text-white font-semibold block">Arquitectura Limpia & Modular</span>
                  <span className="text-gray-400 text-sm">Código desacoplado, mantenible y testeable a largo plazo.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 text-xl mr-3 font-bold">✓</span>
                <div>
                  <span className="text-white font-semibold block">Experiencia de Usuario Fluida</span>
                  <span className="text-gray-400 text-sm">Interfaces ultra-responsivas con 60 FPS y rendimiento optimizado.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 text-xl mr-3 font-bold">✓</span>
                <div>
                  <span className="text-white font-semibold block">Evolución Continua</span>
                  <span className="text-gray-400 text-sm">Adopción constante de tecnologías de vanguardia y metodologías ágiles.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
