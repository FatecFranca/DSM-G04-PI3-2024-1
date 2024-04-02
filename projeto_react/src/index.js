import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import RegistrarAbastecimento from './RegistrarAbastecimento';
import RegistrarVeiculo from './RegistrarVeiculo';
import Dashboard from './Dashboard';
import ListaAbastecimentos from './ListaAbastecimentos';
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