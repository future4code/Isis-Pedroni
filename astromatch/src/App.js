import React, { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { MatchesPage } from './pages/MatchesPage';

const App = () => {

const [paginaAtual, setPaginaAtual] = useState("home")

const trocandoPagina = () => {
  if (paginaAtual === "home"){
    setPaginaAtual("matches")
  }else {
    setPaginaAtual("home")
  }
}



  return (
    <div>
      {paginaAtual === "home" ? <HomePage/> : <MatchesPage />}
      <button onClick={trocandoPagina}>{paginaAtual === "home" ? "ir para matches" : "ir para home"}</button>
    </div>
  );
}

export default App;
