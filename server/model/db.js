
let mongoose = require('mongoose');

try {

mongoose.connect('mongodb+srv://Sharjeel:11@cluster0.tingzld.mongodb.net/?retryWrites=true&w=majority').then(function (connect) {
        console.log(connect);
    })

} catch (e) {

    console.log(e);

}

