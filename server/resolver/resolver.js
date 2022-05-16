const Status = require("../model/model.js")

const resolver = {
    status: ()=>{
        //for finding all statuses
        return Status.find({})
    },
    statusByCountry: () =>{
        return Status.findOne()
    }
}

module.exports = resolver