import React, { useContext } from 'react';
import { MovieContext } from '../contexto/movies/MovieContext';
import './MovieCard.css'; // si lo tienes separado

function MovieCard({ id, titulo, imagen, esFavorito = false }) {
  const { agregarAFavoritos, eliminarDeFavoritos } = useContext(MovieContext);

  const handleClick = () => {
    if (esFavorito) {
      eliminarDeFavoritos(id);
    } else {
      agregarAFavoritos({ id, titulo, imagen });
    }
  };

  return (
    <div className="movie-card">
      <img src={imagen} alt={titulo} />
      <div className="movie-info">
        <h3>{titulo}</h3>
        <button onClick={handleClick}>
          {esFavorito ? 'Quitar de Favoritos ❤️' : 'Agregar a Favoritos 🤍'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
