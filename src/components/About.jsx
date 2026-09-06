const About = () => {
  return (
    <section id="sobre-mi" className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Sobre Mí
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">
              Mi Historia
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Soy un desarrollador de software apasionado por crear soluciones
              tecnológicas innovadoras. Con una sólida formación en desarrollo
              full stack y un profundo interés en ciberseguridad, me esfuerzo
              por construir aplicaciones no solo funcionales, sino también
              seguras y escalables.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Mi viaje en la tecnología comenzó con la curiosidad de entender
              cómo funcionan las cosas, y hoy en día transformo esa curiosidad
              en soluciones prácticas que resuelven problemas reales.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">
              Mis Valores
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-3">✓</span>
                <span className="text-gray-300">Calidad y código limpio</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-3">✓</span>
                <span className="text-gray-300">Seguridad en primer lugar</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-3">✓</span>
                <span className="text-gray-300">Aprendizaje continuo</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-3">✓</span>
                <span className="text-gray-300">Resolución de problemas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
