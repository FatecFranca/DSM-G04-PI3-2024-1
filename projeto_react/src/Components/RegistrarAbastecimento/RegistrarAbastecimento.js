import React, { Component } from 'react';
import axios from 'axios';

// Configuração global do axios para usar o backend na porta 3000
const api = axios.create({
  baseURL: 'http://localhost:3000/api',  // Ajuste o endereço conforme necessário
});

class RegistrarAbastecimento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getCurrentDate(),
      placa: '',
      odometro: '',
      litros: '',
      precoLitro: '',
      tipoCombustivel: 'Diesel',
      posto: '',
      isLoading: false,
    };
  }

  getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });

    const { data, placa, odometro, litros, precoLitro, tipoCombustivel, posto } = this.state;
    const totalAbastecimento = parseFloat(litros) * parseFloat(precoLitro);

    const abastecimentoData = {
      data,
      placa,
      odometro: parseInt(odometro),
      litros: parseFloat(litros),
      precoLitro: parseFloat(precoLitro),
      tipoCombustivel,
      posto,
      totalAbastecimento,
    };

    try {
      const response = await api.post('/abastecimentos', abastecimentoData);  // Usando a instância do axios configurada com baseURL
      if (response.status === 201) {
        alert('Abastecimento registrado com sucesso!');
        this.setState({
          data: this.getCurrentDate(),
          placa: '',
          odometro: '',
          litros: '',
          precoLitro: '',
          tipoCombustivel: 'Diesel',
          posto: '',
          isLoading: false,
        });
      } else {
        throw new Error('Erro ao registrar abastecimento.');
      }
    } catch (error) {
      alert(error.message || 'Erro ao registrar abastecimento.');
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        <h2>REGISTRAR ABASTECIMENTO</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Data:</label>
          <input type="date" name="data" value={this.state.data} onChange={this.handleInputChange} />

          <label>Placa do Caminhão:</label>
          <input type="text" name="placa" value={this.state.placa} onChange={this.handleInputChange} />

          <label>Odômetro:</label>
          <input type="number" name="odometro" value={this.state.odometro} onChange={this.handleInputChange} />

          <label>Litros:</label>
          <input type="number" name="litros" value={this.state.litros} onChange={this.handleInputChange} />

          <label>Preço por Litro:</label>
          <input type="number" name="precoLitro" value={this.state.precoLitro} onChange={this.handleInputChange} />

          <label>Tipo de Combustível:</label>
          <select name="tipoCombustivel" value={this.state.tipoCombustivel} onChange={this.handleInputChange}>
            <option value="Diesel">Diesel</option>
            <option value="Etanol">Etanol</option>
            <option value="Gasolina">Gasolina</option>
          </select>

          <label>Posto:</label>
          <input type="text" name="posto" value={this.state.posto} onChange={this.handleInputChange} />

          <label>Total Abastecimento:</label>
          <input type="number" name="totalAbastecimento" value={this.state.litros * this.state.precoLitro} readOnly />

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Registrar'}
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrarAbastecimento;


// import React, { Component } from 'react';
// import axios from 'axios'; // Importe a biblioteca axios para fazer requisições HTTP

// class RegistrarAbastecimento extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: this.getCurrentDate(),
//       placa: '',
//       odometro: '',
//       litros: '',
//       precoLitro: '',
//       tipoCombustivel: 'Diesel',
//       posto: '',
//       isLoading: false, // Estado para controle de loading
//     };
//   }

//   // Função para obter a data atual no formato DD/MM/YYYY
//   getCurrentDate() {
//     const today = new Date();
//     const dd = String(today.getDate()).padStart(2, '0');
//     const mm = String(today.getMonth() + 1).padStart(2, '0');
//     const yyyy = today.getFullYear();
//     return `${dd}/${mm}/${yyyy}`;
//   }

//   // Manipula as mudanças nos inputs do formulário
//   handleInputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   // Envia os dados do formulário ao servidor
//   handleSubmit = async (e) => {
//     e.preventDefault();
//     this.setState({ isLoading: true }); // Ativa o estado de loading

//     const { data, placa, odometro, litros, precoLitro, tipoCombustivel, posto } = this.state;
//     const totalAbastecimento = parseFloat(litros) * parseFloat(precoLitro);

//     // Objeto com dados para envio
//     const abastecimentoData = {
//       data,
//       placa,
//       odometro: parseInt(odometro),
//       litros: parseFloat(litros),
//       precoLitro: parseFloat(precoLitro),
//       tipoCombustivel,
//       posto,
//       totalAbastecimento,
//     };

//     try {
//       // Chamada API para enviar os dados ao backend
//       const response = await axios.post('/api/abastecimentos', abastecimentoData);
//       if (response.status === 201) {
//         alert('Abastecimento registrado com sucesso!');
//         // Limpar formulário após o registro bem-sucedido
//         this.setState({
//           placa: '',
//           odometro: '',
//           litros: '',
//           precoLitro: '',
//           tipoCombustivel: 'Diesel',
//           posto: '',
//           isLoading: false, // Desativa o estado de loading
//         });
//       } else {
//         throw new Error('Erro ao registrar abastecimento.');
//       }
//     } catch (error) {
//       alert(error.message || 'Erro ao registrar abastecimento.');
//       this.setState({ isLoading: false }); // Desativa o estado de loading em caso de erro
//     }
//   };

//   render() {
//     const { isLoading } = this.state;

//     return (
//       <div>
//         <h2>REGISTRAR ABASTECIMENTO</h2>
//         {/* Formulário de registro de abastecimento */}
//         <form onSubmit={this.handleSubmit}>
//           <label>Data:</label>
//           <input type="text" name="data" value={this.state.data} readOnly />

//           <label>Placa do Caminhão:</label>
//           <input type="text" name="placa" value={this.state.placa} onChange={this.handleInputChange} />

//           <label>Odômetro:</label>
//           <input type="number" name="odometro" value={this.state.odometro} onChange={this.handleInputChange} />

//           <label>Litros:</label>
//           <input type="number" name="litros" value={this.state.litros} onChange={this.handleInputChange} />

//           <label>Preço por Litro:</label>
//           <input type="number" name="precoLitro" value={this.state.precoLitro} onChange={this.handleInputChange} />

//           <label>Tipo de Combustível:</label>
//           <select name="tipoCombustivel" value={this.state.tipoCombustivel} onChange={this.handleInputChange}>
//             <option value="Diesel">Diesel</option>
//             <option value="Etanol">Etanol</option>
//             <option value="Gasolina">Gasolina</option>
//           </select>

//           <label>Posto:</label>
//           <input type="text" name="posto" value={this.state.posto} onChange={this.handleInputChange} />

//           <label>Total Abastecimento:</label>
//           <input type="text" name="totalAbastecimento" value={this.state.litros * this.state.precoLitro} readOnly />

//           {/* Botão de envio do formulário */}
//           <button type="submit" disabled={isLoading}>
//             {isLoading ? 'Enviando...' : 'Registrar'}
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default RegistrarAbastecimento;