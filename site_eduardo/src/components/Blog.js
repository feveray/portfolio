// src/pages/Blog.js - versão com imagens
import React, { useState, useEffect } from 'react';
import BackToTopButton from '../components/BackToTopButton';

const WORDPRESS_API_URL = 'https://public-api.wordpress.com/wp/v2/sites/roadtoluna.wordpress.com/posts?per_page=3&_embed';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(WORDPRESS_API_URL)
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header className="relative bg-gradient from-primary to-secondary pt-20 pb-20 px-4 md:px-64 w-full">
        <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">BLOG</h1>
      </header>

      <main className="flex flex-col items-center py-8 px-4 max-w-3xl mx-auto flex-1">
        {loading && <p>Carregando posts...</p>}
        {!loading && posts.length === 0 && <p>Nenhum post encontrado.</p>}
        
        {posts.map(post => (
          <article key={post.id} className="bg-white p-4 md:p-6 mb-8 rounded-lg shadow-md w-full">
            {/* O título do post */}
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-2" 
                dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
            />
            
            {/* Conteúdo resumido ou data */}
            <p className="text-sm text-neutral-medium mb-4">
              Publicado em: {new Date(post.date).toLocaleDateString('pt-BR')}
            </p>

            {/* O resumo do conteúdo do post */}
            <div className="text-neutral-dark mb-4" 
                 dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
            />
            
            {/* Link para o post completo */}
            {/* Você pode criar uma rota dinâmica como /blog/:slug para o post completo */}
          <a 
            href={`/blog/${post.slug}`} 
            className="text-secondary font-semibold mt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Leia Mais →
          </a>

          </article>
        ))}
      </main>
      <BackToTopButton />
    </>
  );
}