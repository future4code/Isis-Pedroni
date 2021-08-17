import React from "react";

import axios from "axios";


export default class TelaListaUsuario extends React.Component{
   state={
       usuarios= []
   }


componentDidMount(){
    this.pegarUsuarios()
}

   pegarUsuarios = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, {
        headers: {
            Authorization: "isis-pedroni"
        }
    })
    .then((res) =>{
        this.setState({usuarios: res.data})
    })
    .catch((err) => {
        alert("erro")
    })

}
   
    render(){
        return(
            <div>
            <button onClick={this.props.irParaCadastro}>Indo para a cadastro</button>
            <h2>lista</h2>
        </div>
        )
    }
}