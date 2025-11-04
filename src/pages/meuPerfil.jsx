import './meuPerfil.css'
import deslogar from '../utils/deslogar'
import { jwtDecode } from "jwt-decode"
import FileUploader from '../components/FileUploader'
import { use } from 'react'




function MeuPerfil(props){

    const token = localStorage.getItem("token")
    const userData = jwtDecode(token)
    console.log(userData)
    let foto_path = userData.foto_path;
    if (userData.foto_path == ""){
        foto_path = "default"
    }
    else if(!userData.foto_path.includes(".jpg")){
        foto_path = `${userData.id_usuario}.jpg`
    }

    return(
        <div className='fullPage flex-center'>
            <img className='profile-pic' src={`/img/${foto_path}`}></img>
            <p>{userData.nome_usuario}</p>
            <p>AAAA {foto_path}</p>
            <p>jogos</p>
            <p>musicas</p>
            <FileUploader/>
            <p>imagens</p>
            <button onClick={deslogar}>Sair</button>
        </div>
    )
}


export default MeuPerfil