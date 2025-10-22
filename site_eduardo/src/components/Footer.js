import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#755179ff] text-neutral-light py-6 text-center mt-12">
      <div className="max-w-4xl mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} Eduardo de Luna. Todos os direitos reservados.
      </div>
    </footer>
  );
}
