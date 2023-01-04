const express = require("express")
const router = express.Router()
const data = require("../models/data.js")


// ROUTES FOR /transactions
router.get("/", (req, resp) => {
    resp.json(data)
})



module.exports = router