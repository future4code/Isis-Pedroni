import React from "react";
import styled from "styled-components";
import PlaylistDetail from "./PlaylistDetail";
import Playlists from "./Playlists";


const GerenciadorConrainer = styled.div `
   display: flex;
   flex-direction: column;
   `

class GerenciadorPlaylist extends React.Component {
    state = {
        PaginaAtual: "playlists"
    }

    trocandoPagina = (PaginaAtual) => {
        this.setState({PaginaAtual: PaginaAtual})
    }

    
    render() {
     const renderPaginaAtual = () => {
            if (this.state.PaginaAtual === "playlists") {
                return <Playlists
                trocandoPagina = {this.trocandoPagina}
                />
            }else if (this.state.PaginaAtual === "playlistDetail") {
                return <PlaylistDetail
                trocandoPagina = {this.trocandoPagina}
                />
            }
        }



        return(
            <GerenciadorConrainer>
            {renderPaginaAtual()}
            </GerenciadorConrainer>
        )
    }
    }
    
    
   

export default GerenciadorPlaylist