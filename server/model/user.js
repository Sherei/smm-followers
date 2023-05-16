let mongoose = require('mongoose');

let userKaSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
 
});

let Users =  mongoose.model('user', userKaSchema);

module.exports = Users;