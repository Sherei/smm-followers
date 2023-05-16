let mongoose = require('mongoose');

let faqSchema = mongoose.Schema({
    title:String,
    description:String
 
});

let Faq =  mongoose.model('faq', faqSchema);

module.exports = Faq;