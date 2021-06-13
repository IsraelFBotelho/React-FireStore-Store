import React, { Component } from "react";
import api from "../../api";

class Produto extends Component {
  constructor(props) {
    super(props);
    this.nome = this.props.nome;
    this.preco = this.props.preco;
  }

  _alterar(event) {
    console.log("editando");
    api
      .patch(
        "",
        {
          body: {
            nome: this.nome,
            preco: 9999999,
          },
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log("editado");
      });
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
        <p>R$: {this.props.preco.toFixed(2)}</p>
        <button onClick={this._alterar.bind(this)}>Editar...</button>
        <button onClick={this._apagar.bind(this)}>Apagar...</button>
      </section>
    );
  }
}

export default Produto;
