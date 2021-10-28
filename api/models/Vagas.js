let mongoose = require('mongoose');
let connection = require("../config");

const Vagas = mongoose.model("vagas", {
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
        type : String,
        required : true,
    },
    "descricao" : {
        type : String,
        required : true
    },
    "contrato" : {
        type : String,
        required : true,
    },
    "salario" : {
        type : String,
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

module.exports = Vagas
