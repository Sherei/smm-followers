let mongoose = require('mongoose');

let benefitSchema = mongoose.Schema({
    title:String,
    description:String,
    pic:String,
 
});

let Benefit =  mongoose.model('benefit', benefitSchema);

module.exports = Benefit;