import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Início</Link>
    <Link to="/nova-denuncia">Criar Denúncia</Link>
    <Link to="/ver-denuncias">Ver Denúncias</Link>
  </header>
);

export default Header;
