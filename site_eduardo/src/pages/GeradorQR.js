import React from 'react';

export default function GeradorQR() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gerador de QR Code</h1>
      <iframe
        src={`${process.env.PUBLIC_URL || ''}/geradorQR/index.html`}
        title="Gerador de QR Code"
        className="w-full h-[80vh] md:h-[90vh] border rounded"
        style={{ minHeight: '600px' }}
      />
    </div>
  );
}