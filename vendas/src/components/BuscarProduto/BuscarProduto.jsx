import React, { Component } from "react";

class BuscarProduto extends Component {
  constructor(props) {
    super(props);
    this.buscar = "";
  }

  _handleChangeBusca(event) {
    this.buscar = event.target.value;
    // console.log(this.buscar);
  }

  _buscarProduto(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.buscarProduto(this.buscar);
  }

  render() {
    return (
      <form onSubmit={this._buscarProduto.bind(this)}>
        <input
          type="text"
          placeholder="Buscar Produto..."
          onChange={this._handleChangeBusca.bind(this)}
        ></input>
        <button>Pesquisar</button>
      </form>
    );
  }
}

export default BuscarProduto;
