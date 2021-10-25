require('dotenv').config()

let mongoose = require("mongoose")

const database_env = process.env.MONGO_CONN

const { connection } =  mongoose.connect(database_env).then( () => console.log("conectado")).catch( (error) => { console.log("Erro:", error)})

module.exports = connection
