const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const data = require("../models/data.js")
const {validateObj, validatePut} = require("../models/validations.js")

// get data route
router.get("/", (req, resp) => {
    resp.status(200).json(data)
})

// POST (create) route
router.post("/", validateObj, (req, resp) => {
    const idValue = uuidv4()
    data.push({["id"]:idValue, ...req.body})
    resp.status(200).json(data[data.length-1])
})

// SHOW route (search for id key value)
router.get("/:id", (req, resp) => {
    const idValue = req.params.id
    const obj = data.find(({id}) => idValue === id )
    obj ? resp.status(200).json(obj) : resp.status(404).redirect("/*")
})

// DELETE ROUTE
router.delete("/:id", (req, resp) => {
    const idValue = req.params.id
    const index = data.findIndex(({id}) => idValue === id )
    if(index !== -1){
        const deletedObj = data.splice(index,1)
        resp.status(200)
    }
    else {
        resp.status(404).json({
            Error: "Invalid id Value"
        })
    } 
})

// PUT (update/edit) route
router.put("/:id", validatePut, (req, resp) => {
    const idValue = req.params.id
    const objIndex = data.findIndex(({id})=> idValue === id)
    
    if(objIndex !== -1){
        data[objIndex] = {...data[objIndex], ...req.body}
        resp.status(200).json(data[objIndex])
    }
    else{
        // resp.status(404).redirect("/*")
        resp.json(`back end delete path error`)
    }

})




module.exports = router