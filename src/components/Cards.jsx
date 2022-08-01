import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsappSquare, FaFacebook } from "react-icons/fa";
import "../sheetStyles/cards.css";

/*
* los datos que se pasaran serán los siguientes (todo vendrá de 'data'):
* title –> el titulo de la carta a aparecer.
* listDes –> array que contendrá cada valor que se pasará en el 'ul'.
* listIcons –> serán los iconos a cargar en la última parte de la carta.
*/

function Cards(props) {
    let renderIcon = [], key = 0;
    renderIcon["FaPhoneAlt"] = () => <FaPhoneAlt />
    renderIcon["FaMapMarkerAlt"] = () => <FaMapMarkerAlt />
    renderIcon["FaWhatsappSquare"] = () => <FaWhatsappSquare />
    renderIcon["FaFacebook"] = () => <FaFacebook />

    return (
        <div className="contenedorCarta">
            <div>
                <h6>{ props.data.title }</h6>
                <ul>
                    {
                        props.data.listDes.map(d => {
                            key++;
                            return <li key={key}>{d}</li>
                        })
                    }
                </ul>
                <div className="containerCARDSlinks">
                    {
                        props.data.listIcons.map(d => {
                            key++;
                            return <a href={d[0] || "#"} key={key}> {renderIcon[d[1]]()} </a>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Cards;