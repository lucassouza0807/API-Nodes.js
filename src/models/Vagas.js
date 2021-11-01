const { text } = require('express');
let mongoose = require('mongoose');
let connection = require("../config");

const vagasSchema = new mongoose.Schema({
    "cargo": {
        type: String,
        required: true
    },
    "salario": {
        type: Number,
        default: 0
    },
    "exigencias": {
        type: Array,
    },
    "descricao": {
        type: String,
        required: true
    },
    "tipo_cotrato": {
        type: String,

    },
})

const empresaSchema = mongoose.Schema({
    "cnpj": {
        type: String,
        unique: true,

    },
    "nome_empresa": {
        type: String,
        required: [true, "não pode ser vazio."]
    },
    "descricao_empresa": {
        type: String
    },
    vagas: [vagasSchema]
})

let empresaModel = mongoose.model("empresa", empresaSchema);
let vagasModel = mongoose.model("vagas", vagasSchema);

module.exports = {
    empresaModel,
    vagasModel
}

