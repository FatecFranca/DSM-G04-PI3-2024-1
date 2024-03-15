import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import RegistrarAbastecimento from './RegistrarAbastecimento'
import RegistrarVeiculo from './RegistrarVeiculo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/registrarabastecimento" element={<RegistrarAbastecimento />} />
        <Route path="/registarveiculo" element={<RegistrarVeiculo />} />
      </Routes>
    </Router>

  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
