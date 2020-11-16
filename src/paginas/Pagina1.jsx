import React from 'react';
import Encabezado from '../componentes/Encabezado/Encabezado'
import Cuerpo from '../componentes/Cuerpo/Cuerpo'
import { withRouter } from 'react-router-dom';

function Pagina1 (props) {

    const { history } = props;

    const volver = () => {
        history.goBack();
    }

    return (
        <div className="App">
          <Encabezado nombre="React" />
          <Cuerpo apellido="Godoy" />
          <button type="button" onClick={volver}>Volver</button>
        </div>
    );
}

export default withRouter(Pagina1);