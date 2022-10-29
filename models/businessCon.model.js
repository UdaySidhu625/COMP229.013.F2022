
let mongoose = require('mongoose');


let businessConModel = mongoose.Schema(
    {
        lastName: String,
        firstName: String,
        email:String,
        phone: String
         
       
    },
    {
        collection: "businessCon"
    }
);

module.exports = mongoose.model('BusinessCon', businessConModel);