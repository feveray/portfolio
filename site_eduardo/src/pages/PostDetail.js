// src/pages/PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackToTopButton from '../components/BackToTopButton';

export default function PostDetail() {
  const { slug } = useParams(); // Pega o slug da URL (/blog/teste-3)
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca post específico pelo slug
    fetch(`https://public-api.wordpress.com/wp/v2/sites/roadtoluna.wordpress.com/posts?slug=${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setPost(data[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro:', err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex flex-col items-center py-20">
        <p>Carregando post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center py-20">
        <h1>Post não encontrado</h1>
        <a href="/blog" className="text-secondary hover:text-primary mt-4">
          ← Voltar ao Blog
        </a>
      </div>
    );
  }

  return (
    <>
      <header className="relative bg-gradient from-primary to-secondary pt-20 pb-20 px-4 md:px-64 w-full">
        <h1 className="sombra-personalizada text-4xl font-[Comfortaa] font-bold text-[#341539]">
          {post.title.rendered}
        </h1>
      </header>

      <main className="flex flex-col items-center py-8 px-4 max-w-4xl mx-auto flex-1">
        <article className="bg-white p-6 md:p-12 rounded-lg shadow-md w-full prose max-w-none">
          <p className="text-sm text-neutral-medium mb-6">
            Publicado em: {new Date(post.date).toLocaleDateString('pt-BR')}
          </p>
          
          <div 
            className="text-neutral-dark leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/blog"
              className="text-secondary font-semibold hover:text-primary transition-colors duration-200"
            >
              ← Voltar ao Blog
            </a>
          </div>
        </article>
      </main>
      
      <BackToTopButton />
    </>
  );
}
