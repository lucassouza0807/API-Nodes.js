//modules
const express = require("express");
const session = require("express-session");
const jwt_decode = require('jwt-decode');
const jwt = require("jsonwebtoken");

//Controllers
const VagaController = require("../controllers/jobController");
const LoginController = require("../controllers/loginController");

//middlewares
const verfyTokenMiddleware = require("../middlewares/verifyTokenMiddleware");

//Express
let router = express();

router.use(express.urlencoded({ extended: true }));

router.use(express.json());
router.use(session({
    secret: process.env.API_SECRET,
    resave: true,
    saveUninitialized: false
}))


//Routes
router.post("/api/login", verfyTokenMiddleware, (req, resp) => {
    let token = req.headers["authorization"];
    LoginController.login(token)
        .then(() => {
            resp.json({ "message": "logado com suscesso" })
        })

});

router.get("/api/v1/vagas/:vaga", (req, resp) => {
    vagaController.getByJobName(req.params.vaga)
        .then((vagas) => {
            resp.json(vagas);
        })
        .catch((status) => {
            resp.send(status);
        });
});

router.get("/api/v1/vagas/:vaga/cidade/:cidade/estado/:estado", (req, resp) => {
    vagaController.getJobByLocation(req.params)
        .then((vagas) => {
            resp.json(vagas)
        })
        .catch((status) => {
            resp.send(status);
        });

})


router.get("/teste", (req, resp, next) => {
    console.log(req.sessionID);
});
//not found handler
router.use((req, resp, next) => {
    if (!req.route) {
        return next(resp.sendStatus(404));
    }
    next();
})


module.exports = router;