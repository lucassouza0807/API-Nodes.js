async function publishNewJob(input) {
    const newJob = new vagas.empresaModel({
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
            return Promise.resolve({ "response": "inserido com suscesso" })
        })
        .catch((error) => {
            return Promise.reject(BAD_REQUEST)

        })
}