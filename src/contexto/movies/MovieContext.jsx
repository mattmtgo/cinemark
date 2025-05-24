import { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export function MovieProvider({ children }) {
// reemplaza por las nuevas películas que sí cargan
const [peliculas, setPeliculas] = useState([
  {
    id: 1,
    titulo: 'John Wick 4',
    imagen: 'https://image.tmdb.org/t/p/w500/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg',
  },
  {
    id: 2,
    titulo: 'Super Mario Bros',
    imagen: 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
  },
  {
    id: 3,
    titulo: 'Guardianes de la Galaxia Vol. 3',
    imagen: 'https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg',
  },
  {
    id: 4,
    titulo: 'Barbie',
    imagen: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
  },
  {
    id: 5,
    titulo: 'Oppenheimer',
    imagen: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
  },
]);
  const [favoritos, setFavoritos] = useState(() => {
    const dataGuardada = localStorage.getItem('favoritos');
    return dataGuardada ? JSON.parse(dataGuardada) : [];
  });

  const agregarAFavoritos = (peli) => {
    const yaExiste = favoritos.some((f) => f.id === peli.id);
    if (!yaExiste) {
      const nuevos = [...favoritos, peli];
      setFavoritos(nuevos);
      localStorage.setItem('favoritos', JSON.stringify(nuevos));
    }
  };
    const eliminarDeFavoritos = (id) => {
    const actualizados = favoritos.filter((p) => p.id !== id);
    setFavoritos(actualizados);
    localStorage.setItem('favoritos', JSON.stringify(actualizados));
    };

  // 🧹 Guardar cambios en favoritos si el estado cambia (opcional, si prefieres manejarlo aparte)
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <MovieContext.Provider value={{ peliculas, favoritos, agregarAFavoritos, eliminarDeFavoritos }}>
      {children}
    </MovieContext.Provider>
  );
}
