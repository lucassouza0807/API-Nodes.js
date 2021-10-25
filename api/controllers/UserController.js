const Usuario = require("../models/Usuario")

let http = require("http")

async function index(request){
 
    let usuario = new Usuario({
        "nome" : `${request.nome}`,
        "email" : `${request.email}`,
        "cpf" : `${request.cpf}`,
        //"rg" : `${request.rg}`
    })

    console.log(request.rg)
    return usuario.save()
    
    
}

module.exports = {
    index
}