import jwt from 'jsonwebtoken'


const secret = "essaéachaveSecreta"

function generateToken(payload) {
    return jwt.sign(payload, secret, { expiresIn: 60*60*5 })
}

function authenticate(request, response, next){
    const {header} = request.headers;

    if (!header){
        return response.status(401).send({"message": "token nao informado"})
    }

    const Bearer = header.split(' ')[0]
    const token = header.split(' ')[1]

    if(Bearer != "Bearer") {
        return response.status(401).send({"message": "token nao possui bearer"})
    }

    jwt.verify(token, secret, (err, user) => {
        if (err) return response.status(401).send({"message": "acesso nao autorizado"})
        request.user = user;
        localStorage.setItem("userToken", user)
        next()
    })
} 




export {generateToken, authenticate}