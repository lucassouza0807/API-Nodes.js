//modules
require("dotenv").config();

//express
const HTTP = require("http");
const express = require("express");
const app = express()

//Routes
const api = require("./src/routes/api");
const web = require("./src/routes/web");

//server 
const { hostname } = "localhost"
const server = HTTP.createServer(async (request, response) => {
    response.setHeader("Content-Type", "application/json");
	response.setHeader("access-control-allow-origin", "*");
});

app.listen(process.env.PORT, async () => {

});

app.use(web);
app.use(api);
