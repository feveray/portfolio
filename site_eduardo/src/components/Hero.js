import React from 'react';
import profileImg from '../img/profile.png';
import profileImg2 from '../img/profile2.PNG';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import BackToTopButton from '../components/BackToTopButton';
import CardProject from './CardProject';
import CardTags from '../components/CardTags';
import EmailForm from './EmailForm';

export default function Hero() {
  
  const [flipped, setFlipped] = React.useState(false);

  // ...existing code...

  return (
    <div className="flex flex-col h-full">
      <main className="flex-1">
        <section id="home" className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-primary to-secondary py-16">
        <div
          className="relative w-64 h-64 mb-6"
          style={{ perspective: '1000px', cursor: 'pointer' }}
          onClick={() => setFlipped(!flipped)}
        >
          <div className={`w-full h-full rounded-full border-4 border-primary shadow-2xl drop-shadow-2xl transition-transform duration-400 ${flipped ? 'scale-x-[-1] shadow-green-500/40 scale-105' : 'scale-100'}`}
            style={{ overflow: 'hidden' }}>
            <img
              src={flipped ? profileImg2 : profileImg}
              alt="Eduardo de Luna"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="font-[Comfortaa] text-4xl font-bold text-neutral-dark mb-4 text-center drop-shadow">Eduardo de Luna</h1>
        <p className="text-[#AABF91] sombra-personalizada text-lg text-center max-w-xl drop-shadow-1g">UX/UI Designer ● Front-End Jr</p>
      </section>

      {/* Section Mini Sobre */}
      <section id="mini-sobre" className="py-16 px-4 bg-neutral-light">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="drop-shadow font-title text-3xl font-bold text-[#51572c] mb-8 text-left">Sobre mim</h2>
          <p className="text-neutral-dark mb-4 text-left">
            Designer com formação em Design de Web, atuação em UI/UX e na construção de interfaces front-end. 
            Comprometido com experiências digitais que reflitam diversidade e representatividade, busco transformar necessidades reais em interfaces claras, funcionais e centradas na relação entre usuário e produto.
          </p>
          <p className="font-bold mb-4 text-center text-neutral-medium">
            <a href={`${process.env.PUBLIC_URL}/cv_eduardo.pdf`} target="_blank" rel="noopener noreferrer" aria-label='Abrir currículo em PDF em nova aba'>● Visualizar currículo em PDF ●</a>
          </p>


        <section className="max-w-4xl w-full mb-4 pl-4 pr-4 ml-2">
          <CardTags />
        </section>

        </div>
      </section>

      {/* Section Intro Projetos */}
      <section id="intro-projetos" className="py-16 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-left">

          <div className="flex flex-col md:flex-row items-start md:items-center gap-0">

            <div className="md:w-1/2 w-full">
              <p className="text-dark mb-4">
                Aqui estão alguns dos meus projetos mais recentes, onde busquei aplicar as melhores práticas de design e desenvolvimento.
              </p>
              <p className="text-dark mb-4">
                Este portfólio está em constante evolução, melhorando a estrutura e com novos projetos sendo adicionados.
              </p>
            </div>

            <div className="md:w-1/3 w-full flex justify-center">
              <CardProject />
            </div>

          </div>

        </div>
      </section>

      {/* Section Contato */}
        <section id="contato" className="py-16 px-4 bg-neutral-light">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="drop-shadow font-title text-3xl font-bold text-[#51572c] mb-8 text-left">Contato</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col justify-center">
              <p className="text-neutral-dark mb-8">Preencha o formulário abaixo para entrar em contato ou utilize as redes sociais:</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-[#51572c] w-5 h-5 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-title font-bold text-[#51572c] text-left">E-mail:</h4>
                    <p className="text-neutral-dark">edelunafbueno@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaWhatsapp className="text-[#51572c] w-5 h-5 mt-1" aria-hidden="true" />
                  <div>
                    <a href="https://wa.me/5511992736662" target="_blank" rel="noopener noreferrer" aria-label='Abrir chat no WhatsApp com +55 11 99273 6662'>
                    <h4 className="font-title font-bold text-[#51572c] text-left">Whatsapp:</h4>
                    <p className="text-neutral-dark">+55 11 99273-6662</p>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#51572c] w-5 h-5 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-title font-bold text-[#51572c] text-left">Localização:</h4>
                    <p className="text-neutral-dark mb-4">São Paulo, SP, Brasil</p>
                  </div>
                </div>
                  <h4 className="font-title font-bold text-[#51572c] text-left mt-2 mb-1">Redes sociais:</h4>
                  <div className="flex justify-center gap-4 text-xl">
                    <a href="https://www.linkedin.com/in/eduardo-de-luna" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary flex items-center gap-2" aria-label='Abrir perfil do LinkedIn de Eduardo de Luna em nova aba'>
                      <FaLinkedin /> <span className="text-base">LinkedIn</span>
                    </a>
                    <a href="https://github.com/feveray" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary flex items-center gap-2" aria-label='Abrir perfil do GitHub de Eduardo de Luna em nova aba'>
                      <FaGithub /> <span className="text-base">GitHub</span>
                    </a>
                    <a href="https://instagram.com/drako" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary flex items-center gap-2" aria-label='Abrir perfil do Instagram de Eduardo de Luna em nova aba'>
                      <FaInstagram /> <span className="text-base">Instagram</span>
                    </a>
                  </div>

              </div>

      {/* Você pode adicionar mais informações ou redes sociais aqui se quiser */}

            </div>

            <div className="md:w-1/2 w-full">
              <EmailForm />
            </div>

          </div>

        </div>
      </section>


      </main>

      <div className="mt-4">
        <BackToTopButton />
      </div>
    </div>
  );
}
