import React, { useContext } from 'react';
import { MovieContext } from '../contexto/movies/MovieContext';
import MovieCard from '../components/MovieCard';

function Favoritos() {
  const { favoritos } = useContext(MovieContext);

  return (
    <div className="home">
      <h1>🎟️ Mis Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>No has agregado películas a favoritos.</p>
      ) : (
        <div className="movie-grid">
          {favoritos.map((peli) => (
            <MovieCard key={peli.id} {...peli} esFavorito={true} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
