import React from "react";
import styled from "styled-components";


const HeaderContainer = styled.div `
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: aqua;
   `
const Botoes = styled.label `
    display: flex;
    width: 270px;
    justify-content: space-around;
`


const Header = (props) => {
    return(
        <HeaderContainer>
            <h1>SpoLafy</h1>
            <Botoes>
                <button onClick = {() => props.TrocandoPagina("FormularioPlaylist")} > cadastrar PlayList</button>
                <button onClick = {() => props.TrocandoPagina("GerenciadorPlaylist")} > Gerenciar PlayList</button>
            </Botoes>
        
        
        </HeaderContainer>
    )
}

export default Header