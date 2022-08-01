import React from "react";
import BotonPrimario from "./elementos/BotonPrimario";
import BotonSecundario from "./elementos/BotonSecundario";
import "../sheetStyles/filtro.css";

function Filtro({ title, text_boton }) {
    const clickToFiltro = () => {
        document.querySelector("#formFiltro").style.display = "block";
        document.querySelector("#ocultoFiltro").style.display = "flex";
        document.querySelector("#ocultoFiltro").style.animation = "moveLateral 1.2s forwards";
    }
    const clickToBody = () => {
        document.querySelector("#formFiltro").style.display = "none";
        document.querySelector("#ocultoFiltro").style.display = "none";
    }
    const clickIntoBody = e => e.stopPropagation();

    return (
        <div>
            <div id="contenedorFiltro">
                <h3>{ title }</h3>
                <BotonPrimario onClick={clickToFiltro}>{ text_boton }</BotonPrimario>
            </div>
            
            <form id="formFiltro" onClick={clickToBody}>
                <div id="ocultoFiltro" onClick={clickIntoBody}>
                    <h6>Ingresa los datos de tu b&uacute;queda</h6>
                    <input type="text" className="camposFiltro" placeholder="Nombre comercial" />
                    <input type="text" className="camposFiltro" placeholder="Categoría" />
                    <input type="text" className="camposFiltro" placeholder="Actividad comercial" />
                    <input type="text" className="camposFiltro" placeholder="Localidad" />
                    <input type="text" className="camposFiltro" placeholder="Barrio" />
                    <BotonSecundario>Buscar</BotonSecundario>
                </div>
            </form>
        </div>
    );
}

export default Filtro;