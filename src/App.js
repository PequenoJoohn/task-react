import { Component } from "react";
import FormularioCasdatro from "./components/FormularioCadastro/index";
import ListaDeNotas from "./components/ListaDeNotas/index";
import ListaDeCategorias from "./components/ListaDeCategorias/index";

import './assets/index.css';
import './assets/App.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ["Trabalho", "Esportes"],
    }
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayCategorias };
    this.setState(novoEstado);
  }

  deletaNota(index) {
    let arraynotas = this.state.notas;
    arraynotas.splice(index, 1)
    this.setState({ notas: arraynotas });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCasdatro 
        categorias={this.state.categorias} 
        criarNota={this.criarNota.bind(this)}
         />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias} />
          <ListaDeNotas
            deletaNota={this.deletaNota.bind(this)}
            notas={this.state.notas} />
        </main>
      </section >
    );
  }
}

export default App;
