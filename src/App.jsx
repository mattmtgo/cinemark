import React from 'react';
import './App.css'; // ✅ Importa los estilos
import { useContext } from 'react';


import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { UserContext } from './contexto/user/UserContext';


import NavBar from './components/NavBar';
import Footer from './components/Footer';

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

import { UserProvider } from './contexto/user/UserContext';
import { MovieProvider } from './contexto/movies/MovieContext';


function AppContent() {
  const { usuario } = useContext(UserContext);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={usuario ? <Home /> : <Navigate to="/login" />} />
        <Route path="/usuarios" element={usuario ? <Cartelera /> : <Navigate to="/login" />} />
        <Route path="/aleatorios" element={usuario ? <Confiteria /> : <Navigate to="/login" />} />
        <Route path="/capturas" element={usuario ? <Teatros /> : <Navigate to="/login" />} />
        <Route path="/favoritos" element={usuario ? <CineClub /> : <Navigate to="/login" />} />
        <Route path="/usuario" element={usuario ? <Usuario /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/administrador" element={<Administrador />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// ✅ App principal donde se envuelven los contextos
function App() {
  return (
    <UserProvider>
      <MovieProvider>
        <AppContent />
      </MovieProvider>
    </UserProvider>
  );
}

export default App;