import React, {Component} from 'react';

class Persona extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { nombre } = this.props;

        return (
           <div>Bienvenido {nombre}</div> 
        );    
    }
}

export default Persona;