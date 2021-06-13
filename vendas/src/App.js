import { Component } from "react";
import "./assets/style.css";
import BuscarProduto from "./components/BuscarProduto";
import TodosOsProdutos from "./components/Produtos";
import api from "./api";
import AdicionarProduto from "./components/AdicionarProduto";

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
    api.get(`/${busca}`).then((res) => {
      const produtos = res.data.data;

      var result = [];
      produtos.map((produto, index) => {
        return result.push([[produto.nome, produto.preco]]);
      });
      this.setState({ produtosEncontados: result });
    });
  }

  componentDidMount() {
    api.get(`${this.busca}`).then((res) => {
      const produtos = res.data.data;

      var result = [];
      produtos.map((produto, index) => {
        return result.push([[produto.nome, produto.preco]]);
      });
      this.setState({ produtosEncontados: result });
    });
  }

  render() {
    return (
      <section>
        <header className="main-app_header"> Produtos </header>
        <BuscarProduto
          buscarProduto={this.buscarProduto.bind(this)}
        ></BuscarProduto>
        <AdicionarProduto></AdicionarProduto>
        <TodosOsProdutos
          busca={this.state.produtosEncontados}
        ></TodosOsProdutos>
      </section>
    );
  }
}

export default App;
