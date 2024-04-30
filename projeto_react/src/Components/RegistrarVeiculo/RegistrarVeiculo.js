import React, { useState } from 'react';
//import axios from 'axios'; // Importe a biblioteca Axios
import './registrarVeiculo.css';

const RegistrarVeiculo = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    ano: '',
    placa: '',
    pbt: '',
    capacidadeCarga: '',
    tipoCarroceria: '',
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
  const handleSubmit = async (e) => {
    e.preventDefault();
   
   /* try {
      // Envia os dados do formulário para o servidor
      const response = await axios.post('/api/veiculos', formData);
      console.log('Resposta do servidor:', response.data);
      alert('Veículo registrado com sucesso!');
      // Limpa o formulário após o envio bem-sucedido
      setFormData({
        marca: '',
        modelo: '',
        ano: '',
        placa: '',
        pbt: '',
        capacidadeCarga: '',
        tipoCarroceria: '',
      });
    } catch (error) {
      console.error('Erro ao registrar veículo:', error);
      alert('Erro ao registrar veículo. Por favor, tente novamente.');
    }
    */
  };

  return (
    <div>
      <h2>Registrar Veículo</h2>
      <form onSubmit={handleSubmit}>
        <label>Marca:</label>
        <select name="marca" value={formData.marca} onChange={handleChange} required>
          <option value="">Selecione...</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
        </select>

        <label>Modelo:</label>
        <select name="modelo" value={formData.modelo} onChange={handleChange} required>
          <option value="">Selecione...</option>
          <option value="8.150">Civic</option>
          <option value="Corolla">Corolla</option>
        </select>

        <label>Ano:</label>
        <input type="number" name="ano" value={formData.ano} onChange={handleChange} max={new Date().getFullYear()} required />

        <label>Placa:</label>
        <input type="text" name="placa" value={formData.placa} onChange={handleChange} maxLength={7} required />

        <label>PBT:</label>
        <input type="number" name="pbt" value={formData.pbt} onChange={handleChange} required />

        <label>Capacidade de Carga:</label>
        <input type="number" name="capacidadeCarga" value={formData.capacidadeCarga} onChange={handleChange} required />

        <label>Tipo de Carroceria:</label>
        <select name="tipoCarroceria" value={formData.tipoCarroceria} onChange={handleChange} required>
          <option value="">Selecione...</option>
          <option value="Bau">Baú</option>
          <option value="Carroceria">Carroceria</option>
        </select>

        <button type="submit">Registrar Veículo</button>
      </form>
    </div>
  );
};

export default RegistrarVeiculo;