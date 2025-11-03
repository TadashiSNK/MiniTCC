import { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import './login.css'
import '../index.css'




function Login(props){


    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const navigate = useNavigate()


    const login = async () => {

//// request do login
        const response = await fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        })
        const token = await response.text()

        
        if (!response.ok){
            alert("login falhou")
            return
        }
        
        ///se o login der certo, seta o token no local storage
        localStorage.setItem("token", token);

        //redireciona pra home page
        navigate("/Home")
}


    return(
        <div className='fullPage flex-center'>
            <div className="loginBox">
                <input type='text' name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' name='senha' placeholder='Senha' onChange={(e) => setSenha(e.target.value)}></input>
                <button onClick={login}>Login</button>
                <Link to="/cadastro">Cadastre-se</Link>
            </div>
        </div>
    )
}


export default Login