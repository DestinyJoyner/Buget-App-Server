const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const data = require("../models/data.js")
const {validateObj} = require("../models/validations.js")

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

// SHOW route (search for id key value)
router.get("/:id", (req, resp) => {
    
})




module.exports = router