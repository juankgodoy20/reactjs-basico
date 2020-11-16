import React, {Component} from 'react';

class Hijo1 extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { nombre } = this.props; 

        return (
            <section className='section-hijo'>
                <h1>Hola {nombre}</h1>
                <input onChange={this.props.cambiarNombre} type="text"  />
            </section>
        );
    }
}

export default Hijo1;