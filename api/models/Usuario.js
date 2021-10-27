require("dotenv")

let mongoose = require('mongoose');
let connection = require("../config");

const usuario = mongoose.model("usuarios",{
   "nome" : {
      required : [true, "O campo nome é obrigatório."],
      type : String,
     },
   "email" : {
      type : String,
      unique  : true,
      required : [true, "O campo Email é obrigatório."]
   },
   "cpf" : {
      type : String ,
      unique : true,
      required : [true, "O campo cpf é obrigatório."],
     },
   "senha" : {
      type : String,
      required : [true, "O campo senha é obrigatório."] 
   },
   "endereco" : {
      "logradouro" : { type : String },
      "numero" : { type : String },
      "cep" : { type : String },
      "bairro" : { type : String },
      "cidade" : { type : String },
      "estado" : { type : String }
   },
});


module.exports = usuario ;