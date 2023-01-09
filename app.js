const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use(function(req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
})
app.use("/transactions", require("./controllers/transactions.js"))


// Routes
app.get("/", (req, resp) => {
    resp.status(200).send("<h1>Budget App Server</h1><p>endpoints: /transactions")
})

app.get("*", (req, resp) => {
    resp.status(404).json({
        Error: "Page Not Found"
    })
})

module.exports = app