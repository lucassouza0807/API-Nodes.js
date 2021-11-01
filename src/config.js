require("dotenv").config();

const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGO_CLUSTER)
.then(() => { console.log("conectado")})
.catch((error) => {console.log(error)})