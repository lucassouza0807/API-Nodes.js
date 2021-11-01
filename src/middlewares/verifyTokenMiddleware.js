let token = req.headers.authorization;

    if (!token) {
        return resp.sendStatus(401).json({ auth: false, message: "Nenhum token foi enviado" });
    }

    let splitedToken = token.split(" ");

    let signature = splitedToken[1];

    try {
        jwt.verify(signature, process.env.API_SECRET);
    } catch (e) {
        console.log(e);
    }
