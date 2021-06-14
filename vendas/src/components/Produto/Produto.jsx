import React, { Component } from "react";
import api from "../../api";
import "./style.css";

class Produto extends Component {
  constructor(props) {
    super(props);
    this.nome = this.props.nome;
    this.preco = this.props.preco;

    this.form = 0;

    this.state = {
      showForm: false,
    };
  }

  _submitNovoValor() {
    console.log("editando");
    api.patch("", { nome: this.nome, preco: this.form });
  }

  _alterar(event) {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  _handleChangeValor(evt) {
    this.form = evt.target.value;
  }

  _apagar(event) {
    console.log("apagando");
    api
      .delete(`/${this.nome}`)
      .then((res) => {
        console.log("Produto Removido");
        this.props.buscarProduto("");
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  render() {
    return (
      <section>
        <header>
          <h3 className="produto_nome">{this.props.nome}</h3>
        </header>
        <p className="produto_preco">
          R$: <strong>{parseFloat(this.props.preco).toFixed(2)}</strong>
        </p>
        <button
          className="produto_editar"
          onClick={this._alterar.bind(this)}
        ></button>

        {this.state.showForm ? (
          <form onSubmit={this._submitNovoValor.bind(this)}>
            <input
              className="produto_editar_input"
              type="number"
              step="0.01"
              placeholder="Novo preço..."
              onChange={this._handleChangeValor.bind(this)}
            ></input>
            <button className="produto_editar_button"></button>
          </form>
        ) : null}

        <button
          className="produto_apagar"
          onClick={this._apagar.bind(this)}
        ></button>
      </section>
    );
  }
}

export default Produto;
