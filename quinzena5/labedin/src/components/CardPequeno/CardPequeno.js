import React from "react";
import "./CardPequeno.css";
// import styled from "styled-components";


// const CardGeral = styled.div `
//     display: flex;
//     align-items: center;
//     border: 1px solid black;
//     padding: 20px 10px;
//     margin-bottom: 10px;
//     height: 200px;
//     `;

// const ImgCard= styled.img `
//     width: 70px;
//     margin-right: 10px;
//     border-radius: 50%;
//     `;



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