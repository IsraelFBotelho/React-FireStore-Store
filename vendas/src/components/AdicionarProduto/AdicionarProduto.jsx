import React, { Component } from "react";

import api from "../../api";

import "./style.css";

class AdicionarProduto extends Component {
  constructor(props) {
    super(props);
    this.nome = "";
    this.preco = "";
    this.state = { showFormAdicionar: false };
  }

  _handleChangeAdicionar() {
    this.setState({ showFormAdicionar: !this.state.showFormAdicionar });
  }

  _handleChangeNome(event) {
    this.nome = event.target.value;
  }

  _handleChangeValor(event) {
    this.preco = event.target.value;
  }

  _submitNovoProduto() {
    if (this.nome === "") {
      return;
    }
    console.log(this.nome);
    api.post("", { nome: this.nome, preco: this.preco });
  }

  render() {
    return (
      <div>
        <button
          className="adicionar-produto_novo"
          onClick={this._handleChangeAdicionar.bind(this)}
        ></button>
        {this.state.showFormAdicionar ? (
          <form onSubmit={this._submitNovoProduto.bind(this)}>
            <input
              className="adicionar-produto_inputNome"
              placeholder="Nome do produto"
              type="text"
              onChange={this._handleChangeNome.bind(this)}
            ></input>
            <input
              className="adicionar-produto_inputPreco"
              placeholder="Valor do produto"
              type="number"
              onChange={this._handleChangeValor.bind(this)}
              step="0.01"
            ></input>
            <button className="adicionar-produto_enviar"></button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default AdicionarProduto;
