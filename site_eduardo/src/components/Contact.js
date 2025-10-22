import React, { useState } from 'react';
import BackToTopButton from '../components/BackToTopButton';

export default function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <header className="relative sombra personalizada bg-gradient from-primary to-secondary pt-20 pb-20 px-64 w-full">
          <section id="sobre" className="w-full">
            <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">
            CONTATO</h1>
        </section>
      </header> 
    
    
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-title text-3xl font-bold text-primary mb-8">Contato</h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="border border-neutral-light rounded px-4 py-2 text-neutral-dark bg-neutral-light focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-neutral-light rounded px-4 py-2 text-neutral-dark bg-neutral-light focus:outline-none focus:border-primary"
          />
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
            rows={4}
            className="border border-neutral-light rounded px-4 py-2 text-neutral-dark bg-neutral-light focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="bg-secondary text-white font-title px-6 py-2 rounded hover:bg-primary transition"
          >
            Enviar
          </button>
          {sent && <span className="text-primary font-bold">Mensagem enviada! Obrigado.</span>}
        </form>
        <div className="flex gap-8 mt-8 justify-center">
          <a href="https://linkedin.com/in/eduardodeluna" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary text-2xl">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/eduardodeluna" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary text-2xl">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </section>
      <BackToTopButton />
    </>
  );
}
