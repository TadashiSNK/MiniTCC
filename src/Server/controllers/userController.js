import express from 'express'
import {AppDataSource} from '../database/data-source.js'
import usersEntity from '../entities/users.js'
import { generateToken } from '../../utils/jwt.js'
import multer from 'multer'
import { jwtDecode } from 'jwt-decode'








const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, 'K:\\Secundária\\Repeat_Client\\Escola\\miniTCC\\public\\img')
    },
    filename: function (req, file, cb) {
    try {
        // extrai e decodifica o token
        const authHeader = req.headers.authorization;
        if (!authHeader) return cb(new Error("No authorization header"));
        
        const token = req.headers.authorization
        const decoded = jwtDecode(token);
        const userId = decoded.id_usuario;

        // salva o arquivo
        cb(null, `${userId}.jpg`);
    } catch (err) {
        cb(err);
    }
    },
});

const route = express.Router()
const pastaFotos = multer({storage})






const userRepository = AppDataSource.getRepository(usersEntity)


///rota de upload de imagem
route.post("/upload", pastaFotos.single('foto'), async (req,res) => {

    const token = req.headers.authorization
    const decoded = jwtDecode(token);
    const userId = decoded.id_usuario;


    await userRepository.update(
    { id_usuario: userId }, { foto_path: `${userId}` });

    console.log(req.file)
    res.json(req.file)
})

///ROTA DE CADASTRO
route.post("/cadastro", async (request, response) => {
    
    const {usuario, email, foto_path,  senha} =  request.body

    const novoUsuario = userRepository.create({nome_usuario: usuario, email_usuario:email, foto_path:foto_path, senha_usuario: senha})
    await userRepository.save(novoUsuario)
    response.status(200).send()


})



///ROTA DE LOGIN
route.post("/login", async (req, res) => {
    const {email,  senha} =  req.body
    
    if(email == null || senha == null){
        res.status(500).send("informe todos os campos")
        return
    }
    const dadosDoBanco = await userRepository.findOneBy({email_usuario: email})
    console.log(dadosDoBanco, email, senha)

    try{
        if (dadosDoBanco.senha_usuario == senha){
            const token = generateToken({
                "nome_usuario": dadosDoBanco.nome_usuario,
                "id_usuario": dadosDoBanco.id_usuario,
                "email": dadosDoBanco.email_usuario,
                "foto_path": `${dadosDoBanco.foto_path}`
                                        })
            console.log("acertou") 
            console.log(token)

            res.json({"token":token})
        }
    }
    catch(err){
        console.log(err)
    }

})





export default route