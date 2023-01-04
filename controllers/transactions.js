const express = require("express")
const router = express.Router()
const data = require("../models/data.js")
const {validateObj} = require("../models/validations.js")

// get data route
router.get("/", (req, resp) => {
    resp.status(200).json(data)
})

// POST (create) route
router.post("/", validateObj, (req, resp) => {
    data.push(req.body)
    resp.status(200).json(data.at(-1))
})

// 



module.exports = router