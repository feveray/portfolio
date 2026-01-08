import React from 'react';
import profileImg from '../img/profile.png';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CardTags from '../components/CardTags';
import BackToTopButton from '../components/BackToTopButton';

export default function SobreMim() {
  return (
    <>

      <header className="relative sombra personalizada bg-gradient from-primary to-secondary pt-20 pb-20 px-64 w-full">
          <section id="sobre" className="w-full">
  <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">
    SOBRE MIM</h1>
</section>
      </header>
        
      <main className="flex flex-col items-center py-8 px-4">
        <div className="flex flex-row items-center gap-16 mb-8 w-full max-w-4xl">
          <div className="flex flex-col items-start ml-4">
            <img src={profileImg} alt="Eduardo de Luna" className="w-64 h-64 rounded-full object-cover shadow-lg mb-4" />
            <div className="flex gap-4 mb-6">
              <a href="https://linkedin.com/in/eduardodeluna" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary text-2xl" aria-label='Abrir perfil do LinkedIn de Eduardo de Luna em nova aba'><FaLinkedin /></a>
              <a href="https://github.com/feveray" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary text-2xl" aria-label='Abrir perfil do GitHub de Eduardo de Luna em nova aba'><FaGithub /></a>
              <a href="https://instagram.com/drako" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary text-2xl" aria-label='Abrir perfil do Instagram de Eduardo de Luna em nova aba'><FaInstagram /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-medium hover:text-secondary text-2xl" aria-label='Abrir perfil do Twitter de Eduardo de Luna em nova aba'><FaTwitter /></a>
              <Link to="/contato" className="text-neutral-medium hover:text-secondary text-2xl" aria-label="Ir para contato"><FaEnvelope /></Link>
            </div>
          <p className="font-bold mb-4 text-center">
            <a href={`${process.env.PUBLIC_URL}/cv_eduardo.pdf`} target="_blank" rel="noopener noreferrer" aria-label='Abrir currículo em PDF em nova aba'>● Visualizar currículo em PDF ●</a>
          </p>
          </div>
          <section className="max-w-sm w-full text-left">
            <h2 className="drop-shadow text-2xl font-bold text-[#51572c] mb-2">UX Designer</h2>
            <p className="text-neutral-dark mb-4">
              Comprometido com experiências digitais que reflitam diversidade e representatividade, busco transformar necessidades reais em interfaces claras, funcionais e centradas na relação entre usuário e produto.<br/><br/>

              Tenho interesse por diferentes áreas do design e da tecnologia, e gosto de observar como pessoas interagem com produtos no dia a dia. Fora da tela, encontro inspiração em fotografia, ciclismo, música e na convivência com meus pets.<br/><br/>

              Este portfólio está em constante evolução, com novos projetos sendo adicionados. Se quiser trocar uma ideia ou saber mais sobre meu trabalho, é só me chamar pelos contatos disponíveis.              
            </p>
          </section>
        </div>

        <section className="max-w-4xl w-full mb-8 px-4">
            <CardTags />
        </section>


        <section className="max-w-4xl w-full mb-8">
          <h3 className="text-xl font-bold text-secondary mb-2">Formação</h3>
          <ul className="text-neutral-dark mb-4">
            <li><span className="font-bold">• Banco de Dados</span> - UniBTA - Superior</li>
            <li><span className="font-bold">• Certificação de Cybersecurity</span> - Google</li>
            <li><span className="font-bold">• Certificação de Data Analysis</span> - Google</li>
            <li><span className="font-bold">• Certificação de UX Design</span> - Google</li>
            <li><span className="font-bold">• Projeto e Produção em Design de Web</span> - Universidade Anhembi Morumbi - Superior</li>
          </ul>
        </section>
        <section className="max-w-4xl w-full mb-8">
          <h3 className="text-xl font-bold text-secondary mb-2">Experiência</h3>
          <ul className="text-neutral-dark">
            <li><span className="font-bold">• Freelancer - Produtor de eventos/conteúdo</span><br />Produção de eventos, produtor musical, mailing social media, elaboração de conteúdo, identidade visual, edição de vídeos e fotos.</li>
            <li className="mt-4"><span className="font-bold">• Folha de S. Paulo - Produtor de conteúdo</span><br />Coordenação de equipe de fotografia da Folha, pesquisas e edição de imagens, produção de pautas fotográficas e colaboração de textos para o portal F5 e todas as editorias do jornal.</li>
            <li className="mt-4"><span className="font-bold">• Defensoria Pública de SP - Designer gráfico e digital</span><br />Criação e diagramação de folders, cartilhas e relatórios, fotografia, edição de imagens e produção de materiais para eventos corporativos.</li>
          </ul>
        </section>

        <div className="flex justify-center mt-8">
        <BackToTopButton />
      </div>


        
      </main>
    </>  
  );
}
