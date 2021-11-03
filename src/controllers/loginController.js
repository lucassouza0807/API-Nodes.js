const { default: jwtDecode } = require("jwt-decode");
bcrypt = require("bcryptjs");
let session = require("express-session");

let Usuario = require("../models/usuariosModel");

async function login(token) {
    let decodedToken = jwtDecode(token);
    let email = decodedToken['email'];
    let senha = decodedToken['senha'];

    let count = await Usuario.count({ "email": email }).exec();

    if (count == 0) {
        return Promise.reject("Email ou usuarios não existe.");
    }

    let query = await Usuario.findOne({ "email": email });
    
    if (senha == query.senha) {
        let sessionParams = {
            "expTime" : 16000,
            "sessionToken" : token
        }

        return Promise.resolve(sessionParams);
        
    } else if (senha !== query.senha) {
        return Promise.reject("Senha errada");
    }

}

module.exports = {
    login
}
