jwt = require("jsonwebtoken");

module.exports =
    async function verify(req, resp, next) {
        let token = req.headers.authorization;

        if (!token) {
            resp.sendStatus(401);
        } else {
            return next();
        }
    }