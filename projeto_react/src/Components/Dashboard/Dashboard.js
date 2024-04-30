import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
import './dashboard.css';

// Componente para exibir o dashboard

function Dashboard() {
  const navigate = useNavigate();
  const [period, setPeriod] = useState("ultimo_mes");
  const [filter, setFilter] = useState("litros_abastecidos");
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchDataFromMongoDB = async () => {
      // Lógica para buscar dados de um banco MongoDB com base nos estados de período e filtro
    };

    fetchDataFromMongoDB();

    const renderChart = () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }

      const ctx = document.getElementById('myChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    };

    if (chartData) {
      renderChart();
    }
  }, [chartData]);

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleOptionChange = (event) => {
    const path = event.target.value;
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dropdown">
        <label>Escolha o período:</label>
        <select className="dropdown-select" onChange={handlePeriodChange} value={period}>
          <option value="ultimo_mes">Último mês</option>
          <option value="ultima_semana">Última semana</option>
          <option value="ultimo_ano">Último ano</option>
        </select>
      </div>
      <div className="dropdown">
        <label>Escolha o filtro:</label>
        <select className="dropdown-select" onChange={handleFilterChange} value={filter}>
          <option value="litros_abastecidos">Quantos litros foram abastecidos</option>
          <option value="gasto_combustivel">Quanto foi o gasto com combustível</option>
          <option value="media_veiculo">Qual foi a média do veículo</option>
        </select>
      </div>
      <canvas id="myChart"></canvas>
      <div className="EscolhaUmaOpcao">
        <select className="dropdown-select" onChange={handleOptionChange}>
          <option value="">Escolha uma opção</option>
          <option value="/registrarabastecimento">Registrar Abastecimento</option>
          <option value="/registarveiculo">Registrar Veiculo</option>
          <option value="/listaabastecimentos">Lista Abastecimentos</option>
        </select>
      </div>
    </div>
  );
}

export default Dashboard;
