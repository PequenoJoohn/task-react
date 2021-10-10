import { Component } from "react";
import FormularioCasdatro from "./components/FormularioCadastro/index";
import ListaDeNotas from "./components/ListaDeNotas/index";

import './assets/index.css';
import './assets/App.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCasdatro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section >
    );
  }
}

export default App;
