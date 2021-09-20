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
    
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isis-pedroni-johnson"
   
    useEffect(() => {
        pegandoPerfil()
    }, [])
   
    const pegandoPerfil = () => {
        axios.get(url + "/person")
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    
    const escolhendoPessoa = (escolha) => {
        const body = {
            "id": profile.id,
            "choice": escolha
        }
        axios.post(url + "/choose-person", body)
        .then((res) => {
            pegandoPerfil()
        })
        .catch((err) => {
            console.log(err.response)
        })
    }




    return (
        <HomeConatiner>
            {!profile ? <div>Voce é muito exigente!Aperte o botão de Limpar Macthes</div> : 
            <Container>
                <ImgContainer src={profile.photo} />
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
                <div>
                    <BotoesDeEscolha onClick={() => escolhendoPessoa(true)}> like </BotoesDeEscolha>
                    <BotoesDeEscolha onClick={() => escolhendoPessoa(false)}> Dislike </BotoesDeEscolha>
                </div>
            </Container>
            }
        </HomeConatiner>
    )
}