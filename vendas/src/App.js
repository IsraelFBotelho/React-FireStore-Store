import { Component } from "react";
import "./assets/style.css";
import BuscarProduto from "./components/BuscarProduto";
import TodosOsProdutos from "./components/Produtos";
import api from "./api";

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
    api.get("").then((res) => {
      const produtos = res.data;
      var result = []
      for(var i in produtos['response']){
        var itens = []
        for(var j in produtos['response'][i] ){
          itens.push(j)
        }
        result.push([i, itens])
      }
      const state = this.state.produtosEncontados.push.apply(this.state.produtosEncontados, result)
      this.setState({produtosEncontados:result})
      console.log(this.state)
    });
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
