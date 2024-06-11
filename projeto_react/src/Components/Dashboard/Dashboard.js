import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const formattedStartDate = formatDate(startDate);
      const formattedEndDate = formatDate(endDate);

      console.log('Fetching data with dates:', { startDate: formattedStartDate, endDate: formattedEndDate });

      const response = await axios.get('http://localhost:3000/api/abastecimentos', {
        params: {
          startDate: formattedStartDate,
          endDate: formattedEndDate,
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

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="dashboard">
      <form onSubmit={handleFilter}>
        <div>
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
        </div>
        <button type="submit" className="filtro-btn">Filtrar</button>
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
          {data.map((item, index) => (
            <tr key={`${item.placa}-${item.data}-${index}`}>
              <td>{item.placa}</td>
              <td>{item.litros}</td>
              <td>{item.odometro}</td>
              <td>{item.totalAbastecimento}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sidebar">
        <button onClick={() => { navigateTo('/registrarveiculo'); }}>Registrar Veículo</button>
        <button onClick={() => navigateTo('/registrarabastecimento')}>Registro Abasteci</button>
      </div>
    </div>
  );
};

export default Dashboard;
