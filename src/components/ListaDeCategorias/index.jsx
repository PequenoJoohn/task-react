import { Component } from "react";

import './style.css';

class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state= { categorias: []}
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias); 
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias); 
    }

    _novasCategorias(categorias) {
        console.log(categorias)
        this.setState({...this.state, categorias});
    }

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
                    {this.state.categorias.map((categoria, index) => (
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