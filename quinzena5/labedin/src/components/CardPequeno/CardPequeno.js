import React from "react"
import "./CardPequeno.css"

const CardPequeno = (props) => {

    return (
        <div className="estilizacao-card">
            <img src={props.icone}/>
            <p>{props.titulo}</p>
            <p>{props.informacao}</p>
        </div>
    )

}

export default CardPequeno