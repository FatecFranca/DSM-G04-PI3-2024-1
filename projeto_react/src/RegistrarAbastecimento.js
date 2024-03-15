import React, { Component } from 'react';

class AbastecimentoForm extends Component {
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
    };
  }

  getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const totalAbastecimento = parseFloat(this.state.litros) * parseFloat(this.state.precoLitro);
    // Adicione a lógica para enviar os dados ao banco de dados ou realizar outras ações
    console.log('Dados do abastecimento:', {
      ...this.state,
      totalAbastecimento,
    });
  };

  render() {
    return (
      <div>
        <h2>Registrar Abastecimento</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Data:</label>
          <input type="text" name="data" value={this.state.data} readOnly />

          <label>Placa do Caminhão:</label>
          <input
            type="text"
            name="placa"
            value={this.state.placa}
            onChange={this.handleInputChange}
            // Adicione lógica de pesquisa inteligente aqui
          />

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
          <input type="text" name="totalAbastecimento" value={this.state.litros * this.state.precoLitro} readOnly />

          <button type="submit">Registrar</button>
        </form>
      </div>
    );
  }
}

export default AbastecimentoForm;
