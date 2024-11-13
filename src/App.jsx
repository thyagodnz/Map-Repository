import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NovaDenuncia from './pages/NovaDenuncia';
import ViewDenuncias from './pages/ViewDenuncias';
import DenunciaDetail from './pages/DenunciaDetail';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />

    <main style={{ padding: '2rem' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nova-denuncia" element={<NovaDenuncia />} />
        <Route path="/ver-denuncias" element={<ViewDenuncias />} />
        <Route path="/denuncias/:id" element={<DenunciaDetail />} />
      </Routes>
    </main>
  </Router>
);

export default App;
