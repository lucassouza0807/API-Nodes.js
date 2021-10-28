const HTTP = require("http")
const express = require("express")

//Routes
const vagas = require("./api/routes/vagas")
const app = express()

//Server settings
const HOSTNAME = "127.0.0.1" ;
const PORT = 80 ;


const server = HTTP.createServer( async (request, response) => {
    response.setHeader("Content-Type", "application/json");
});

app.listen(PORT, async () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
});

app.use(vagas)