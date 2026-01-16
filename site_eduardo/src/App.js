import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GeradorQR from './pages/GeradorQR';
import CalculadoraJS from './pages/CalculadoraJS';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import About from './components/About';
import SobreMim from './pages/SobreMim';
import Portfolio from './components/Projetos_inicio';
import Projetos from './pages/Projetos';
import ProjectDetail from './pages/ProjectDetail';
import Specializations from './components/Specializations';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={setPage} />
      <ScrollToTop />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/sobre" element={<SobreMim />} />
          <Route path="/about" element={<About />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:slug" element={<ProjectDetail />} />
          <Route path="/gerador-qr" element={<GeradorQR />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/calculadora-web" element={<CalculadoraJS />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
