import React from 'react';
import {withRouter} from 'react-router-dom';
import './Pagina2.css';

function Pagina2 (props) {

    const {history} = props;

    const cambiarPagina1 = () => {
        history.push('pagina1');
    }

    return (
        <>
            <section className='pagina2'>
                <h1>Pagina 2</h1>
                <button type="button" onClick={cambiarPagina1}>Cambiar Pagina1</button>
            </section>
        </>    
    )
}

export default withRouter(Pagina2);