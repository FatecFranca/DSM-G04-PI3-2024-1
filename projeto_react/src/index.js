import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login.js';
import SignUp from './Components/SignUp/SignUp.js';
import ForgotPassword from './Components/ForgotPassWord/ForgotPassword.js';
import RegistrarAbastecimento from './Components/RegistrarAbastecimento/RegistrarAbastecimento.js';
import RegistrarVeiculo from './Components/RegistrarVeiculo/RegistrarVeiculo.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import ListaAbastecimentos from './Components/ListaAbastecimentos/ListaAbastecimentos.js';
import './index.css';
import ReactDOM from 'react-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registrarabastecimento" element={<RegistrarAbastecimento />} />
        <Route path="/registarveiculo" element={<RegistrarVeiculo />} />
        <Route path="/listaabastecimentos" element={<ListaAbastecimentos />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));