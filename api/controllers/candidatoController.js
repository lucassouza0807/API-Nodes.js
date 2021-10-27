const Usuario = require("../models/Usuario")
let bycript = require("bcryptjs");
const Usuarios = require("../models/Usuario");

async function create(request){

    let salts = bycript.genSaltSync(10);
    let hashedPassword = bycript.hashSync(request.senha, salts);
 
    let usuario = new Usuarios({
        "nome" : request.nome,
        "email" : request.email,
        "cpf" : request.cpf,
        "senha" : hashedPassword,
        "endereco" : {
            "logradouro" : request.endereco.logradouro,
            "numero" : request.endereco.numero,
            "cep" : request.endereco.cep,
            "bairro" : request.endereco.bairro,
            "cidade" : request.endereco.cidade,
            "estado" : request.endereco.estado,
        }
    })
    
    
    return usuario.save()
    .then(() => {
        return Promise.resolve("Usuario cadastrado com suscesso");
    })
    .catch( (error) => {       
        if (error.code == "11000") {
            return Promise.reject({"response" : "O Email or CPF já estão em uso."});
        }

        if (error.name == "ValidationError") {
            let errorMessage = error.message.replace("usuarios validation failed: ", "");
            let messageArray = errorMessage.split(", ") ;
            
            return Promise.reject(messageArray);
        }
    })
 
}


async function getByEmail(email){
    let count = await Usuarios.count({"email" : email}).exec();

    if (count => 1) {
        let query = await Usuarios.findOne({"email" : email});
        return Promise.resolve(query);
    }else if (count == 0) {
        
    }

}

getByEmail("lucassouza0807@gmail.com")
.then((e) => { 
    console.log(e)
})
.catch((r) => {
    console.log(r)
})

module.exports = {
    create,
    getByEmail
}

