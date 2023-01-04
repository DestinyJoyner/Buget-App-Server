const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/transactions", require("./controllers/transactions.js"))

// Routes
app.get("/", (req, resp) => {
    resp.status(200).send("Budget App Server")
})

app.get("*", (req, resp) => {
    resp.status(404).json({
        Error: "Page Not Found"
    })
})

module.exports = app