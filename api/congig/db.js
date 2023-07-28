const mongoose = require("mongoose")

const URL = "mongodb+srv://mayanktrad365:mayank123@cluster0.pvjtj8k.mongodb.net/?retryWrites=true&w=majority"

const connection = () =>{
    mongoose.connect(URL).then(()=> console.log("DB connected")).catch((err)=> console.log(err, "Problem In Connecting"))
}

module.exports = connection ;