const mongoose=require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');
const userSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String
    }
});
userSchema.plugin(uniqueValidator)
const users=mongoose.model('users',userSchema);
module.exports=users;