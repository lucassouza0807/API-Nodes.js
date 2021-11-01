const vaga = require("../models/Vagas");

const NOT_FOUND = 404;

async function create(input) {
    const novaVaga = new vaga({
        "empresa": input.empresa,
        "cargo": input.cargo,
        "exigencias": input.exigencias,
        "contrato": input.contrato,
        "descricao": input.descricao,
        "cidade": input.cidade,
        "estado": input.estado
    });

    return novaVaga.save()
        .then(() => {
            return Promise.resolve({"response" : "inserido com suscesso"})
        })
        .catch((error) => {
            
        })
}

async function getAllJobs() {
    let query = await empresaModel.find();

    return Promise.resolve(query);
}

getAllJobs().then((e) => console.log(e));

async function getByJobName(cargo) {

    const count = await vaga.count({ "cargo": cargo }).exec();
    console.log(count);

    if (count > 0) {
        const query = await vaga.find({ "cargo": cargo }).exec();
        return Promise.resolve(query);


    } else if (count == 0) {
        return Promise.reject(NOT_FOUND);
    }
}

async function getJobByLocation(param) {
    const count = await vaga.count(
        {
            "cargo": param.vaga,
            "cidade": param.cidade,
            "estado": param.estado,
        }
    ).exec();

    console.log(count);
    if (count > 0) {
        const query = await vaga.find(
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
    create,
    getAllJobs,
    getByJobName,
    getJobByLocation,
}
