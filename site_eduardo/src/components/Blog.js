// src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import BackToTopButton from '../components/BackToTopButton'; // Importe conforme seus outros arquivos

const WORDPRESS_API_URL = 'https://SEU_DOMINIO_DO_BLOG/wp-json/wp/v2/posts'; // SUBSTITUA AQUI!

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar os posts
    fetch(WORDPRESS_API_URL)
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header className="relative bg-gradient from-primary to-secondary pt-20 pb-20 px-64 w-full">
        <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">BLOG</h1>
      </header>

      <main className="flex flex-col items-center py-8 px-4 max-w-4xl mx-auto flex-1">
        {loading && <p>Carregando posts...</p>}
        {!loading && posts.length === 0 && <p>Nenhum post encontrado.</p>}
        
        {posts.map(post => (
          <article key={post.id} className="bg-white p-6 mb-8 rounded-lg shadow-md w-full">
            {/* O título do post */}
            <h2 className="text-2xl font-bold text-primary mb-2" 
                dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
            />
            
            {/* Conteúdo resumido ou data */}
            <p className="text-sm text-neutral-medium mb-4">
              Publicado em: {new Date(post.date).toLocaleDateString('pt-BR')}
            </p>

            {/* O resumo do conteúdo do post */}
            <div className="text-neutral-dark" 
                 dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
            />
            
            {/* Link para o post completo */}
            {/* Você pode criar uma rota dinâmica como /blog/:slug para o post completo */}
            <a href={`/blog/${post.slug}`} className="text-secondary font-semibold mt-4 inline-block hover:text-primary transition">
              Leia Mais &rarr;
            </a>
          </article>
        ))}
      </main>
      <BackToTopButton />
    </>
  );
}