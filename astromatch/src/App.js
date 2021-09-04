import React, { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { MatchesPage } from './pages/MatchesPage';

const App = () => {

const [paginaAtual, setPaginaAtual] = useState("home")

const TrocandoPagina = () => {
  if (paginaAtual === "home"){
    setPaginaAtual("matches")
  }else {
    setPaginaAtual("home")
  }
}

const limpandoMatches = () => {
  console.log("limpa macthes")
}

  return (
    <div>
      {paginaAtual === "home" ? <HomePage/> : <MatchesPage />}
      <button onClick={TrocandoPagina}>{paginaAtual === "home" ? "ir para matches" : "ir para home"}</button>
      <button onClick={limpandoMatches}>limpar matches</button>
    </div>
  );
}

export default App;
