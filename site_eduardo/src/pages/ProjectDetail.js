import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import floresEliImg from '../components/img/flores-eli.png';
import arkanaBikesImg from '../components/img/arkana-bikes.png';
import medsImg from '../components/img/meds.png';

const uxui = [
  { title: 'Flores Eli', category: 'UX/UI', description: 'Loja online de flores com foco em experiência do usuário e conversão.', image: floresEliImg },
  { title: 'ARKANA Bikes', category: 'UX/UI', description: 'Página institucional para startup de bicicletas elétricas.', image: arkanaBikesImg },
  { title: 'Meds', category: 'UX/UI', description: 'Aplicativo para controle de medicamentos e lembretes de saúde.', image: medsImg },
];

const frontend = [
  { title: 'Curso React', category: 'Front-end', description: 'Curso completo de ReactJS.', image: floresEliImg },
  { title: 'Curso UX Design', category: 'Design', description: 'Formação Google UX Design.', image: arkanaBikesImg },
  { title: 'Banco de Dados', category: 'Back-end', description: 'Superior em Banco de Dados pela UniBTA.', image: medsImg },
];

const makeSlug = (title) =>
  title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const all = [...uxui, ...frontend];
  const project = all.find(p => makeSlug(p.title) === slug);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Projeto não encontrado</h2>
          <Link to="/projetos" className="text-primary underline">Voltar para Projetos</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <header className="relative sombra-personalizada bg-gradient from-primary to-secondary pt-20 pb-20 px-64 w-full">
        <section id="projetos" className="w-full">
          <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">PROJETOS</h1>
        </section>
      </header>

      <section className="py-16 px-4 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow">
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded mb-6" />
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <span className="text-secondary font-semibold mb-4 block">{project.category}</span>
          <p className="text-neutral-dark mb-6">{project.description}</p>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="bg-neutral-light text-primary px-4 py-2 rounded hover:bg-primary/10 transition"
            >
              Voltar
            </button>
            <Link to="/projetos" className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
              Ir para Projetos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}