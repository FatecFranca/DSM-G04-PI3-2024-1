import React, { useState } from 'react';

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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar os dados ao servidor
    console.log('Dados enviados:', formData);
  };

  return (
    <div>
      <h2>Registrar de Veículo</h2>
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
