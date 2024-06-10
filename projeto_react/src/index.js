import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CadastrarSe from './Components/CadastrarSe/CadastrarSe.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import ForgotPassword from './Components/ForgotPassWord/ForgotPassword.js';
import Login from './Components/Login/Login.js';
import RegistrarAbastecimento from './Components/RegistrarAbastecimento/RegistrarAbastecimento.js';
import RegistrarVeiculo from './Components/RegistrarVeiculo/RegistrarVeiculo.js';
// import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registrarabastecimento" element={<RegistrarAbastecimento />} />
        <Route path="/registrarveiculo" element={<RegistrarVeiculo />} />
        <Route path="/cadastrarse" element={<CadastrarSe />} /> 
      </Routes>
    </Router>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
