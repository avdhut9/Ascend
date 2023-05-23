const mongoose=require("mongoose");

const Schema=new mongoose.Schema({
    name:{
        type:String,required:true
    },
    username:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,required:true,unique:true
    }
})
const UserModel=mongoose.model("user",Schema);
module.exports=UserModel