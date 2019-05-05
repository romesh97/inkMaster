const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tattoos = new Schema({
    tattoos_Date : {
        type: String
    },

    tattoos_Time: {
        type : String
    },

    tattoos_Notes: {
        type : String
    }
});
    module.exports = mongoose.model('Tattoos', Tattoos);