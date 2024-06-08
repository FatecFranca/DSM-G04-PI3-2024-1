import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login.js';
import ForgotPassword from './Components/ForgotPassWord/ForgotPassword.js';
import RegistrarAbastecimento from './Components/RegistrarAbastecimento/RegistrarAbastecimento.js';
import RegistrarVeiculo from './Components/RegistrarVeiculo/RegistrarVeiculo.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import CadastrarSe from './Components/CadastrarSe/CadastrarSe.js'; 
// import './index.css';
import { createRoot } from 'react-dom/client';

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
