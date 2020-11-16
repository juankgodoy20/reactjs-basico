import React, {Component} from 'react';
import './Pagina3.css'
import Hijo1 from './Hijo1';
import Hijo2 from './Hijo2';

class Pagina3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: 'Juan'
        }
    }

    cambiarNombre = (evento) => {
        this.setState({
            nombre: evento.target.value
        })
    }

    render () {
        return (
            <section className='pagina3'>
                <h1>Ejemplo de Hijos</h1>
                <Hijo1 cambiarNombre={this.cambiarNombre} nombre={this.state.nombre} />
                <Hijo2 cambiarNombre={this.cambiarNombre} nombre={this.state.nombre} />
            </section>
        );
    }
}

export default Pagina3;