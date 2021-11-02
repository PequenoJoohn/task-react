import { Component } from "react";
import FormularioCasdatro from "./components/FormularioCadastro/index";
import ListaDeNotas from "./components/ListaDeNotas/index";
import ListaDeCategorias from "./components/ListaDeCategorias/index";

import './assets/index.css';
import './assets/App.css'
import ArrayDeNotas from "./data/Notas";
import Categorias from "./data/Categorias";
import { Header } from "./components/Header";

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
      <>
      <Header/>
      <section className="conteudo">
        <FormularioCasdatro 
        categorias={this.categorias} 
        criarNota={this.notas.adicionarNota.bind(this.notas)}
         />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} />
          <ListaDeNotas
            deletaNota={this.notas.deletarNota.bind(this.notas)}
            notas={this.notas} />
        </main>
      </section >
      </>
    );
  }
}

export default App;
