import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaGoogle, FaInstagramSquare, FaTwitter, FaWhatsapp, FaBars } from "react-icons/fa";
import "../sheetStyles/cabecera.css";
import icon from "../../public/favicon.ico";

function Cabecera(){
    const hover = () => {
        document.querySelector("#barraNombreEmpresa").style.display = "flex";
        document.querySelector("#barraNombreEmpresa").style.animation = "moveBarra 1s forwards";
        document.querySelectorAll(".barraNombreEmpresaSpan").forEach(s => s.style.display = "inline");
    }
    const hoverReverse = () => {
        document.querySelectorAll(".barraNombreEmpresaSpan").forEach(s => s.style.display = "none");
        document.querySelector("#barraNombreEmpresa").style.display = "none";
    }
    const moverBar = () => {
        document.querySelector("#menuBar").style.display = "flex";
        document.querySelector("#menuBar_move").style.display = "flex";
        document.querySelector("#menuBar_move").style.animation = "moveLateralBar 1.2s forwards";
    }
    const clickToBar = () => {
        let ancho = document.querySelector("body").offsetWidth;
        if(ancho < 915){
            document.querySelectorAll(".aMenuBar")[3].style.display = "inline-block";
            moverBar();
        }else document.querySelectorAll(".aMenuBar")[3].style.display = "none";
        if(ancho < 770){
            document.querySelectorAll(".aMenuBar")[2].style.display = "inline-block";
            moverBar();
        }else document.querySelectorAll(".aMenuBar")[2].style.display = "none";
        if(ancho < 640){
            document.querySelectorAll(".aMenuBar")[1].style.display = "inline-block";
            moverBar();
        }else document.querySelectorAll(".aMenuBar")[1].style.display = "none";
        if(ancho < 505){
            document.querySelectorAll(".aMenuBar")[0].style.display = "inline-block";
            moverBar();
        }else document.querySelectorAll(".aMenuBar")[0].style.display = "none";
    }
    const clickIntoToBar = () => {
        document.querySelector("#menuBar").style.display = "none";
        document.querySelector("#menuBar_move").style.display = "none";
    }
    const clickIntoToInto = e => e.stopPropagation();

    return (
        <div id="cabecera">
            <nav id="navCabecera">
                <div>
                    <img src={icon} alt="icon Paginas Amarrilas" onMouseEnter={hover} onMouseLeave={hoverReverse} />
                    <div id="barraNombreEmpresa">
                        <div className="barraNombreEmpresaMove">
                            <span className="barraNombreEmpresaSpan">
                                P&aacute;ginas
                            </span>
                        </div>
                        <div className="barraNombreEmpresaMove">
                            <span className="barraNombreEmpresaSpan barraNombreEmpresaSpan2">
                                Amarrilas
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="#" className="aMenu">Inicio</a>
                    <a href="#" className="aMenu">Nosotros</a>
                    <a href="#" className="aMenu">Contacto</a>
                    <a href="#" className="aMenu">Registrarse</a>
                    <label id="bars" onClick={clickToBar}> 
                        <IconContext.Provider value={{ size:"1.5em" }}>
                            <FaBars /> 
                        </IconContext.Provider>
                    </label>
                </div>
            </nav>
            <div>
                <address>
                    <div className="foreingIcon">
                        <IconContext.Provider value={{ size:"2.5em" }}>
                            <FaFacebook />
                        </IconContext.Provider>
                    </div>
                    <div className="foreingIcon">
                        <IconContext.Provider value={{ size:"2.5em" }}>
                            <FaGoogle />
                        </IconContext.Provider>
                    </div>
                    <div className="foreingIcon">
                        <IconContext.Provider value={{ size:"2.5em" }}>
                            <FaInstagramSquare />
                        </IconContext.Provider>
                    </div>
                    <div className="foreingIcon">
                        <IconContext.Provider value={{ size:"2.5em" }}>
                            <FaTwitter />
                        </IconContext.Provider>
                    </div>
                    <div className="foreingIcon">
                        <IconContext.Provider value={{ size:"2.5em" }}>
                            <FaWhatsapp />
                        </IconContext.Provider>
                    </div>
                </address>
            </div>

            <div id="menuBar" onClick={clickIntoToBar}>
                <div id="menuBar_move" onClick={clickIntoToInto}>
                    <a href="#" className="aMenuBar">Inicio</a>
                    <a href="#" className="aMenuBar">Nosotros</a>
                    <a href="#" className="aMenuBar">Contacto</a>
                    <a href="#" className="aMenuBar">Registrarse</a>
                </div>
            </div>
        </div>
    );
}

export default Cabecera;