import React from "react"
import styled from "styled-components"

const MatcheConatiner = styled.div`
    display: flex;
    border: 1px solid pink;
    padding: 10px;
    margin: 10px;
    width: 400px;
    justify-content: space-between;
    align-items: center;

`

const ImgConatiner= styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 20px;
    `


export const MatchesPage = () => {
    return (
        <MatcheConatiner>
            <ImgConatiner src="pessoa foto"/>
            <h2> Nome da Pessoa </h2>
           </MatcheConatiner>
    )
}