import { useState } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane, FaCircleCheck, FaSpinner } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const payload = {
      to: "yonatanfranco339@gmail.com",
      subject: `🚀 Portafolio: Nuevo contacto de ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #1e293b;">
          <h2 style="color: #38bdf8; margin-top: 0; padding-bottom: 12px; border-bottom: 1px solid #334155;">Nuevo Mensaje desde tu Portafolio Web</h2>
          <p style="font-size: 16px; margin: 12px 0;"><strong>Nombre:</strong> ${formData.name}</p>
          <p style="font-size: 16px; margin: 12px 0;"><strong>Correo de contacto:</strong> <a href="mailto:${formData.email}" style="color: #60a5fa;">${formData.email}</a></p>
          <div style="margin-top: 20px; padding: 18px; background: #1e293b; border-left: 4px solid #38bdf8; border-radius: 6px;">
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; font-size: 15px; color: #e2e8f0;">${formData.message}</p>
          </div>
          <p style="font-size: 12px; color: #64748b; margin-top: 25px; border-top: 1px solid #334155; padding-top: 12px;">Enviado desde el formulario de contacto de tu portafolio web personal.</p>
        </div>
      `,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbys7Zf_8iYrUArMpFPda38k3195skCnkOQFql5J-_felVM207KEsOVk_AQMU6UW7uOO/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="bg-[#050510] py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_70%)] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Trabajemos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Juntos
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            ¿Tienes un proyecto en mente o buscas un desarrollador Full Stack? Hablemos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-900/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          {/* Columna Izquierda: Información y Redes */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ponte en contacto
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Actualmente estoy abierto a nuevas oportunidades, proyectos freelance y colaboraciones. Envíame un mensaje y te responderé a la brevedad posible.
            </p>

            <div className="space-y-6 mb-8">
              {/* Ubicación */}
              <div className="flex items-center text-gray-300">
                <span className="bg-gray-800/80 border border-gray-700 p-3 rounded-full mr-4 text-cyan-400 text-xl">
                  📍
                </span>
                <span>
                  Santo Domingo, República Dominicana (Disponibilidad remota y presencial)
                </span>
              </div>

              {/* Email Directo */}
              <div className="flex items-center text-gray-300">
                <span className="bg-gray-800/80 border border-gray-700 p-3 rounded-full mr-4 text-cyan-400 text-xl">
                  ✉️
                </span>
                <a
                  href="mailto:yonatanfranco339@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  yonatanfranco339@gmail.com
                </a>
              </div>
            </div>

            {/* Enlaces Sociales */}
            <div>
              <p className="text-white font-semibold mb-4">Mis Redes:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Yonatanuh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/80 hover:bg-blue-600 text-gray-300 hover:text-white transition-all p-3 rounded-xl border border-gray-700 hover:border-blue-500 transform hover:-translate-y-1 flex items-center gap-2 shadow-lg"
                >
                  <FaGithub className="text-xl" />
                  <span className="font-bold text-sm">GitHub</span>
                </a>
                <a
                  href="https://github.com/Yonatanuh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/80 hover:bg-[#0A66C2] text-gray-300 hover:text-white transition-all p-3 rounded-xl border border-gray-700 hover:border-[#0A66C2] transform hover:-translate-y-1 flex items-center gap-2 shadow-lg"
                >
                  <FaLinkedin className="text-xl" />
                  <span className="font-bold text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {submitStatus === "success" && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
                <FaCircleCheck className="text-2xl shrink-0" />
                <div>
                  <p className="font-bold">¡Mensaje enviado con éxito!</p>
                  <p className="text-xs text-emerald-300">
                    He recibido tu mensaje en mi correo y te responderé lo más pronto posible.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
                Hubo un inconveniente al enviar el mensaje. También puedes escribirme directamente a{" "}
                <a href="mailto:yonatanfranco339@gmail.com" className="underline font-bold">
                  yonatanfranco339@gmail.com
                </a>.
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-300 text-sm font-semibold">
                Tu Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
                className="bg-black/40 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-300 text-sm font-semibold">
                Tu Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                className="bg-black/40 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-500"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-300 text-sm font-semibold">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hola Jonathan, me gustaría hablar sobre un proyecto..."
                rows="5"
                className="bg-black/40 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none placeholder:text-gray-500"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] flex justify-center items-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin text-lg" />
                  <span>Enviando mensaje...</span>
                </>
              ) : (
                <>
                  <span>Enviar Mensaje</span>
                  <FaPaperPlane className="text-sm" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
