import React from 'react';
import './Encabezado.css';

function Encabezado (props) {

    //const palabra = props.nombre;
    const { nombre } = props;

    return (
        <header>
            <h1>Curso {nombre}</h1>
        </header>
    );
}

export default Encabezado;