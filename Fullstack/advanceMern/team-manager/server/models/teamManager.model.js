const  mongoose = require("mongoose")
//change names to fit project
const TeamManagerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [ 
            true,
            "Name is required"
        ]
    },
    preferredPosition : String,
    playerStatus : String


})

const TeamManager = mongoose.model("TeamManager", TeamManagerSchema)

module.exports = TeamManager