import { useState } from "react";
import { FaArrowRight, FaCircleCheck, FaEnvelope, FaGithub, FaPaperPlane, FaSpinner } from "react-icons/fa6";

const ENDPOINT = "https://script.google.com/macros/s/AKfycbys7Zf_8iYrUArMpFPda38k3195skCnkOQFql5J-_felVM207KEsOVk_AQMU6UW7uOO/exec";
const escapeHtml = (value) => value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = ({ target }) => { setFormData((current) => ({ ...current, [target.name]: target.value })); if (status !== "idle") setStatus("idle"); };
  const handleSubmit = async (event) => {
    event.preventDefault(); setStatus("sending");
    const safe = Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, escapeHtml(value.trim())]));
    try {
      await fetch(ENDPOINT, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ to: "yonatanfranco339@gmail.com", subject: `Portafolio: contacto de ${safe.name}`, html: `<h2>Nuevo contacto desde el portafolio</h2><p><strong>Nombre:</strong> ${safe.name}</p><p><strong>Correo:</strong> ${safe.email}</p><p><strong>Mensaje:</strong></p><p>${safe.message.replace(/\n/g, "<br>")}</p>` }) });
      setFormData({ name: "", email: "", message: "" }); setStatus("success");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contacto" className="section-shell relative overflow-hidden bg-[#3151c6]">
      <div className="contact-glow" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div><p className="section-kicker text-[#dce6ff]">04 · Contacto</p><h2 className="mt-5 text-[clamp(3rem,6vw,5.7rem)] font-black leading-[.92] tracking-[-0.06em] text-white">Hagamos que la próxima idea funcione.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-[#d9e2ff]">Estoy disponible para oportunidades full-stack, proyectos freelance y colaboraciones.</p>
            <div className="mt-10 space-y-4"><a href="mailto:yonatanfranco339@gmail.com" className="contact-link"><FaEnvelope aria-hidden="true" /> yonatanfranco339@gmail.com</a><a href="https://github.com/Yonatanuh" target="_blank" rel="noreferrer" className="contact-link"><FaGithub aria-hidden="true" /> GitHub <FaArrowRight className="ml-auto" aria-hidden="true" /></a></div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 text-[#07111f] shadow-2xl shadow-[#15275f]/25 sm:p-9" aria-label="Formulario de contacto">
            <div className="grid gap-5 sm:grid-cols-2"><label className="form-field"><span>Nombre</span><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required disabled={status === "sending"} autoComplete="name" /></label><label className="form-field"><span>Correo</span><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tu@correo.com" required disabled={status === "sending"} autoComplete="email" /></label></div>
            <label className="form-field mt-5"><span>Cuéntame sobre el proyecto</span><textarea name="message" value={formData.message} onChange={handleChange} placeholder="Objetivo, alcance o desafío principal..." rows="6" required disabled={status === "sending"} /></label>
            <div aria-live="polite" className="mt-4 min-h-6 text-sm">{status === "success" && <p className="flex items-center gap-2 font-semibold text-emerald-700"><FaCircleCheck /> Mensaje enviado. Te responderé pronto.</p>}{status === "error" && <p className="text-red-700">No se pudo enviar. Escríbeme directamente al correo indicado.</p>}</div>
            <button type="submit" disabled={status === "sending"} className="button mt-4 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60">{status === "sending" ? <><FaSpinner className="animate-spin" /> Enviando</> : <>Enviar mensaje <FaPaperPlane aria-hidden="true" /></>}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
