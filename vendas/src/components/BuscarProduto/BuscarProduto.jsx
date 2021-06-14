import React, { Component } from "react";
import "./style.css";

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
          className="buscar-produto_input"
          type="text"
          placeholder="Buscar Produto..."
          onChange={this._handleChangeBusca.bind(this)}
        ></input>
        <button className="buscar-produto_button"></button>
      </form>
    );
  }
}

export default BuscarProduto;
