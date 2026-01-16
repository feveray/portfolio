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

  // Inline fallback for geradorQR demo (embed CSS/JS via srcDoc to avoid dev-server routing issues)
  const geradorCss = `* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body {
    font-family: "Helvetica Neue", sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: antiquewhite;
}

#main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 420px;
}

main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 420px;
  background: #fff;
  padding: 18px;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 8px;
}

h2 {
  font-size: 1.5rem;
  margin: 0 0 8px;
  font-weight: 700;
  text-align: left;
}

input {
  padding: 10px;
  width: 100%;
  max-width: 320px;
  margin-bottom: 20px;
  font-size: 1rem;
  text-align: center;
  outline: 0;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 4px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qrcodeContent {
  margin-top: 16px;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#generateBtn {
    padding: 10px;
    font-size: 15px;
    cursor: pointer;
    border: none;
    background-color: teal;
    color: white;
    border-radius: 5px;
    margin-bottom: 20px;
}
`;

  const geradorJs = `const input = document.querySelector("input");
const qrcode = document.querySelector("#qrcode");
const generateBtn = document.querySelector('#generateBtn');

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    genQRCode();
  }
});

// gerar ao clicar no botão
if (generateBtn) {
  generateBtn.addEventListener('click', genQRCode);
}

function genQRCode() {
  if (!input.value) return;

  qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
}
`;

    // Use static file in public/geradorQR — do not embed via srcDoc to restore original behavior
    const geradorSrc = `${process.env.PUBLIC_URL || ''}/geradorQR/index.html`;

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
      <header className="relative sombra-personalizada bg-gradient from-primary to-secondary pt-20 pb-20 px-4 md:px-64 w-full">
        <section id="projetos" className="w-full">
          <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">PROJETOS</h1>
        </section>
      </header>

      <section className="py-16 px-4 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow">
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              className="bg-neutral-light text-primary px-4 py-2 rounded hover:bg-primary/10 transition"
              onClick={() =>
                navigate(PROJECTS_PAGE, {
                  state: { tab: project && project.category === 'UX/UI' ? 'uxui' : 'dev' },
                })
              }
            >
              {BACK_BUTTON_TEXT}
            </button>

            {project && project.route && project.route !== '/gerador-qr' && project.route !== '/calculadora-web' ? (
              project.route ? (
                <Link to={project.route} className="btn-primary">Abrir projeto</Link>
              ) : project.liveLink ? (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary">Abrir projeto</a>
              ) : null
            ) : null}

            {project && project.prototypeLink ? (
              <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="ml-2 px-4 py-2 rounded bg-primary text-white hover:bg-secondary transition">Protótipo</a>
            ) : null}
          </div>

          <h1 className="text-3xl font-bold mb-1">{project.title}</h1>
          <span className="text-secondary font-semibold mb-4 block">{project.category}</span>

          {/* Mostrar iframe da calculadora ou do gerador quando aplicável; caso contrário mostrar imagem */}
          {project.route === '/calculadora-web' ? (
            <>
              <p className="text-neutral-dark mb-4">
                Calculadora web funcional criada com HTML, CSS e JavaScript, oferecendo operações básicas e design responsivo para diversos dispositivos.
              </p>
              <div className="w-full mb-6">
                <iframe
                  src={`${process.env.PUBLIC_URL || ''}/calculadoraJS/index.html`}
                  title={project.title}
                  className="w-full h-[60vh] md:h-[80vh] border rounded"
                  style={{ minHeight: 400 }}
                />
              </div>
            </>
          ) : project.route === '/gerador-qr' ? (
            <>
              <p className="text-neutral-dark mb-4">
                Gerador de QR Code desenvolvido com HTML, CSS e JavaScript
              </p>
              <div className="mb-6">
                <div className="w-full h-[60vh] md:h-[80vh] border rounded overflow-hidden">
                  <iframe
                      src={geradorSrc}
                    title="Gerador de QR Code"
                    className="w-full h-full"
                    style={{ minHeight: 400 }}
                  />
                </div>
              </div>
            </>
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-md mb-6" />
          )}

          {project.route !== '/calculadora-web' && project.route !== '/gerador-qr' ? (
            <p className="text-neutral-dark mb-4">{project?.description}</p>
          ) : null}

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