const e = require("express");
const express = require("express");

let router = express();
router.use(express.urlencoded({ extended : true }));

router.use(express.json());
const registerController = require("../controllers/candidatoController");

router.get("/user/:email", (req, resp) => {
    registerController.getByEmail(req.params.email);
});

router.post("/post/user", (req, resp) => {
    registerController.create(req.body)
    .then((sucess) => { 
        resp.send(sucess)
     })
    .catch((error) => {
        console.log(req.body);
        resp.json({"response" : error});
        
    });                  
})
router.post('/api/v1/user/post', () => {

});



module.exports = router ;