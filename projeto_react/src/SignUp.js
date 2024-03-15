import React, { useState } from 'react';

const SignUp = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cpf: '',
    endereco: '',
    email: '',
    telefone: '',
    tipoUsuario: '',
    senha: '',
  });

  // Função para atualizar o estado com os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar os dados ao servidor
    console.log('Dados enviados:', formData);
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

export default SignUp;
