require("dotenv").config();

const HTTP = require("http");
const express = require("express");

//Routes
const vagas = require("./api/routes/vagas");
const app = express()

//Server settings


const server = HTTP.createServer( async (request, response) => {
    response.setHeader("Content-Type", "application/json");
});

app.listen(process.env.PORT, async () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
});

app.use(vagas);