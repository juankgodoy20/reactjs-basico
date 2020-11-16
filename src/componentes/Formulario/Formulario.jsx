import React, {Component} from 'react';
import Persona from '../Personas/Personas'
import './Formulario.css';

class Formulario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            nombre: '',
            personas: []
        }
    }

    cambiarNombre = (evento) => {
        console.log(this.state.nombre)
        this.setState(
            {
                nombre: evento.target.value
            }
        );
    }

    cambiarId = (evento) => {
        console.log(this.state.id)
        this.setState(
            {
                id: evento.target.value
            }
        );
    }

    guardarPersona = () => {

        const persona = {
            id: this.state.id,
            nombre: this.state.nombre
        }

        const personas = this.state.personas;
        personas.push(persona);

        this.setState(
            {
                personas: personas
            }
        )

    }

    render() {
        const listaPersonas = this.state.personas.map((persona) =>
            <Persona key={persona.id} nombre={persona.nombre} />
        );
        

        return (
            <>
                {listaPersonas}
                <form className="formulario-prueba"  >
                    <label>ID: </label>    
                    <input type="text" onChange={this.cambiarId} value={this.state.id} />
                    <br></br>
                    <label>Nombre: </label>    
                    <input type="text" onChange={this.cambiarNombre} value={this.state.nombre} />
                    <br/>
                    <button type="button" onClick={this.guardarPersona}>Agregar</button>
                </form>
            </>
        );
    }
}

export default Formulario;