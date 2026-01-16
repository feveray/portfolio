import React from 'react';
import EmailForm from './EmailForm';
import BackToTopButton from '../components/BackToTopButton';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


export default function Contact() {
  // ...existing code...

  return (
    <div className="flex flex-col h-full">
      <header className="relative sombra-personalizada bg-gradient from-primary to-secondary pt-20 pb-20 px-4 md:px-64 w-full">
        <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">CONTATO</h1>
      </header>

      <main className="flex-1">
        <section id="contato" className="py-12 px-4 bg-neutral-light h-full">
          <div className="max-w-4xl mx-auto text-left">
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
