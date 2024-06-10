// src/components/ForgotPassword.js
import React from 'react';
import './forgotPassword.css'
function ForgotPassword() {
  // Função chamada ao enviar o formulário de recuperação de senha
  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Lógica para redefinir a senha aqui
  };

  return (
    <div>
      <h2>Esqueceu sua senha</h2>
    
    
      <form onSubmit={handleForgotPassword}>
        <label>Email/CPF:</label>
        <input type="text" name="emailCpf" required />

        <button type="submit">Redefinir Senha</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
