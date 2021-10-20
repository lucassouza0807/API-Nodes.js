const User = require("../models/Usuario")

async function registerNewUser(inputData = {}){

    const user = await new User({
        "email" : inputData.nome,
        "nome" : inputData.email
    })

    user.save()
            .then( () => console.table({"Message: ": "Sucess"}))
            .catch( (error_info) => console.table({"Error details :" : error_info}))
}

async function deleteUser(){}

async function updateUser(){}

module.exports = {
    registerNewUser,
    deleteUser,
    updateUser
}