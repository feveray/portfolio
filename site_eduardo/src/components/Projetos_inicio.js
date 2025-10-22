import React, { useState } from 'react';
import floresEliImg from '../img/flores-eli.png';
import arkanaBikesImg from '../img/arkana-bikes.png';
import medsImg from '../img/meds.png';

const projects = [
  {
    title: 'Flores Eli',
    category: 'E-commerce',
    description: 'Loja online de flores com foco em experiência do usuário e conversão.',
    image: floresEliImg,
  },
  {
    title: 'ARKANA Bikes',
    category: 'Landing Page',
    description: 'Página institucional para startup de bicicletas elétricas.',
    image: arkanaBikesImg,
  },
  {
    title: 'Meds',
    category: 'App Mobile',
    description: 'Aplicativo para controle de medicamentos e lembretes de saúde.',
    image: medsImg,
  },
];

export default function Projetos() {
  const [selected, setSelected] = useState(null);
  return (
      <>
      <header className="bg-gradient from-primary to-secondary pt-20 pb-20 px-64 w-full">
        <section id="sobre" className="w-full">
          <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-black">SOBRE MIM</h1>
        </section>
      </header>
  
  <section id="portfolio" className="py-16 px-4 bg-neutral-light">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-title text-3xl font-bold text-primary mb-8">Portfólio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="bg-white border border-neutral-light rounded-lg shadow-sm hover:shadow-lg hover:bg-primary/10 transition-all p-6 flex flex-col items-center"
            >
              <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded mb-4" />
              <h3 className="font-title text-xl font-bold text-primary mb-2">{project.title}</h3>
              <span className="text-secondary font-semibold mb-2">{project.category}</span>
              <p className="text-neutral-dark text-sm mb-4 text-center">{project.description}</p>
              <button
                className="bg-secondary text-white font-title px-4 py-2 rounded hover:bg-primary transition"
                onClick={() => setSelected(idx)}
              >
                Saiba mais
              </button>
            </div>
          ))}
        </div>
        {selected !== null && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl relative">
              <button
                className="absolute top-2 right-2 text-neutral-medium text-2xl"
                onClick={() => setSelected(null)}
                aria-label="Fechar"
              >×</button>
              <img src={projects[selected].image} alt={projects[selected].title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="font-title text-2xl font-bold text-primary mb-2">{projects[selected].title}</h3>
              <span className="text-secondary font-semibold mb-2">{projects[selected].category}</span>
              <p className="text-neutral-dark text-base mb-4">{projects[selected].description}</p>
              <a href="#" className="bg-primary text-white px-4 py-2 rounded font-title hover:bg-secondary transition">Ver projeto</a>
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  );
}