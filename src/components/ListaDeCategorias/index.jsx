import { Component } from "react";

import './style.css';

class ListaDeCategorias extends Component {

    _handleEventoInput(e) {
        if (e.key === 'Enter') {
            if (e.target.value === '') {
                return alert('Insira um valor');
            }
            let valorCategoria = e.target.value
            this.props.adicionarCategoria(valorCategoria);
            e.target.value = ''
        }

    }

    render() {
        console.log(this.props);
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => (
                        <li key={index} className="lista-categorias_item">{categoria}</li>
                    ))}
                </ul>
                <input type="text" className="lista-categorias_input" placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)} />
            </section>
        )
    }
}

export default ListaDeCategorias;