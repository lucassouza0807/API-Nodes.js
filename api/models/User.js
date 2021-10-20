require("dotenv")

let mongoose = require('mongoose')
let mongo = require("../config")

const User = mongoose.model("User", {
    "email" : {
    type : String,
    unique : [true]

    },
    "nome" : {
        type : String,
        required : true 
    }  
})

module.exports = User 
