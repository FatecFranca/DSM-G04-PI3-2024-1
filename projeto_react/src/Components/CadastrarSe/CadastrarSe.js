import React, { useState } from 'react';
import axios from 'axios';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData); // Adicionado para depuração
    try {
      const response = await axios.post('http://localhost:3001/api/usuarios', formData);
      console.log('Usuário cadastrado:', response.data);
      // Adicione lógica para redirecionar ou mostrar mensagem de sucesso
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      if (error.response) {
        console.error('Erro do servidor:', error.response.data); // Adicionado para depuração
      }
      // Adicione lógica para mostrar mensagem de erro
    }
  };

  return (
    <div>
      <h2>Cadastrar-se</h2>
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
