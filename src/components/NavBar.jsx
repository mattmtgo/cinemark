import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexto/user/UserContext';

function NavBar() {
  const { usuario } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🎬 CINEMARK</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/cartelera">Cartelera</Link></li>
        <li><Link to="/confiteria">Confitería</Link></li>
        <li><Link to="/teatros">Teatros</Link></li>
        <li><Link to="/cineclub">CineClub</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
        <li><Link to="/Usuario">Usuario</Link></li>

      </ul>
      {usuario.logueado && (
        <div style={{ color: 'white', fontSize: '0.9rem' }}>
          Hola, {usuario.nombre}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
