import React from "react";
import styled from "styled-components";


const playlists = styled.div `
   
   `

class Playlists extends React.Component {
    state = {
        
    }
    
    render() {
        return(
            <playlists>
            <button onClick={() => this.props.trocandoPagina("playlistDetail")}>abrir playlists</button>    
            </playlists>
        )
    }
    }
    
    
   

export default Playlists