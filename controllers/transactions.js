const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const data = require("../models/data.js")
const {validateObj} = require("../models/validations.js")
router.use((req, resp, next) =>{
    console.log(uuidv4())
    req.body.id = uuidv4()
    next()
})

// get data route
router.get("/", (req, resp) => {
    resp.status(200).json(data)
})

// POST (create) route
router.post("/", validateObj, (req, resp) => {
    const idValue = uuidv4()

    data.push({["id"]:idValue, ...req.body})
    resp.status(200).json(data.at(-1))
})

// 



module.exports = router