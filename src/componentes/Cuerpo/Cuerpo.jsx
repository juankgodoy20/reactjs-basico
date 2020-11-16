import React, {Component} from 'react';
import Persona from '../Personas/Personas';
import Formulario from '../Formulario/Formulario';

class Cuerpo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numeroclase: 0,
            mostrarMensaje: false
        }
    }

    componentDidMount() {
        console.log('Inicio...');
    }

    componentDidUpdate() {
        console.log('Actualizar...');
    }


    componentWillUnmount() {
        console.log('Sacaron al componente...');
    }

    aumentar = () => {
        const numeroNuevo = this.state.numeroclase + 1;

        this.setState({
            numeroclase: numeroNuevo
        });

        if (this.state.numeroclase > 4) {
            this.setState({
                mostrarMensaje: true
            });
        }
    }

    render() {
        const { apellido } = this.props;
        const numeroclase = this.state.numeroclase;
        const elemento = <h1>Bienvenidos a la clase {numeroclase} {apellido}</h1>;
        const botonAumentar = <button onClick={this.aumentar} >Aumentar</button>
        const mensaje = <h5>Llego a 7</h5>

        return (
            <>
                <section>
                    {elemento}
                    {botonAumentar}
                    {this.state.mostrarMensaje && mensaje}
                </section>
                <section>
                    <Formulario />
                </section>
            </>
        );
    }
}

export default Cuerpo;