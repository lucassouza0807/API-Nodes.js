const vagas = require("../models/Vagas");

const NOT_FOUND = 404 ;
const BAD_REQUEST = 500 ;

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
        return Promise.reject(NOT_FOUND);
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
        return Promise.reject(NOT_FOUND);
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
        return Promise.reject(NOT_FOUND);
    }
}

module.exports = {
    index,
    getByCargo,
    getAllByLocation,
    getByLocation
}
