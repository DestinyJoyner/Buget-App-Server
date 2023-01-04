const data = require("./data.js")


const validateObj = (req, resp, next) => {
    const item = req.body.itemName
    const amount = req.body.amount
    const date = req.body.date
    const from = req.body.from
    const category = req.body.category

    // Check that incoming object doesn't have foreign keys
    const acceptedKeys = Object.keys(data[0])

   let invalidKey;
    for (let key in req.body){
        if(!acceptedKeys.includes(key)){
           invalidKey = key
        }
    }
    if(invalidKey){
        resp.status(404).json({
        Error: `${invalidKey} is an Incorrect Property`
    })
    }
    // Check that incoming obj has all accepted keys
    else if(!item || !amount || !date || !from || !category){
        resp.status(404).json({
            Error: "Please Check Request Body For Missing or Incomplete Values"
        })
    }
    // Check that incoming obj's accepted keys have accepted value types
    else if(
        typeof item !== "string" ||
        typeof amount !== "number" ||
        typeof date !== "string" ||
        typeof from !== "string" ||
        typeof category !== "string"){
            resp.status(404).json({
                Error: "Please Check Request Body Values For Correct Data Types"
            })
        }
    else{
        next()
    }
}


module.exports = {
    validateObj,
}