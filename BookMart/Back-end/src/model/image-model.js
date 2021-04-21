const mongoose=require('mongoose');
const { title } = require('process');
const imageSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imagePath:{
        type:String,
        required:true
    }
});
const imageModel=mongoose.model('imageModel',imageSchema);
module.exports=imageModel;