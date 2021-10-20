const express = require("express")

let router = express.Router()

router.get('/home', async (req, res) => {
    res.json({
        "msg" : "response"
    })
})

console.log("Router api loaded")

module.exports = router
