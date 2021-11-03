const vagas = require("../models/VagasModel");

const NOT_FOUND = 404;
const BAD_REQUEST = 500;

async function getAllJobs() {
    let query = await vagas.empresaModel.find();

    return Promise.resolve(query);
}

async function getByJobName(cargo) {
    const count = await vagas.empresaModel.count({"vagas.cargo" : "pedreiro"}).exec();
    console.log(count)
    
    if (count > 0) {
        const query = await vagas.empresaModel.find({"vagas.cargo" : "pedreiro"}).exec();
        return Promise.resolve(query);


    } else if (count == 0) {
        return Promise.reject(NOT_FOUND);
    }
}

async function getJobByLocation(param) {
    const count = await vagas.empresaModel.count(
        {
            "cargo": param.vaga,
            "cidade": param.cidade,
            "estado": param.estado,
        }
    ).exec();

    if (count > 0) {
        const query = await vagas.empresaModel.find(
            {
                "cargo": param.vaga,
                "cidade": param.cidade,
                "estado": param.estado
            }
        ).exec();

        console.log(query);
        return Promise.resolve(query);

    } else if (count == 0) {
        return Promise.reject(NOT_FOUND);
    }
}

module.exports = {
    getAllJobs,
    getByJobName,
    getJobByLocation,
}
