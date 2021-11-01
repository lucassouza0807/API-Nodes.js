let mongoose = require('mongoose');
let connection = require("../config");

const vagas = mongoose.model("vagas", {
    "empresa": {
        type: String,
        required: [true, "não pode ser vazio."]
    },
    "cargo": {
        type: String,
        required: [true, "não pode ser vazio."],
        lowercase: true
    },
    "exigencias": {
        type: Array,
        required: [true, "não pode ser vazio."],
    }
    ,
    "descricao": {
        type: String,
        required: [true, "não pode ser vazio."],
    },
    "contrato": {
        type: String,
        required: [true, "não pode ser vazio."],
    },
    "salario": {
        type: Number,
        default: "A combinar",
    },
    "cidade": {
        type: String,

    },
    "estado": {
        type: String,

    }
})

module.exports = vagas
