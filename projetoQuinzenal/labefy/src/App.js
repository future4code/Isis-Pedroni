import React from "react"
import axios from "axios"
import styled from "styled-components"
import Header from "./components/Header"
import GerenciadorPlaylist from "./components/GerenciadorPlaylist"
import FormularioPlaylist from "./components/FormularioPlaylist"


const AppContainer = styled.div `
  width: 100vw;
  height: 100vw;
  display:flex;
  flex-direction:column;
  `


class App extends React.Component {
  state = {
    Paginas: "FormularioPlaylist"

  }
  
  TrocandoPagina = (trocando) => {
    this.setState({trocando: trocando})
  }
  
  render(){
    const Paginatrocando = () => {
      if ( this.state.trocando === "FormularioPlaylist") {
        return <FormularioPlaylist />
      }else if (this.state.trocando === "GerenciadorPlaylist") {
        return <GerenciadorPlaylist />
      }
    }


    return (
      <AppContainer >
      <Header
      TrocandoPagina = {this.TrocandoPagina} />
      {Paginatrocando()}
      </AppContainer>
    );
  }
}

 export default App;
