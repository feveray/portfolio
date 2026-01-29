import React from 'react';
import profileImg from '../img/perfile.png';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CardTags from '../components/CardTags';
import BackToTopButton from '../components/BackToTopButton';

export default function SobreMim() {
  return (
    <>

      <header className="relative sombra personalizada bg-gradient from-primary to-secondary pt-20 pb-20 px-4 md:px-64 w-full">
          <section id="sobre" className="w-full">
  <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">
    SOBRE MIM</h1>
</section>
      </header>
        
      <main className="flex flex-col items-center py-8 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-8 w-full max-w-3xl">
          <div className="flex flex-col items-center ml-0 md:ml-4">
            <img src={profileImg} alt="Eduardo de Luna" className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary object-cover shadow-lg mb-4" />
            <div className="flex gap-4 mb-6 justify-center">
              <a href="https://linkedin.com/in/eduardodeluna" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary text-xl md:text-2xl" aria-label='Abrir perfil do LinkedIn de Eduardo de Luna em nova aba'><FaLinkedin /></a>
              <a href="https://github.com/feveray" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary text-xl md:text-2xl" aria-label='Abrir perfil do GitHub de Eduardo de Luna em nova aba'><FaGithub /></a>
              <a href="https://instagram.com/drako" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary text-xl md:text-2xl" aria-label='Abrir perfil do Instagram de Eduardo de Luna em nova aba'><FaInstagram /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary text-xl md:text-2xl" aria-label='Abrir perfil do Twitter de Eduardo de Luna em nova aba'><FaTwitter /></a>
              <Link to="/contato" className="text-neutral-medium hover:text-secondary text-xl md:text-2xl" aria-label="Ir para contato"><FaEnvelope /></Link>
            </div>
          <p className="font-bold mb-4 text-center">
            <a href={`${process.env.PUBLIC_URL}/cv_eduardo.pdf`} target="_blank" rel="noopener noreferrer" aria-label='Abrir currículo em PDF em nova aba'>● Visualizar currículo em PDF ●</a>
          </p>
          </div>
          <section className="max-w-sm w-full text-left">
            <h2 className="drop-shadow text-2xl font-bold text-[#51572c] mb-2">Designer Digital</h2>
            <p className="text-neutral-dark mb-4">
              Comprometido com experiências digitais que reflitam diversidade e representatividade, busco transformar necessidades reais em interfaces claras, funcionais e centradas na relação entre usuário e produto.<br/><br/>

              Tenho interesse por diferentes áreas do design e da tecnologia, e gosto de observar como as pessoas interagem com produtos no dia a dia. Fora da tela, encontro inspiração em fotografia, ciclismo, música e na convivência com meus pets.<br/><br/>

              Este portfólio está em constante evolução, com novos projetos sendo adicionados. Se quiser trocar uma ideia ou saber mais sobre meu trabalho, é só me chamar pelos contatos disponíveis.              
            </p>
          </section>
        </div>

        <section className="max-w-3xl w-full mb-8 pl-4 pr-4 ml-2">
            <CardTags />
        </section>

        <section className="max-w-3xl w-full mt-8 mb-4 pl-4 pr-4 ml-2">
          <h3 className="text-xl font-bold text-secondary mb-2">Formação</h3>
          <ul className="text-neutral-dark mb-4">
            <li><span className="font-bold">▻ Banco de Dados - UniBTA •</span> (em andamento)</li>
            <li><span className="font-bold">▻ Certificação de Cybersecurity - Google •</span> (em andamento)</li>
            <li><a href={`${process.env.PUBLIC_URL}/google_data.pdf`} target="_blank" rel="noopener noreferrer" aria-label='Abrir certificado de Data Analysis em PDF em nova aba'><span className="font-semibold hover:text-primary ml-1">▻ Certificação de Data Analysis - Google • </span>visualizar certificado</a></li>
            <li><a href={`${process.env.PUBLIC_URL}/google_ux.pdf`} target="_blank" rel="noopener noreferrer" aria-label='Abrir certificado de UX Design em PDF em nova aba'><span className="font-semibold hover:text-primary ml-1">▻ Certificação de UX Design - Google • </span>visualizar certificado</a></li>
            <li><span className="font-bold">▻ Projeto e Produção em Design de Web - Universidade Anhembi Morumbi</span></li>
          </ul>
        </section>
        
        <section className="max-w-3xl w-full mt-4 mb-8 pl-4 pr-4 ml-2">
          <h3 className="text-xl font-bold text-secondary mb-2">Experiência</h3>
          <ul className="text-neutral-dark">
            <li><span className="font-bold">▻ Freelancer - Produtor de eventos/conteúdo</span><br />Atuação multidisciplinar em projetos de comunicação e eventos, com foco em identidade visual, conteúdo digital, social media e produção audiovisual. Desenvolvimento de peças gráficas, edição de imagens e vídeos, e apoioestratégico à divulgação de projetos culturais.</li>
            <li className="mt-4"><span className="font-bold">▻ Folha de S. Paulo - Produtor de conteúdo</span><br />Coordenação de equipe de fotografia da Folha, pesquisas e edição de imagens, produção de pautas fotográficas e colaboração de textos para o portal F5 e todas as editorias do jornal.</li>
            <li className="mt-4"><span className="font-bold">▻ Defensoria Pública de SP - Designer gráfico e digital</span><br />Criação de materiais gráficos e digitais institucionais, como folders, cartilhas e relatórios, com atuação em fotografia, edição de imagens e desenvolvimento de peças visuais para eventos corporativos.</li>
          </ul>
        </section>

        <div className="flex justify-center mt-8">
        <BackToTopButton />
      </div>        
      </main>
    </>  
  );
}
