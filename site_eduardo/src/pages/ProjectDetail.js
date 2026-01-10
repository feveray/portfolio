import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects } from '../data/EstudoCaso';

// Editable button/link labels and destinations
const BACK_BUTTON_TEXT = 'Voltar';
const PROJECTS_PAGE = '/projetos'; // rota interna — usar no "não encontrado"
const DEFAULT_PROTOTYPE_LINK = ''; // opcional fallback externo (ou deixe vazio)
const PROJECTS_LINK_TEXT = 'Protótipo'; // rótulo fallback para protótipo
const NOT_FOUND_LINK_TEXT = 'Voltar para Projetos';

const makeSlug = (title) =>
  title.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const all = projects;
  const project = all.find((p) => makeSlug(p.title) === slug);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Projeto não encontrado</h2>
          <Link to={PROJECTS_PAGE} className="text-primary underline">{NOT_FOUND_LINK_TEXT}</Link>
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
          <div className="flex gap-3 mb-6">
            <button
              onClick={() =>
                navigate('/projetos', {
                  state: { tab: project && project.category === 'UX/UI' ? 'uxui' : 'dev' },
                })
              }
              className="bg-neutral-light text-primary px-4 py-2 rounded hover:bg-primary/10 transition"
            >
              {BACK_BUTTON_TEXT}
            </button>
            {/* Mostrar o link de protótipo apenas se o projeto fornecer `prototypeLink` */}
            {project.prototypeLink && (
              <a
                href={project.prototypeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition"
              >
                {project.prototypeText || PROJECTS_LINK_TEXT}
              </a>
            )}
          </div>

          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <span className="text-secondary font-semibold mb-4 block">{project.category}</span>
          <p className="text-neutral-dark mb-4">{project.description}</p>

          <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded mb-6" />

          <section className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">Estudo de Caso</h2>
            {project.caseStudy && project.caseStudy.length > 0 ? (
              <ul className="list-disc pl-5 text-neutral-dark">
                {project.caseStudy.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-neutral-dark">Sem conteúdo de estudo de caso para este projeto.</p>
            )}
          </section>
        </div>
      </section>
    </>
  );
}