jwt = require("jsonwebtoken");

module.exports =
    async function verify(req, resp, next) {
        let token = req.headers.authorization;

        if (!token) {
            resp.sendStatus(401).json({ "message": "nenhum token foi enviado" });
        }

        let splittedToken = token.split(" ");
        let signature = splittedToken[1];

        try {
            jwt.verify(signature, process.env.API_SECRET);
            return next();

        } catch (error) {
            resp.json(error);
        }

    }