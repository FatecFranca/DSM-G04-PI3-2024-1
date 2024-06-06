import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  // Função chamada ao enviar o formulário de login
  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log('Lógica de autenticação aqui'); // Substitua pelo código real
  };

  return (
    <div>
      <h2>Login</h2>
      {/* Formulário de login */}
      <form onSubmit={handleLogin}>
        <label>Email/CPF:</label>
        <input type="text" name="emailCpf" required />

        <label>Senha:</label>
        <input type="password" name="password" required />

        <div>
          <Link to="/dashboard">
            <button>Login</button>
          </Link>
        </div>
      </form>

      <div className="forgotPassord-Signup">
        <Link to="/forgot-password">Esqueceu sua senha?</Link>
      </div>
      <div className="forgotPassord-Signup">
        <Link to="/cadastrarse">Cadastrar-se</Link> {/* Corrigir o link para a rota de cadastro */}
      </div>
    </div>
  );
}

export default Login;
