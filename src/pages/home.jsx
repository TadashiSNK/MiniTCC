import deslogar from "../utils/deslogar"
import './home.css'
import { jwtDecode } from "jwt-decode"
import meuPerfil from './meuPerfil'


import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'



function Home(props){

    const token = localStorage.getItem("token")
    const userData = jwtDecode(token)
    console.log(userData)
    const nome_usuario = userData.nome_usuario



    return(
        <div className="flex-center fullPage">
            <p>SEJA BEM VINDO {nome_usuario}</p>
            <Link to="/meuPerfil">Meu Perfil</Link>
            <button>Amigos</button>
            <button>Adicionar Amigos</button>
            <button onClick={deslogar}> Sair </button>
        </div>
    )
}


export default Home