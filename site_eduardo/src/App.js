import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
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
    <>
      <Navbar onNavigate={setPage} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/sobre" element={<SobreMim />} />
        <Route path="/about" element={<About />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/:slug" element={<ProjectDetail />} />
        <Route path="/especializacoes" element={<Specializations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
