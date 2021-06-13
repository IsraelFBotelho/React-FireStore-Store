import { Component } from "react";
import "./assets/style.css";
import BuscarProduto from "./components/BuscarProduto";
import TodosOsProdutos from "./components/Produtos";
import axios from "axios"
import api from "./api"


class App extends Component {
  constructor(props) {
    super(props);
    this.busca = "";
    this.state = {
      produtosEncontados: [],
    };
  }

  buscarProduto(busca) {
    this.busca = busca;
    console.log(this.busca);
    // request de todos os produtos com o inicio desse nome
    // const novoState = array da api
    //this.setState(novoState)
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/produtos`)
      .then(res => {
        const produtos = res.data;

        produtos.forEach(produto => {
          const novo = [produto.nome, produto.preco]
          const estato = [...this.state.produtosEncontados, novo]
          this.setState({ estato });
        })
        
      })
  }


  render() {
    return (
      <section>
        <header className="main-app_header"> Produtos </header>
        <BuscarProduto
          buscarProduto={this.buscarProduto.bind(this)}
        ></BuscarProduto>
        <TodosOsProdutos
          busca={this.state.produtosEncontados}
        ></TodosOsProdutos>
      </section>
    );
  }
}

export default App;
