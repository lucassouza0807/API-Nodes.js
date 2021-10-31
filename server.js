//modules
require("dotenv").config();

//express
const HTTP = require("http");
const express = require("express");
const app = express()

//Routes
const public_routes = require("./api/routes/public_routes");
const auth_routes = require("./api/routes/auth_routes");

//server 
const { hostname } = "localhost"
const server = HTTP.createServer(async (request, response) => {
    response.setHeader("Content-Type", "application/json");
});


app.listen(8000, async () => {

});

app.use(auth_routes);
app.use(public_routes);
