import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/abastecimentos', {
        params: {
          startDate,
          endDate,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFilter = (e) => {
    e.preventDefault();
    fetchData();
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <form onSubmit={handleFilter}>
        <label>
          De:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          Até:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
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
          {data.map((item) => (
            <tr key={item.placa}>
              <td>{item.placa}</td>
              <td>{item.quantidade}</td>
              <td>{item.media}</td>
              <td>{item.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sidebar">
        <button onClick={() => navigateTo('/registrar-abastecimento')}>Registrar Abastecimento</button>
        <button onClick={() => navigateTo('/registrar-veiculo')}>Registrar Veículo</button>
      </div>
    </div>
  );
};

export default Dashboard;