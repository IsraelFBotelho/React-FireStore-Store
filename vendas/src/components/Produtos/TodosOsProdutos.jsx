import React, { Component } from "react";
import Produto from "../Produto";

class TodosOsProdutos extends Component {
  render() {
    return (
      <ul>
        {this.props.busca.map((produto, index) => {
          return (
            <li key={index}>
              <Produto nome={produto[0][0]} preco={produto[0][1]}></Produto>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TodosOsProdutos;
