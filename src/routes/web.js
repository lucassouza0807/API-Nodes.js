//Modules
const express = require("express");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

//Controllers
let loginController = require("../controllers/loginController");

//Express
let router = express();
router.use(express.urlencoded({ extended: true }));

router.use(express.json());

//Routes
router.post("/login", async (req, resp) => {


});


module.exports = router;