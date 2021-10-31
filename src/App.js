import { Component } from "react";
import FormularioCasdatro from "./components/FormularioCadastro/index";
import ListaDeNotas from "./components/ListaDeNotas/index";
import ListaDeCategorias from "./components/ListaDeCategorias/index";

import './assets/index.css';
import './assets/App.css'
import ArrayDeNotas from "./data/Notas";
import Categorias from "./data/Categorias";

class App extends Component {

  constructor() {
    super();
    this.notas = new ArrayDeNotas();
    this.categorias = new Categorias();
  }

  // criarNota(titulo, texto, categoria) {
  //   const novaNota = { titulo, texto, categoria };
  //   const novoArrayNotas = [...this.state.notas, novaNota]
  //   const novoEstado = {
  //     notas: novoArrayNotas
  //   }
  //   this.setState(novoEstado);
  // }

  // adicionarCategoria(nomeCategoria) {
  //   const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
  //   const novoEstado = { ...this.state, categorias: novoArrayCategorias };
  //   this.setState(novoEstado);
  // }

  // deletaNota(index) {
  //   let arraynotas = this.state.notas;
  //   arraynotas.splice(index, 1)
  //   this.setState({ notas: arraynotas });
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCasdatro 
        categorias={this.categorias.categorias} 
        criarNota={this.notas.criarNota}
         />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias} />
          <ListaDeNotas
            deletaNota={this.notas.deletarNota}
            notas={this.notas.notas} />
        </main>
      </section >
    );
  }
}

export default App;
