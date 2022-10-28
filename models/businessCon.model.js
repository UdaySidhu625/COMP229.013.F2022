
let mongoose = require('mongoose');

// Create a model class
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