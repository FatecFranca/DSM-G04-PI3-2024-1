import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CadastrarSe = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cpf: '',
    endereco: '',
    email: '',
    telefone: '',
    tipoUsuario: '',
    senha: '',
  });

  const [message, setMessage] = useState(''); // Estado para armazenar as mensagens
  const [error, setError] = useState(''); // Estado para armazenar as mensagens de erro
  const navigate = useNavigate(); // Hook para navegação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const response = await axios.post('http://localhost:3000/api/usuarios', formData);
      setMessage('Usuário cadastrado com sucesso!');
      console.log('Usuário cadastrado:', response.data);

      // Redirecionar para o dashboard após um breve atraso para permitir que o usuário veja a mensagem de sucesso
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000); // Redireciona após 2 segundos
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      if (error.response) {
        setError(error.response.data.error);
        console.error('Erro do servidor:', error.response.data);
      } else {
        setError('Erro ao cadastrar usuário. Por favor, tente novamente.');
      }
    }
  };

  return (
    <div>
      <h2>Cadastrar-se</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Nome Completo:</label>
        <input type="text" name="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} maxLength={200} required />

        <label>CPF:</label>
        <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} pattern="\d{11}" title="CPF deve conter 11 dígitos" required />

        <label>Endereço:</label>
        <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} maxLength={200} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} maxLength={200} required />

        <label>Telefone:</label>
        <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} pattern="\d{11}" title="Telefone deve conter 11 dígitos" required />

        <label>Tipo de Usuário:</label>
        <select name="tipoUsuario" value={formData.tipoUsuario} onChange={handleChange} required>
          <option value="">Selecione...</option>
          <option value="Motorista">Motorista</option>
          <option value="Prestador">Prestador</option>
          <option value="Adm">Adm</option>
        </select>

        <label>Senha:</label>
        <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarSe;
