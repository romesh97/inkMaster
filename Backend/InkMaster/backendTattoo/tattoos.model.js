const mongoose = require('mongoose');
const Schema=mongoose.Schema;

let tattoos=new Schema({
    tattoo_name:{
        type:String
    },
    tattoo_category:{
        type:String
    },
    tattoo_artist:{
        type:String
    },
});
module.exports=mongoose.model('tattoos',tattoos)