import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>Bem-vindo ao Sistema de Denúncias</h1>
    <Link to="/nova-denuncia">Fazer uma Nova Denúncia</Link>
    <br />
    <Link to="/ver-denuncias">Ver Todas as Denúncias</Link>
  </div>
);

export default Home;
