import React from 'react';
import emailjs from '@emailjs/browser';

export default function EmailForm() {
  const formRef = React.useRef(null);
  const [sending, setSending] = React.useState(false);

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert('Mensagem enviada — obrigado!');
        formRef.current.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('Erro ao enviar. Verifique o console e painel do EmailJS.');
      })
      .finally(() => setSending(false));
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-8 flex flex-col gap-6 mb-8 max-w-md md:max-w-none mx-auto md:mx-0"
    >
      <input type="text" name="nome" placeholder="Nome" className="border border-neutral-light rounded px-4 py-2 focus:outline-none focus:border-primary" required />
      <input type="email" name="email" placeholder="E-mail" className="border border-neutral-light rounded px-4 py-2 focus:outline-none focus:border-primary" required />
      <textarea name="mensagem" placeholder="Mensagem" rows="5" className="border border-neutral-light rounded px-4 py-2 focus:outline-none focus:border-primary resize-none" required></textarea>
      <button
        type="submit"
        disabled={sending}
        className="bg-primary text-white font-bold px-6 py-2 rounded hover:bg-secondary transition disabled:opacity-60"
      >
        {sending ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}
