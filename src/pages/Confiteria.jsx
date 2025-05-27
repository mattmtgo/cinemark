import React from 'react';

const productos = [
  {
    id: 1,
    nombre: 'Crispetas Grandes',
    precio: '$12.000',
    imagen: 'https://cdn.pixabay.com/photo/2013/07/13/12/36/popcorn-159496_1280.png',
  },
  {
    id: 2,
    nombre: 'Gaseosa 22oz',
    precio: '$8.000',
    imagen: 'https://cdn.pixabay.com/photo/2017/01/31/13/13/soda-2025065_1280.png',
  },
  {
    id: 3,
    nombre: 'Combo Pareja',
    precio: '$22.000',
    imagen: 'https://cdn.pixabay.com/photo/2017/01/31/17/16/popcorn-2028808_1280.png',
  },
];

function Confiteria() {
  return (
    <div className="home">
      <h1>🍿 Confitería</h1>
      <div className="movie-grid">
        {productos.map((producto) => (
          <div className="movie-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="movie-info">
              <h3>{producto.nombre}</h3>
              <p className="precio">{producto.precio}</p>
              <button>Añadir al carrito 🛒</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Confiteria;
