import React, { Component } from "react";
import Produto from "../Produto";
import "./style.css"

class TodosOsProdutos extends Component {
  render() {
    return (
      <ul className="todosprodutos_lista">
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
