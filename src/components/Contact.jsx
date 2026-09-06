import { useState } from "react";

const Contact = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí luego conectaremos la lógica de envío (Node.js o Formspree)
    console.log("Datos enviados:", formData);
    alert("¡Mensaje de prueba enviado! Pronto conectaremos esto al backend.");
  };

  return (
    <section id="contacto" className="bg-gray-900 py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trabajemos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Juntos
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            ¿Tienes un proyecto en mente o buscas un desarrollador Full Stack?
            Hablemos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-800/30 p-8 md:p-12 rounded-3xl border border-gray-700/50 shadow-2xl">
          {/* Columna Izquierda: Información y Redes */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ponte en contacto
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Actualmente estoy abierto a nuevas oportunidades, proyectos
              freelance y colaboraciones. Si tienes alguna pregunta o
              simplemente quieres saludar, intentaré responderte lo antes
              posible.
            </p>

            <div className="space-y-6 mb-8">
              {/* Ubicación (CORREGIDO) */}
              <div className="flex items-center text-gray-300">
                <span className="bg-gray-800 p-3 rounded-full mr-4 text-blue-400">
                  📍
                </span>
                <span>
                  Santo Domingo, República Dominicana (Disponibilidad remota y
                  presencial)
                </span>
              </div>

              {/* Email Directo */}
              <div className="flex items-center text-gray-300">
                <span className="bg-gray-800 p-3 rounded-full mr-4 text-blue-400">
                  ✉️
                </span>
                <span>yonatanfranco339@gmail.com</span>
              </div>
            </div>

            {/* Enlaces Sociales */}
            <div>
              <p className="text-white font-semibold mb-4">Mis Redes:</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white transition-colors p-3 rounded-xl border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1"
                >
                  {/* Ícono de GitHub simplificado */}
                  <span className="font-bold">GitHub</span>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white transition-colors p-3 rounded-xl border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1"
                >
                  {/* Ícono de LinkedIn simplificado */}
                  <span className="font-bold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-gray-300 text-sm font-semibold"
              >
                Tu Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
                className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-gray-300 text-sm font-semibold"
              >
                Tu Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-gray-300 text-sm font-semibold"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hola, me gustaría hablar sobre..."
                rows="5"
                className="bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-500/25 flex justify-center items-center gap-2"
            >
              Enviar Mensaje
              <span>🚀</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
