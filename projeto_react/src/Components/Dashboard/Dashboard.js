import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [periodStart, setPeriodStart] = useState('');
  const [periodEnd, setPeriodEnd] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/abastecimentos?start=${periodStart}&end=${periodEnd}`);
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados de abastecimento:', error);
    }
  };

  const handlePeriodSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleOptionChange = (event) => {
    const path = event.target.value;
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <form onSubmit={handlePeriodSubmit}>
        <label>Escolha o período:</label>
        <input type="date" value={periodStart} onChange={(e) => setPeriodStart(e.target.value)} />
        <input type="date" value={periodEnd} onChange={(e) => setPeriodEnd(e.target.value)} />
        <button type="submit">Filtrar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Quantidade</th>
            <th>Média</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.placa}>
              <td>{item.placa}</td>
              <td>{item.quantidade}</td>
              <td>{item.media}</td>
              <td>{item.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="escolha-uma-opcao">
        <select className="dropdown-select" onChange={handleOptionChange}>
          <option value="">Escolha uma opção</option>
          <option value="/registrarabastecimento">Registrar Abastecimento</option>
          <option value="/registarveiculo">Registrar Veículo</option>
        </select>
      </div>
    </div>
  );
}

export default Dashboard;
