import { Component } from "react";
import CardNota from "../CardNota";

import "./style.css";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => (
                    <li className="lista-notas_item" key={index}>
                        {console.log(nota)}
                        <CardNota titulo={nota.titulo} texto={nota.texto}  />
                    </li>
                ))}
            </ul>
        )
    }
}

export default ListaDeNotas;