const vagas = require("../models/vagas");

async function create(){
    let novaVaga = new vagas({
        "cnpj" : "83.245.361/0001-25",
        "empresa" : "joão peão ltda",
        "cargo" : "pedreiro",
        "exigencias" : ["Ensino fudamental", "CHN B", "Experiencia de 1 ano"],
        "descricao" : "Vai bater laje, carregar cimento nas costas, comer marmita boa, assuviar pra mulher na rua, levantar parede etc",
        "contrato" : "CLT, pj",
        "salario" : 2200.00,
        "cidade" : "Guarulhos",
        "estado" : "SP"
    })

    return novaVaga.save().then((e) => {
        return Promise.resolve("Meu ovo")
    });
}

async function index() {
    let query = await vagas.find().exec();

    return Promise.resolve(query);
}

async function getByCargo(cargo) {
    
    const count = await vagas.count({"cargo" : cargo}).exec();
    console.log(count);
 
    if(count > 0) {
        const query = await vagas.find({"cargo" : cargo}).exec();
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
    console.log(count);
            
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
        {"cargo" : param.cargo},
        {"cidade" : param.cidade},
        {"estado" : param.estado}
        ]
        }).exec();
            
    if(count > 0) {
        const query = await vagas.find({
            $and: [
            {"cargo" : param.cargo},
            {"cidade" : param.cidade},
            {"estado" : param.estado}
            ]
            }).exec();

        return Promise.resolve(query);

    }else if (count == 0 ) {
        return Promise.reject({"mensagem" : "Não encontrado"});
    }
}

create();

module.exports = {
    index,
    getByCargo,
    getAllByLocation,
    getByLocation
}
