const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())


// Routes
app.get("/", (req, resp) => {
    resp.send("Budget App Server")
})

module.exports = app