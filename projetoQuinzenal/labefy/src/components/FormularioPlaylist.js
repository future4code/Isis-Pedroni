import React from "react";
import styled from "styled-components";


const PlaylistContainer = styled.div `
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const Formulario = styled.div `
    height: 120px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
   `

class FormularioPlaylist extends React.Component {
    state= {

    }
    
    render(){
    return(
        <PlaylistContainer>
        <h1>Cadastrar</h1>
        <Formulario>
        <strong>Nova Playlist</strong>
        <input placeholder="Nome da Playlist"
        />
        <button>Cadastrar Playlist</button>
        
        </Formulario>
        </PlaylistContainer>
    )
}

   }
   

export default FormularioPlaylist