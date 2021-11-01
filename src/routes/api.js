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
router.get("/api/v1/vagas", (req, resp) => {
    vagaController.getAllJobs()
        .then((vagas) => {
            resp.json(vagas);
        })
        .catch((status) => {
            resp.sendStatus(404);
        });

});

router.get("/api/v1/vagas/:vaga", (req, resp) => {
    vagaController.getByJobName(req.params.vaga)
        .then((vagas) => {
            resp.json(vagas);
        })
        .catch((status) => {
            resp.sendStatus(status);
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

//not found handler
router.use((req, resp, next) => {
    if (!req.route) {
        return next(resp.sendStatus(404));
    }
    next();
})


module.exports = router;