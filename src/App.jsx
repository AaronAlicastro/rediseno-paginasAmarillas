import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecera from "./components/Cabecera.jsx";
import Filtro from "./components/Filtro.jsx";
import Cards from "./components/Cards.jsx";
import PiePagina from "./components/PiePagina.jsx";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.key = 0;
        this.cards = [{
            title: "ALMACEN DE PINTURAS PINTUCOLORES",
            listDes: [
                "Mezcla Técnica Pinturas Esmaltes Vinilos Lacas Poliéster Poliuretano",
                "Bogotá, Los Mártires, Eduardo Santos",
                "Carrera 18#3A-12"
            ],
            listIcons: [
                ["#", "FaPhoneAlt"],
                ["#", "FaMapMarkerAlt"]
            ]
        }, {
            title: "VINIPEL STRETCH DE 50 CM X 500 MTS",
            listDes: [
                "Embalaje Vinipel Plásticos Burbujas Stretch Films Mayoristas Distribuidores",
                "Fabricantes",
                "Bogotá, Los Mártires, La Favorita",
                "Av Caracas #16-15"
            ],
            listIcons: [
                ["#", "FaPhoneAlt"],
                ["#", "FaMapMarkerAlt"],
                ["#", "FaFacebook"]
            ]
        }, {
            title: "VICMAR JEANS",
            listDes: [
                "Venta Ropa Jeans Camisas Driles Chaquetas Blusas Corbatas",
                "Bogotá, Los Mártires, San Victorino",
                "Calle 12 #11-71 Piso 2"
            ],
            listIcons: [
                ["#", "FaPhoneAlt"],
                ["#", "FaWhatsappSquare"]
            ]
        }];
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div id="divAppHome" className="divApp">
                            <Cabecera />
                            <div id="contenedorIMGfondo">
                                <h1>¿Desea que su empresa sea vista por millones de personas?</h1>
                            </div>

                            <h2>Dise&ntilde;amos tu p&aacute;gina web</h2>
                            <p>
                                <span>
                                    Nos dedicamos al Marketing Digital y posicionamiento de empresas en la Internet, nuestros principales productos son: el Directorio Comercial Interactivo y la creación de webs empresariales.
                                </span>
                            </p>
                            <Filtro title="¿Deseas consultar algo?, te ayudaremos a encontrar lo que buscas" text_boton="Si, consultar" />

                            {
                                this.cards.map(d => {
                                    this.key += 1;
                                    return <Cards data={d} key={this.key} />
                                })
                            }
                            <PiePagina />
                        </div>
                    } />
                </Routes>

            </BrowserRouter>
        );
    }
}

export default App;