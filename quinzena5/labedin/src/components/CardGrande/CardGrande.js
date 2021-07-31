import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`;

const CardImage = styled.img`
  width: 70px;
  margin-right: 10px;
`;

const TextH = styled.h4`
  margin-bottom: 4px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function CardGrande(props) {
  return (
    <CardContainer>
      <CardImage src={props.imagem} />
      <ContentContainer>
        <TextH>{props.nome}</TextH>
        <p>{props.descricao}</p>
      </ContentContainer>
    </CardContainer>
  );
}

export default CardGrande;

