import React, { Component } from "react";
import api from "../../api"

class Produto extends Component {
  constructor(props) {
    super(props);
    this.nome = this.props.nome;
  }

  _alterar(event) {
    console.log("editando");
    // mandar pro servidor o novo estado do produto
  }

  _apagar(event) {
    console.log("apagando");
    api.delete("", {
      body: {
        nome: this.nome
      }
    }).then( res => { console.log("Produto Removido")})
    .catch(err => {console.log(err)})


  }

  render() {
    return (
      <section>
        <header>
          <h3>{this.props.nome}</h3>
        </header>
        <p>R$: {this.props.preco}</p>
        <button onClick={this._alterar.bind(this)}>Editar...</button>
        <button onClick={this._apagar.bind(this)}>Apagar...</button>
      </section>
    );
  }
}

export default Produto;
