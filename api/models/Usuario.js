require("dotenv")

let mongoose = require('mongoose');
let connection = require("../config");

const Usuario = mongoose.model("Usuarios",{
   "nome" : {
      required : [true,  "O campo cpf é  não pode ser vazio ."],
      type : String
     },
   "email" : {
      type : String,
      unique  : true,
      required : [true , 'O campo Email não pode ser vazio .'],
     },
   "rg" : {
      type : String,
      unique : true,
   },
   "cpf" : {
      type : String ,
      unique : true,
      required : [true, "O campo CPF não pode ser vazio."],
      validate : {
         validator : (fieldName) => {
            return /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(fieldName);
         },
         message : props => `O campo ${props.path} não está no formato correto o formato correto é 000.000.000-00 .\n`
        }
     },
     //O campo de endereço não vai ser obrigatorio
   "endereco" : {
      "logradouro" : { type : String },
      "numero" : { type : String },
      "cep" : { type : String },
      "bairro" : { type : String },
      "cidade" : { type : String },
      "estado" : { type : String }
   },
});


module.exports = Usuario ;