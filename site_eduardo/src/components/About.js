import React from 'react';

const skills = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-title text-3xl font-bold text-primary mb-6">Sobre mim</h2>
        <p className="text-neutral-dark text-lg mb-4">
          Olá! Sou Eduardo de Luna, apaixonado por design de interfaces e tecnologia. Formado em Sistemas de Informação, atuo como UX/UI Designer e desenvolvedor de banco de dados júnior. Busco criar soluções digitais que unem estética, funcionalidade e segurança.
        </p>
        <div className="flex flex-wrap gap-8 items-center justify-center mt-8">
          {skills.map(skill => (
            <div key={skill.name} className="flex flex-col items-center">
              <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2 grayscale" />
              <span className="text-neutral-medium text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
