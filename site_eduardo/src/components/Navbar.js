import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import avatarImg from '../img/avatar_final.png';

const navLinks = [
  { name: 'Sobre mim', to: '/sobre' },
  { name: 'Projetos', to: '/projetos' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contato', to: '/contato', anchor: '#contato' },
];

export default function Navbar({ onNavigate }) {
  const [active, setActive] = useState('Sobre mim');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleNav = (name, page) => {
    setActive(name);
    setMenuOpen(false);
    if (onNavigate) onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-neutral-dark shadow-md">
      <nav className="flex items-center justify-between px-8 py-4 relative">
        <div className="flex items-center gap-4 ml-8">
          <a href="/home" className="flex items-center" onClick={() => handleNav('Home', 'home')}>
            <img src={avatarImg} alt="Logo" className="w-8 h-8 rounded-full mr-2" />
            <span className="font-[Comfortaa] font-bold text-lg drop-shadow">Eduardo de Luna</span>
          </a>
        </div>
        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8 justify-center flex-1">
          {navLinks.map(link => (
            <li key={link.name}>
              {link.name === 'Contato' && (location.pathname === '/' || location.pathname === '/home') ? (
                <a
                  href={link.anchor}
                  className={`font-[Comfortaa] text-lg px-2 py-1 transition-all duration-200 border-b-4 ${location.pathname === link.to ? 'border-[#51572c]' : 'border-transparent'} hover:border-secondary`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  onClick={() => { setActive(link.name); setMenuOpen(false); }}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className={`font-[Comfortaa] text-lg px-2 py-1 transition-all duration-200 border-b-4 ${location.pathname === link.to ? 'border-[#51572c]' : 'border-transparent'} hover:border-secondary`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  onClick={() => { setActive(link.name); setMenuOpen(false); }}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* Ícone menu mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Menu mobile */}
        {menuOpen && (
          <ul className="absolute top-full right-8 bg-primary shadow-lg rounded flex flex-col gap-4 py-4 px-8 md:hidden">
            {navLinks.map(link => (
              <li key={link.name}>
                {link.to.startsWith('#') ? (
                  <a
                    href={link.to}
                    className="font-[Comfortaa] text-lg px-2 py-1 transition-all duration-200 border-b-4 border-transparent hover:border-secondary"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => { setActive(link.name); setMenuOpen(false); }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    className="font-[Comfortaa] text-lg px-2 py-1 transition-all duration-200 border-b-4 border-transparent hover:border-secondary"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => { setActive(link.name); setMenuOpen(false); }}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
