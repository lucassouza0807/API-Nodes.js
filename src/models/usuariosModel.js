let mongoose = require('mongoose');
let connection = require("../config");

const Usuario = mongoose.model("usuarios", {
    "nome": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "senha": {
        type: String,
        required: true
    },
})

module.exports = Usuario