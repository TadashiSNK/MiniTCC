import deslogar from "../utils/deslogar"
import './home.css'
import { jwtDecode } from "jwt-decode"





function Home(props){

    const token = localStorage.getItem("token")
    const userData = jwtDecode(token)
    console.log(userData)
    const nome_usuario = userData.nome_usuario



    return(
        <div className="flex-center fullPage">
            <p>SEJA BEM VINDO {nome_usuario}</p>
            <button>Meu Perfil</button>
            <button>Amigos</button>
            <button>Adicionar Amigos</button>
            <button onClick={deslogar}> Sair </button>
        </div>
    )
}


export default Home