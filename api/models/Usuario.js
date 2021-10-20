require("dotenv")

let mongoose = require('mongoose')
let mongo = require("../config")

const Usuario = mongoose.model("Usuario", {
    "nome" : {
        required : [true, "O campo nome não pode ser vazio."],
        type : String
     },
     "email" : {
        type : String,
        required : true,
        unique  : true,
     },
     "cpf" : {
        type : String ,
        unique : true,
        required : true,
        validate : {
          validator : (fieldName) => {
             return /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(fieldName)
          },
          message : props => `${props.value} Formato do cpf não é valido o formato é 000.000.000-00`
        }
     },
     "RG" : {
        type : String,
        required : true,
        unique : true
     },
     "endereco" : {
        "logradouro" : {
            type : String,
            required : true
        },
        "numero" : {
           type : String,
           required : true
        },
        "cep" : {
            type : String,
            required : true
        },
        "bairro" : {
            type : String,
            required :true
        },
     }

})

module.exports = Usuario 