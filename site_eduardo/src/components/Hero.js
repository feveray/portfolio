import React from 'react';
import profileImg from '../img/profile.png';
import profileImg2 from '../img/profile2.PNG';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import BackToTopButton from '../components/BackToTopButton';
import CardProject from './CardProject';

export default function Hero() {
  
  const [flipped, setFlipped] = React.useState(false);

  return (
    <>
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
          <p className="text-neutral-dark mb-4">
            Olá, eu sou o Eduardo. Tenho 41 anos, sou paulistano da zona sul e apaixonado por pets, fotografia, ciclismo e música — minha playlist está sempre crescendo para acompanhar minhas pedaladas.<br /><br />

            Este portfólio está em constante evolução, com novos projetos sendo adicionados. Para conversar ou saber mais, é só me chamar pelas redes sociais ou enviar um e-mail <a href="mailto:eduardo@edilo.com.br" className="text-secondary underline">eduardo@edilo.com.br</a>.
          </p>
        </div>
      </section>

      {/* Section Intro Projetos */}
      <section id="intro-projetos" className="py-16 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="drop-shadow font-title text-3xl font-bold text-[#51572c] mb-8 text-left">Projetos</h2>
          <p className="text-neutral-dark mb-4">
            Aqui estão alguns dos meus projetos mais recentes, onde busquei aplicar as melhores práticas de design e desenvolvimento.
          </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <CardProject />
        <CardProject />
        <CardProject />
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
                    <h4 className="font-title font-bold text-[#51572c] text-left">Whatsapp:</h4>
                    <p className="text-neutral-dark">+55 11 99273-6662</p>
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
                    <a href="https://linkedin.com/in/eduardodeluna" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary flex items-center gap-2">
                      <FaLinkedin /> <span className="text-base">LinkedIn</span>
                    </a>
                    <a href="https://github.com/feveray" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary flex items-center gap-2">
                      <FaGithub /> <span className="text-base">GitHub</span>
                    </a>
                    <a href="https://instagram.com/eduardodeluna" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary flex items-center gap-2">
                      <FaInstagram /> <span className="text-base">Instagram</span>
                    </a>
                  </div>

              </div>

      {/* Você pode adicionar mais informações ou redes sociais aqui se quiser */}

            </div>
            <div className="md:w-1/2 w-full">
              <form className="bg-white rounded-lg shadow p-8 flex flex-col gap-6 mb-8 max-w-md md:max-w-none mx-auto md:mx-0">
                <input type="text" name="nome" placeholder="Nome" className="border border-neutral-light rounded px-4 py-2 focus:outline-none focus:border-primary" required />
                <input type="email" name="email" placeholder="E-mail" className="border border-neutral-light rounded px-4 py-2 focus:outline-none focus:border-primary" required />
                <textarea name="mensagem" placeholder="Mensagem" rows="5" className="border border-neutral-light rounded px-4 py-2 focus:outline-none focus:border-primary resize-none" required></textarea>
                <button type="submit" className="bg-primary text-white font-bold px-6 py-2 rounded hover:bg-secondary transition">Enviar</button>
              </form>
            </div>
          </div>

        </div>
      </section>


      <BackToTopButton />

    </>
  );
}
