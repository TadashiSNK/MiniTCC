import './meuPerfil.css'
import deslogar from '../utils/deslogar'
import { jwtDecode } from "jwt-decode"
import FileUploader from '../components/FileUploader'




function MeuPerfil(props){

    const token = localStorage.getItem("token")
    const userData = jwtDecode(token)
    console.log(userData)


    return(
        <div className='fullPage flex-center'>
            <img className='profile-pic' src={`/img/${userData.foto_path}`}></img>
            <p>{userData.nome_usuario}</p>
            <p>jogos</p>
            <p>musicas</p>
            <FileUploader/>
            <p>imagens</p>
            <button onClick={deslogar}>Sair</button>
        </div>
    )
}


export default MeuPerfil