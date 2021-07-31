import React from "react";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import styled from "styled-components";


const ContainerGlobal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;

function App() {
  return (
    <ContainerGlobal>
      <PageSectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://pm1.narvii.com/6793/6a586d6f5f3188f07773349fd1e40eca9266e18dv2_hq.jpg"
          nome="Ísis Pedroni"
          descricao="Olá, sou a Ísis."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      
        <CardPequeno email={"isispedroni@gmail.com"} endereco={"Morando na rua tal"} 
        />

      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0/1588617268603?e=2159024400&v=beta&t=a88brKeePgoXCa0PpjouqjPLfp25RQso7CCWfbvQ9qg"
          nome="Experiências"
          descricao="Editora de conteudo"
        />

        <CardGrande
          imagem="https://i.pinimg.com/474x/00/02/03/000203a3503b479f06138215cd7721e9.jpg"
          nome="Defeitos :("
          descricao="As vezes sou chata"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </PageSectionContainer>
    </ContainerGlobal>
  );
}

export default App;
