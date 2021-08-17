import React from "react";
import axios from "axios";


export default class TelaCadastro extends React.Component{
state= {
    nome:"",
    email:""
}

incluidoNome = (event) => {
    this.setState({nome: event.target.value})
}

incluidoEmail = (event) => {
    this.setState({email: event.target.value})
}


fazerCadastro = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
        nome:this.state.nome,
        email:this.state.email,

    }

    axios.post(url,body, {
        headers:{
            Authorization: "isis-pedroni"
        }
    })
    .then((res) => {
        alert("Tudo certinho :)")
        this.state({nome:"", email:""})
    })
    .catch((err) => {
        alert (err.response.data.message)
    })

}

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Indo para a lista</button>
                <h2>cadastro</h2>
                <input 
                placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.incluidoNome}
                />

                <input 
                placeholder={"E-mail"}
                value={this.state.email}
                onChange={this.incluidoEmail}
                />

                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}