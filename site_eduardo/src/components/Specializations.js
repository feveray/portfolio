import React from 'react';

const specs = [
  {
    title: 'UX/UI Design',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    desc: 'Criação de interfaces intuitivas, acessíveis e centradas no usuário.'
  },
  {
    title: 'Banco de Dados',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    desc: 'Modelagem, administração e segurança de dados relacionais.'
  },
  {
    title: 'Segurança Cibernética',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    desc: 'Boas práticas para proteção de sistemas e dados.'
  },
];

export default function Specializations() {
  return (
    <section id="specializations" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-title text-3xl font-bold text-primary mb-8">Especializações</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specs.map(spec => (
            <div key={spec.title} className="flex flex-col items-center bg-neutral-light rounded-lg p-6 border border-neutral-light shadow-sm hover:bg-primary/10 transition">
              <img src={spec.icon} alt={spec.title} className="w-12 h-12 mb-4 grayscale" />
              <h3 className="font-title text-xl font-bold text-primary mb-2">{spec.title}</h3>
              <p className="text-neutral-dark text-center">{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
