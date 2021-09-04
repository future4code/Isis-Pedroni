import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

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

const BotoesDeEscolha = styled.button `
    margin: 20px;
`


export const HomePage = () => {
    const [profile, setProfile] = useState({})
    
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isis-pedroni-johnson/person"
   
    useEffect(() => {
        PegandoPerfil()
    }, [])
   
    const PegandoPerfil = () => {
        axios.get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const escolhendoPessoa = () => {
        
    }




    return (
        <HomeConatiner>
            <Container>
                <ImgContainer src={profile.photo} />
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
                <div>
                    <BotoesDeEscolha onClick={escolhendoPessoa}> like </BotoesDeEscolha>
                    <BotoesDeEscolha onClick={escolhendoPessoa}> Dislike </BotoesDeEscolha>
                </div>
            </Container>
        </HomeConatiner>
    )
}