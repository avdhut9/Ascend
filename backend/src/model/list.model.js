const mongoose=require("mongoose");

const Schema=new mongoose.Schema({
    group:{type:Number,required:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    list:[]
})
const ListModel=mongoose.model("list",Schema);
module.exports=ListModel