
import { use, useState } from 'react'
import './cadastro.css'
import { Link } from 'react-router-dom'





function Cadastro(){

    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()
    const [email, setEmail] = useState()
    const [confirmaSenha, setConfirmaSenha] = useState()

    const cadastrarUsuario = async () => {

            if(senha != confirmaSenha){
                alert("senha e confirmação nao sao iguais")
                return
            }

            const response = await fetch('/user/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usuario: usuario,
                    senha: senha,
                    email: email
                })
            })
            if (!response.ok){
                alert("Cadastro falhou")
                return
            }
            alert(`${usuario} cadastrado`)

}





    return(
        <div className='fullPage flex-center'>
            <div className="loginBox">
                <input type='text' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                <input type='text' name='usuario' placeholder='Seu nome' onChange={(e) => setUsuario(e.target.value)}></input>
                <input type='password' name='senha' placeholder='Senha' onChange={(e) => setSenha(e.target.value)}></input>
                <input type='password' name='confirmaSenha' placeholder='Confirme sua senha' onChange={(e) => setConfirmaSenha(e.target.value)}></input>
                <button onClick={cadastrarUsuario}>Cadastro</button>
                <Link to="/">LOGIN</Link>
            </div>
        </div>
    )
}


export default Cadastro