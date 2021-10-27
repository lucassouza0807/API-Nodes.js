require("dotenv")

let mongoose = require('mongoose');
let connection = require("../config");

const teste = mongoose.model("Teste",{
    "email" : {
        type : String,
        unique : true
    },
    "senha" : { type : String }
})
 
module.exports = teste ;