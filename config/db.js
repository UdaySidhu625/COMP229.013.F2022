let atlasDB="mongodb+srv://dbuser:e5W8QNopFbuWlhVA@cluster018.mit4nng.mongodb.net/?retryWrites=true&w=majority"

let mongoose = require('mongoose');

module.exports = function(){

    // Connect to the database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('==== Connected to MongoDB ====');
    });

    return mongodb;
}