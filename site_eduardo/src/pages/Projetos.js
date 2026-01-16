import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { projects } from '../data/EstudoCaso';
import BackToTopButton from '../components/BackToTopButton';

// project data is centralized in src/data/EstudoCaso.js

export default function Projetos() {
  const location = useLocation();
  const initialTab = location.state?.tab || 'uxui';
  const [aba, setAba] = React.useState(initialTab);

  React.useEffect(() => {
    if (location.state?.tab) window.history.replaceState({}, '', window.location.href);
  }, [location.state]);

  const list =
    aba === 'uxui'
      ? projects.filter((p) => p.category === 'UX/UI')
      : projects.filter((p) => p.category !== 'UX/UI');

  const makeSlug = (title) =>
    title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');

  return (
    <>
      <header className="relative sombra-personalizada bg-gradient from-primary to-secondary pt-20 pb-20 px-4 md:px-64 w-full">
        <section id="projetos" className="w-full">
          <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">PROJETOS</h1>
        </section>
      </header>

      <section className="py-16 px-4 bg-neutral-light min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded ${aba === 'uxui' ? 'bg-[#51572c] text-white' : 'bg-neutral-light text-primary'}`}
              onClick={() => setAba('uxui')}
            >
              UX/UI
            </button>
            <button
              className={`px-4 py-2 rounded ${aba === 'dev' ? 'bg-[#51572c] text-white' : 'bg-neutral-light text-primary'}`}
              onClick={() => setAba('dev')}
            >
              Front-end
            </button>
            <button
              className={`px-4 py-2 rounded ${aba === 'dev' && aba !== 'uxui' ? 'hidden' : 'hidden'}`}
              style={{ display: 'none' }}
              aria-hidden
            />
          </div>

          <h2
            className="font-title text-3xl font-bold mb-8"
            style={{ color: aba === 'uxui' ? '#51572c' : '#51572c' }}
          >
            {aba === 'uxui' ? 'UX/UI' : 'Front-end'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {list.map((item) => {
              const slug = makeSlug(item.title);
              return (
                <div
                  key={item.title}
                  className="bg-white border border-neutral-light rounded-lg shadow-sm hover:shadow-lg hover:bg-primary/10 transition-all p-6 flex flex-col items-center"
                >
                  <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded mb-4" />
                  <h3 className="font-title text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <span className="text-secondary font-semibold mb-2">{item.category}</span>
                  <p className="text-neutral-dark text-sm mb-4 text-center">{item.description}</p>

                  <Link
                    to={`/projetos/${slug}`}
                    className="bg-secondary text-white font-title px-4 py-2 rounded hover:bg-primary transition"
                  >
                    Saiba mais
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <BackToTopButton />
    </>
  );
}
