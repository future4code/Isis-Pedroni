import React from "react"
import styled from "styled-components"

const HomeConatiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ImgContainer = styled.img`
    width: 400px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    border: 1px solid pink;
    padding: 20px;
    margin: 20px;
`


export const HomePage = () => {
    return (
        <HomeConatiner>
            <Container>
                <ImgContainer src="aqui vai uma foto" />
                <p> texto de apresentação </p>
                <div>
                    <button> like </button>
                    <button> Dislike </button>
                </div>
            </Container>
        </HomeConatiner>
    )
}