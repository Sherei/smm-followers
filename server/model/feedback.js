let mongoose = require('mongoose');

let feedbackSchema = mongoose.Schema({
    name:String,
    email:String,
    message:String,
 
});

let Feedback =  mongoose.model('feedback', feedbackSchema);

module.exports = Feedback;