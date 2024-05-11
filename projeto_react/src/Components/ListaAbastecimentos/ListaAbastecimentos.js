import React, { Component } from 'react';
class ListaAbastecimentos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abastecimentos: [], // Array para armazenar os abastecimentos
      filtros: {
        data: '',
        placa: '',
        odometro: '',
        litros: '',
        precoLitro: '',
        tipoCombustivel: '',
        posto: '',
      }
    };
  }

  handleExcluirAbastecimento = (index) => {
    // Função para excluir um abastecimento com base no índice
    const updatedAbastecimentos = [...this.state.abastecimentos];
    updatedAbastecimentos.splice(index, 1);
    this.setState({ abastecimentos: updatedAbastecimentos });
  };

  handleFilterChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      filtros: {
        ...prevState.filtros,
        [name]: value
      }
    }));
  };

  render() {
    const { abastecimentos, filtros } = this.state;

    const filteredAbastecimentos = abastecimentos.filter(abastecimento => {
      for (const key in filtros) {
        if (filtros[key] && abastecimento[key].toString().toLowerCase().indexOf(filtros[key].toLowerCase()) === -1) {
          return false;
        }
      }
      return true;
    });

    return (
      <div>
        <h2>Lista de Abastecimentos</h2>
        <div>
          <label>Data:</label>
          <input type="text" name="data" value={filtros.data} onChange={this.handleFilterChange} />

          <label>Placa do Caminhão:</label>
          <input type="text" name="placa" value={filtros.placa} onChange={this.handleFilterChange} />

          <label>Odômetro:</label>
          <input type="text" name="odometro" value={filtros.odometro} onChange={this.handleFilterChange} />

          <label>Litros:</label>
          <input type="text" name="litros" value={filtros.litros} onChange={this.handleFilterChange} />

          <label>Preço por Litro:</label>
          <input type="text" name="precoLitro" value={filtros.precoLitro} onChange={this.handleFilterChange} />

          <label>Tipo de Combustível:</label>
          <input type="text" name="tipoCombustivel" value={filtros.tipoCombustivel} onChange={this.handleFilterChange} />

          <label>Posto:</label>
          <input type="text" name="posto" value={filtros.posto} onChange={this.handleFilterChange} />
        </div>
        <ul>
          {filteredAbastecimentos.map((abastecimento, index) => (
            <li key={index}>
              <div>
                <p>Data: {abastecimento.data}</p>
                <p>Placa do Caminhão: {abastecimento.placa}</p>
                <p>Odômetro: {abastecimento.odometro}</p>
                <p>Litros: {abastecimento.litros}</p>
                <p>Preço por Litro: {abastecimento.precoLitro}</p>
                <p>Tipo de Combustível: {abastecimento.tipoCombustivel}</p>
                <p>Posto: {abastecimento.posto}</p>
                <p>Total Abastecimento: {abastecimento.litros * abastecimento.precoLitro}</p>
                <button onClick={() => this.handleExcluirAbastecimento(index)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaAbastecimentos;