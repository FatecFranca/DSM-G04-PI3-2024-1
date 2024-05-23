import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
import './dashboard.css';

// Componente para exibir o dashboard
function Dashboard() {
  const navigate = useNavigate();
  const [period, setPeriod] = useState("ultimo_mes");
  const [filter, setFilter] = useState("litros_abastecidos");
  const [selectedVehicles, setSelectedVehicles] = useState([]); // Estado para veículos selecionados
  const [vehicles, setVehicles] = useState([]); // Estado para opções de veículos do banco de dados
  const [chartData, setChartData] = useState(null);
  const [globalData, setGlobalData] = useState(null); // Estado para o dado global
  const chartRef = useRef(null);

  useEffect(() => {
    // Busca a lista de veículos do banco de dados
    const fetchVehicles = async () => {
      const response = await fetch('/api/vehicles'); // Ajuste o endpoint da API conforme necessário
      const data = await response.json();
      setVehicles(data);
    };

    fetchVehicles();

    const fetchDataFromMongoDB = async () => {
      // Lógica para buscar dados do banco de dados com base nos estados de período, filtro e veículos selecionados
      const response = await fetch(`/api/data?period=${period}&filter=${filter}&vehicles=${selectedVehicles.join(',')}`);
      const data = await response.json();
      
      // Aqui você vai precisar processar 'data' para formatar para o chart.js
      setChartData(data.chartData);

      // Calcula e define o dado global
      let globalValue = 0;
      if (filter === 'litros_abastecidos') {
        globalValue = data.globalData.reduce((acc, curr) => acc + curr.litros, 0);
      } else if (filter === 'gasto_combustivel') {
        globalValue = data.globalData.reduce((acc, curr) => acc + curr.custo, 0);
      } else if (filter === 'media_veiculo') {
        const totalMedia = data.globalData.reduce((acc, curr) => acc + curr.media, 0);
        globalValue = totalMedia / data.globalData.length;
      }
      setGlobalData(globalValue);
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
  }, [period, filter, selectedVehicles, chartData]);

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleVehicleChange = (event) => {
    const options = Array.from(event.target.options);
    const selectedValues = options.filter(option => option.selected).map(option => option.value);
    setSelectedVehicles(selectedValues);
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
      <div className="dropdown">
        <label>Escolha o(s) veículo(s):</label>
        <select className="dropdown-select" onChange={handleVehicleChange} multiple>
          {vehicles.map(vehicle => (
            <option key={vehicle.plate} value={vehicle.plate}>{vehicle.plate}</option>
          ))}
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
      <div className="global-data">
        <h3>Dado Global:</h3>
        {globalData !== null && (
          <p>{globalData}</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
