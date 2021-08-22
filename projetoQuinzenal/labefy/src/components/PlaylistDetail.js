import React from "react";
import styled from "styled-components";


const PlaylistDetailContainer = styled.div `
   
   `

class PlaylistDetail extends React.Component {
    state = {
        
    }
    
    render() {
        return(
            <playlists>
             <button onClick={() => this.props.trocandoPagina("playlists")}>Voltar playlists</button>       
            </playlists>
        )
    }
    }
    
    
   

export default PlaylistDetail