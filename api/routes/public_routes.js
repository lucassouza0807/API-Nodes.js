//modules
const express = require("express");
const jwt_decode = require('jwt-decode');

//Controllers
const vagaController = require("../controllers/vagasController");

//Express
let router = express();
router.use(express.urlencoded({ extended: true }));

router.use(express.json());

//Routes

router.get("/teste", (req, resp) => {
    resp.send(req.query.nome);
})
router.get("/api/v1/vagas", (req, resp) => {
    vagaController.index()
        .then((vagas) => {
            resp.json(vagas);
        })
        .catch(() => {
            resp.sendStatus(404);
        });

});

router.get("/api/v1/vagas/:vaga", (req, resp, next) => {
    vagaController.getByCargo(req.params.vaga)
        .then((vaga) => {
            resp.json(vaga);
        })
        .catch(() => {
            resp.sendStatus(404);
        });
});

router.get("/api/v1/vagas/cidade/:cidade/estado/:estado", (req, resp) => {
    vagaController.getAllByLocation(req.params)
        .then((vaga) => {
            resp.json(vaga);
        })
        .catch((error) => {
            resp.sendStatus(404)
        });
});

router.get("/api/v1/vagas/:vaga/cidade/:cidade/estado/:estado", (req, resp) => { });


//not found handler
router.use((req, resp, next) => {
    if (!req.route) {
        return next(resp.json(404));
    }
    next();
})


module.exports = router;