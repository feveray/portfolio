import React from 'react';
import { Link } from 'react-router-dom';
import floresEliImg from '../components/img/flores-eli.png';
import arkanaBikesImg from '../components/img/arkana-bikes.png';
import medsImg from '../components/img/meds.png';
import calculadoraJS from '../components/img/calculadoraJS.png';
import geradorQRcode from '../components/img/geradorQRcode.png';
import BackToTopButton from '../components/BackToTopButton';

const uxui = [
  {
    title: 'Flores Eli',
    category: 'UX/UI',
    description: 'Loja online de flores com foco em experiência do usuário e conversão.',
    image: floresEliImg,
  },
  {
    title: 'ARKANA Bikes',
    category: 'UX/UI',
    description: 'Página institucional para startup de bicicletas elétricas.',
    image: arkanaBikesImg,
  },
  {
    title: 'Meds',
    category: 'UX/UI',
    description: 'Aplicativo para controle de medicamentos e lembretes de saúde.',
    image: medsImg,
  },
];

const frontend = [
  {
    title: 'Curso React',
    category: 'Front-end',
    description: 'Curso completo de ReactJS.',
    image: floresEliImg,
  },
  {
    title: 'Curso UX Design',
    category: 'Design',
    description: 'Formação Google UX Design.',
    image: arkanaBikesImg,
  },
  {
    title: 'Banco de Dados',
    category: 'Back-end',
    description: 'Superior em Banco de Dados pela UniBTA.',
    image: medsImg,
  },
];

export default function Projetos() {
  const [aba, setAba] = React.useState('uxui');

  const list = aba === 'uxui' ? uxui : frontend;

  const makeSlug = (title) =>
    title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');

  return (
    <>
      <header className="relative sombra-personalizada bg-gradient from-primary to-secondary pt-20 pb-20 px-64 w-full">
        <section id="projetos" className="w-full">
          <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">PROJETOS</h1>
        </section>
      </header>

      <section className="py-16 px-4 bg-neutral-light min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 mb-8">
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
