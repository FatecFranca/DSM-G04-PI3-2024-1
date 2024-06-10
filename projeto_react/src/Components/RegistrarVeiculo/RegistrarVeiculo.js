import React, { useState } from 'react';
import axios from 'axios';
import './registrarVeiculo.css';

const RegistrarVeiculo = () => {
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    ano: '',
    placa: '',
    cor: '',
    tipoCarroceria: '',
    pbt: '',
    capacidadeCarga: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

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
      const response = await axios.post('http://localhost:3001/api/veiculos', formData);
      setMessage('Veículo registrado com sucesso!');
      console.log('Resposta do servidor:', response.data);

      // Limpa o formulário após o envio bem-sucedido
      setFormData({
        marca: '',
        modelo: '',
        ano: '',
        placa: '',
        cor: '',
        tipoCarroceria: '',
        pbt: '',
        capacidadeCarga: '',
      });
    } catch (error) {
      console.error('Erro ao registrar veículo:', error);
      if (error.response) {
        setError(error.response.data.error);
        console.error('Erro do servidor:', error.response.data);
      } else {
        setError('Erro ao registrar veículo. Por favor, tente novamente.');
      }
    }
  };

  return (
    <div>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Marca:</label>
        <input type="text" name="marca" value={formData.marca} onChange={handleChange} />

        <label>Modelo:</label>
        <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} />

        <label>Ano:</label>
        <input type="number" name="ano" value={formData.ano} onChange={handleChange} max={new Date().getFullYear()} />

        <label>Placa:</label>
        <input type="text" name="placa" value={formData.placa} onChange={handleChange} maxLength={7} />

        <label>Cor:</label>
        <input type="text" name="cor" value={formData.cor} onChange={handleChange} />

        <label>Tipo de Carroceria:</label>
        <input type="text" name="tipoCarroceria" value={formData.tipoCarroceria} onChange={handleChange} />

        <label>PBT:</label>
        <input type="number" name="pbt" value={formData.pbt} onChange={handleChange} />

        <label>Capacidade de Carga:</label>
        <input type="number" name="capacidadeCarga" value={formData.capacidadeCarga} onChange={handleChange} />

        <button type="submit">Registrar Veículo</button>
      </form>
    </div>
  );
};

export default RegistrarVeiculo;
