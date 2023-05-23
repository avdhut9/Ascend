const UserModel=require("./user.model");
const express=require("express");
const argon2=require("argon2")
const jwt=require("jsonwebtoken")
const app=express.Router();

app.get("/",async(req,res)=>{
    res.send("ia m user")
})
app.post("/signup",async(req,res)=>{
    const{name,password,username}=req.body;
    console.log(name,password,username)
    try{
const hash=await argon2.hash(password);
console.log(hash)
const users=await UserModel.create({name,username,password:hash});
console.log(users)
res.send({message:"user signed up successfully"})
}catch(e){
res.send(e.message)
    }
})
app.post("/login",async(req,res)=>{
    const{username,password}=req.body;
    console.log(password)
    try{
const user=await UserModel.findOne({username});
console.log(user)
if(await argon2.verify(user.password,password)){
    const token=jwt.sign({_id:user._id,username:user.username},"avdhut@0511",{expiresIn:"7 days"})
    const refreshtoken=jwt.sign({_id:user._id,username:user.username},"avdhut$123",{expiresIn:"28 days"})
   return  res.send(res.send({message:"user login successfully",token,refreshtoken,userid:user._id,name:user.name}))
}else{
    return res.send("password does not match")
}
    }catch(e){
return res.send(e.message)
    }
})

module.exports=app