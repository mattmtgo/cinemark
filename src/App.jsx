import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Cartelera from './pages/Cartelera';
import Confiteria from './pages/Confiteria';
import Teatros from './pages/Teatros';
import CineClub from './pages/CineClub';
import Favoritos from './pages/Favoritos';

import { UserProvider } from './contexto/user/UserContext';
import { MovieProvider } from './contexto/movies/MovieContext';

function App() {
  return (
    <UserProvider>
      <MovieProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartelera" element={<Cartelera />} />
            <Route path="/confiteria" element={<Confiteria />} />
            <Route path="/teatros" element={<Teatros />} />
            <Route path="/cineclub" element={<CineClub />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
          <Footer />
        </Router>
      </MovieProvider>
    </UserProvider>
  );
}

export default App;