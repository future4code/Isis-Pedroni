import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"

const MatcheConatiner = styled.div`
    display: flex;
    border: 1px solid pink;
    padding: 10px;
    margin: 8px;
    width: 250px;
    /* justify-content: space-between; */
    align-items: center;

`

const ImgConatiner= styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 20px;
    `
    


export const MatchesPage = () => {
    const [matchesLista, setMatchesLista] = useState ([])
    const [apagandoLista, setapagandoLista] = useState ()

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isis-pedroni-johnson/matches"

    useEffect(() => {
        getMatchesLista()
    }, [])


    const getMatchesLista = () => {
            axios.get(url)
            .then((res) => {
                setMatchesLista(res.data.matches)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    const limpandoMatches = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/isis-pedroni-johnson/clear")
        .then((res) => {
            setapagandoLista(res.data.message)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
   

    const renderMatches = () => {
        return matchesLista.map((match) => {
            return <MatcheConatiner><ImgConatiner src={match.photo}></ImgConatiner>{match.name} </MatcheConatiner>
        })
    }


    return (
        <div>
            {renderMatches()}
            {/* <ImgConatiner src="foto.photo"/> */}
            <button onClick={limpandoMatches}>limpar matches</button>

           </div>
    )
}