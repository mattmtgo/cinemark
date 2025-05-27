import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';

import Loader from './components/Loader';
import { UserProvider, UserContext } from './contexto/user/UserContext';
import { MovieProvider } from './contexto/movies/MovieContext';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import Cartelera from './pages/Cartelera';
import Confiteria from './pages/Confiteria';
import Teatros from './pages/Teatros';
import CineClub from './pages/CineClub';
import Favoritos from './pages/Favoritos';
import Login from './components/Login';
import Registro from './components/Registro';
import Administrador from './components/Administrador';
import Usuario from './components/Usuario';

function AppContent() {
  const { usuario } = useContext(UserContext);
  const location = useLocation(); // 👈 Detecta la ruta
  const [loading, setLoading] = useState(false);

  // Mostrar loader en cada cambio de ruta
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800); // puedes ajustar el tiempo
    return () => clearTimeout(timeout);
  }, [location]);

  if (usuario === undefined || loading) return <Loader />;

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={usuario ? <Home /> : <Navigate to="/login" />} />
        <Route path="/usuarios" element={usuario ? <Cartelera /> : <Navigate to="/login" />} />
       <Route path="/confiteria" element={usuario ? <Confiteria /> : <Navigate to="/login" />} />
        <Route path="/teatros" element={usuario ? <Teatros /> : <Navigate to="/login" />} />
        <Route path="/favoritos" element={usuario ? <CineClub /> : <Navigate to="/login" />} />
        <Route path="/usuario" element={usuario ? <Usuario /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/administrador" element={<Administrador />} />
      </Routes>
      <Footer />
    </>
  );
}
function App() {
  return (
    <UserProvider>
      <MovieProvider>
        <Router>
          <AppContent />
        </Router>
      </MovieProvider>
    </UserProvider>
  );
}


export default App;
