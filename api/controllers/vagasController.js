const vagas = require("../models/Vagas");

async function create(){
    let novaVaga = new vagas({
        "cnpj" : "88.861.511/0001-49",
        "empresa" : "brasil park",
        "cargo" : "atendente de caixa",
        "exigencias" : "Ensino medio completo, 3 anos de experiencia, pegar até duas condução",
        "descricao" : "vai ficar no caixa",
        "contrato" : "CLT",
        "salario" : 1600.45,
        "cidade" : "Embu das Artes",
        "estado" : "SP"
    })

    return novaVaga.save().then((e) => {
        return Promise.resolve("Meu ovo")
    });
}

async function getAll() {
    let query = await vagas.find().exec();

    return Promise.resolve(query);
}

async function getByCargo(cargo) {
    let a = "atendente de caixa" ;
    const count = await vagas.count({"cargo" : new RegExp(cargo, /^/)}).exec();
    console.log(count);
    console.log("v", cargo);
    
    if(count > 0) {
        const query = await vagas.find({"cargo" : new RegExp(cargo, /^/)}).exec();
        console.log(cargo);
        return Promise.resolve(query);
        

    }else if (count == 0 ) {
        return Promise.reject({"mensagem" : "Não encontrado"});
    }
}

async function getAllByLocation(param) {
    const count = await vagas.count({
        $and: [
        {"cidade" : param.cidade},
        {"estado" : param.estado}
        ]
        }).exec();
            
    if(count > 0) {
        const query = await vagas.find({
            $and: [
            {"cidade" : param.cidade},
            {"estado" : param.estado}
            ]
            }).exec();

        return Promise.resolve(query);

    }else if (count == 0 ) {
        return Promise.reject({"mensagem" : "Não encontrado"});
    }
}

async function getByLocation(param) {
    const count = await vagas.count({
        $and: [
        {"cargo" : /^[${param.cargo}]/},
        {"cidade" : param.cidade},
        {"estado" : param.estado}
        ]
        }).exec();
            
    if(count > 0) {
        const query = await vagas.find({
            $and: [
            {"cargo" : /^[${param.cargo}]/},
            {"cidade" : param.cidade},
            {"estado" : param.estado}
            ]
            }).exec();

        return Promise.resolve(query);

    }else if (count == 0 ) {
        return Promise.reject({"mensagem" : "Não encontrado"});
    }
}

module.exports = {
    getAll,
    getByCargo,
    getAllByLocation,
    getByLocation
}
