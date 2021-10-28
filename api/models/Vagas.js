let mongoose = require('mongoose');
let connection = require("../config");

const vagas = mongoose.model("vagas", {
    "empresa" : {
        type : String,
        required : true
    },
    "cargo" : {
        type : String,
        required : true,
        lowercase : true
    },
    "exigencias" : {
        type : Array,
        required : true
    }
    ,
    "descricao" : {
        type : String,
        required : true
    },
    "contrato" : {
        type : String,
        required : true,
    },
    "salario" : {
        type : Number,
        default : "A combinar",
    },
    "cidade" : {
        type : String,
        lowercase : true
    },
    "estado" : {
        type : String,
        lowercase : true
    }
})

module.exports = vagas
