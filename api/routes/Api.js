const express = require("express")

let router = express.Router()

//
router.get('/api/v1/user/:user', async (req, res, next) => {
    res.json({
        "user" : req.params.user
    })
})

console.log("Router api loaded")

module.exports = router
