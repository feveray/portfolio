import React, { useState } from 'react';
import BackToTopButton from '../components/BackToTopButton';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    // aqui você pode enviar para API ou limpar o form, ex:
    // setForm({ nome: '', email: '', mensagem: '' });
  }

  return (
    <>
      <header className="relative sombra-personalizada bg-gradient from-primary to-secondary pt-20 pb-20 px-64 w-full">
        <section id="sobre" className="w-full">
          <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">CONTATO</h1>
        </section>
      </header>

      <section id="contato" className="py-16 px-4 bg-neutral-light">
        <div className="max-w-4xl mx-auto text-left">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col justify-center">
              <p className="text-neutral-dark mb-8">Preencha o formulário abaixo para entrar em contato ou utilize as redes sociais:</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-[#51572c] w-5 h-5 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-title font-bold text-[#51572c] text-left">E-mail:</h4>
                    <p className="text-neutral-dark">edelunafbueno@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaWhatsapp className="text-[#51572c] w-5 h-5 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-title font-bold text-[#51572c] text-left">Whatsapp:</h4>
                    <p className="text-neutral-dark">+55 11 99273-6662</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#51572c] w-5 h-5 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-title font-bold text-[#51572c] text-left">Localização:</h4>
                    <p className="text-neutral-dark mb-4">São Paulo, SP, Brasil</p>
                  </div>
                </div>

                <h4 className="font-title font-bold text-[#51572c] text-left mt-2 mb-1">Redes sociais:</h4>
                <div className="flex justify-center gap-4 text-xl">
                  <a href="https://linkedin.com/in/eduardodeluna" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary flex items-center gap-2">
                    <FaLinkedin /> <span className="text-base">LinkedIn</span>
                  </a>
                  <a href="https://github.com/feveray" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary flex items-center gap-2">
                    <FaGithub /> <span className="text-base">GitHub</span>
                  </a>
                  <a href="https://instagram.com/eduardodeluna" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary flex items-center gap-2">
                    <FaInstagram /> <span className="text-base">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 flex flex-col gap-6 mb-8 max-w-md md:max-w-none mx-auto md:mx-0">
                <input value={form.nome} onChange={handleChange} type="text" name="nome" placeholder="Nome" className="border border-neutral-light rounded px-4 py-2 focus:outline-none focus:border-primary" required />
                <input value={form.email} onChange={handleChange} type="email" name="email" placeholder="E-mail" className="border border-neutral-light rounded px-4 py-2 focus:outline-none focus:border-primary" required />
                <textarea value={form.mensagem} onChange={handleChange} name="mensagem" placeholder="Mensagem" rows="5" className="border border-neutral-light rounded px-4 py-2 focus:outline-none focus:border-primary resize-none" required></textarea>
                <button type="submit" className="bg-primary text-white font-bold px-6 py-2 rounded hover:bg-secondary transition">Enviar</button>
                {sent && <p className="text-green-600 mt-2">Mensagem enviada (simulada).</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </>
  );
}
