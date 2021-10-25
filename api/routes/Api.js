const e = require("express");
const express = require("express");

let router = express();
router.use(express.urlencoded({ extended : true }));

router.use(express.json());
const registerController = require("../controllers/UserController");

router.post("/post", (req, resp) => {
    registerController.create("s", "#");
})

router.post("/post/user", (req, resp) => {
    registerController.index(req.body)
                      .then(() => {
                          resp.json({"mensagem" : "Usuario cadastrado com suscesso"})
                      })
                      .catch((err) => {
                          resp.json({"mensagem" : err.message})
                      })

})
router.post('/api/v1/user/post', () => {

});



module.exports = router ;