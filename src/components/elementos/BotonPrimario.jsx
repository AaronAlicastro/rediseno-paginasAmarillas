import React from "react";
import "../../sheetStyles/botonPrimario.css";

function BotonPrimario (props) {

    return <button className="primaryButton" onClick={props.onClick}>
        { props.children }
    </button>
}

export default BotonPrimario;