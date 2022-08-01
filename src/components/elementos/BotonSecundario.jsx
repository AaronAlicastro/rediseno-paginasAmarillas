import React from "react";
import "../../sheetStyles/botonSecundario.css";

function BotonSecundario (props) {

    return <button className="secundaryButton" onClick={props.onClick}>
        { props.children }
    </button>
}

export default BotonSecundario;