import React, { Component } from "react";
import api from "../../api";

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
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  render() {
    return (
      <section>
        <header>
          <h3>{this.props.nome}</h3>
        </header>
        <p>R$: {parseFloat(this.props.preco).toFixed(2)}</p>
        <button onClick={this._alterar.bind(this)}>Editar...</button>

        {this.state.showForm ? (
          <form onSubmit={this._submitNovoValor.bind(this)}>
            <input
              type="number"
              step="0.01"
              placeholder="Novo preço..."
              onChange={this._handleChangeValor.bind(this)}
            ></input>
            <button>Enviar</button>
          </form>
        ) : null}

        <button onClick={this._apagar.bind(this)}>Apagar...</button>
      </section>
    );
  }
}

export default Produto;
