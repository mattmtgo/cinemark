import React from 'react';

function Teatros() {
  return (
    <div className="home">
      <h1>🎥 Nuestros Teatros en Bogotá</h1>
      <p>Encuentra el Cinemark más cercano a ti:</p>

      <div style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden' }}>
        <iframe
          title="Cinemark en Bogotá"
          src="https://www.google.com/maps?q=cinemark+bogotá&output=embed"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Teatros;
