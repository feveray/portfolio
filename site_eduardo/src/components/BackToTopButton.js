import React, { useState, useEffect } from 'react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para verificar scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para rolar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group w-11 h-11 rounded-full bg-gradient-to-b from-[#AABF91] to-[#AABF91] flex items-center justify-center relative border-none cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <svg
          height="1.2em"
          className="arrow drop-shadow-1g text-white group-hover:animate-slide-in-bottom"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            fill="white"
          />
        </svg>
        <p className="absolute bottom-[-18px] text-black text-[0.7em] w-[100px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          Back to Top
        </p>
      </button>
    </div>
  );
}
