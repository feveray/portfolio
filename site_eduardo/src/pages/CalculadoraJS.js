import React from 'react';

export default function CalculadoraJS() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculadora Web</h1>
      <iframe
        src={`${process.env.PUBLIC_URL || ''}/calculadoraJS/index.html`}
        title="Calculadora Web"
        className="w-full h-[80vh] md:h-[90vh] border rounded"
        style={{ minHeight: '600px' }}
      />
    </div>
  );
}