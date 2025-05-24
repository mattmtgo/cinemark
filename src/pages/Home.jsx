import React, { useContext, useState } from 'react';
import { MovieContext } from '../contexto/movies/MovieContext';
import MovieCard from '../components/MovieCard';

function Home() {
  const { peliculas } = useContext(MovieContext);
  const [busqueda, setBusqueda] = useState('');

  const filtradas = peliculas.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="home">
      <h1>🎬 Estrenos</h1>

      <input
        type="text"
        placeholder="Buscar película..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="input-busqueda"
      />

      <div className="movie-grid">
        {filtradas.length === 0 ? (
          <p>No se encontraron resultados.</p>
        ) : (
          filtradas.map((peli) => (
            <MovieCard key={peli.id} {...peli} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;