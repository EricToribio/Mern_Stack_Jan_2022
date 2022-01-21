const  mongoose = require("mongoose")
//change names to fit project
const AuthorsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [
            true ,
            "Name is required"
        ]
    }
},{ timestamps : true})

const Authors = mongoose.model("Authors", AuthorsSchema)

module.exports = Authors