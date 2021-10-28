const express = require("express");

let router = express();
router.use(express.urlencoded({ extended : true }));

const vagaController = require("../controllers/vagasController");


router.use(express.json());

//retorna todas as vagas disponiveis
router.get("/api/v1/vagas", (req, resp) => {
    vagaController.index()
    .then((vagas) => {
        resp.json(vagas);
    })
    .catch(() => {
        resp.sendStatus(500);
    });
});

//retorna todas as vagas especificas sem nenhum filtro
router.get("/api/v1/vagas/:vaga", (req, resp) => {
    vagaController.getByCargo(req.params.vaga)
    .then((vaga) => {
        resp.json(vaga);
    })
    .catch((error) => {
        resp.json(error);
    });
});

//retorna todas as vagas mas especificanfo só localização
router.get("/api/v1/vagas/cidade/:cidade/estado/:estado", (req, resp) => {
    vagaController.getAllByLocation(req.params)
    .then((vaga) => {
        resp.json(vaga);
    })
    .catch((error) => {
        resp.json(error)
    });
});

//retorna uma vaga em especifico com filtro de cidade e estado
router.get("/api/v1/vagas/:vaga/cidade/:cidade/estado/:estado", (req, resp) => {});


router.use((req, resp, next) => {
    if(!req.route){
        return next( resp.json(404));
    }
    next();
})

module.exports = router ;