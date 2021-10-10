import { Component } from "react";
import FormularioCasdatro from "./components/FormularioCadastro/index";
import ListaDeNotas from "./components/ListaDeNotas/index";

import './assets/index.css';
import './assets/App.css'

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCasdatro />
        <ListaDeNotas />
      </section >
    );
  }
}

export default App;
