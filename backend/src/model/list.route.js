const ListModel=require("./list.model");
const express=require("express");

const app=express.Router();

app.post("/",async(req,res)=>{
    const{group,user,list:newlist}=req.body
    console.log(newlist)
    
    try{
listuser=await ListModel.findOne({user,group})
if(!listuser){
    let NewList=await ListModel.create({group,user,list:[newlist]});
    res.send("new list created")
}else{
let oldlist=await ListModel.findOneAndUpdate({user,group},{list:[...listuser.list,newlist]},{new:true});
res.send("added to existing list")
}
    }catch(e){
        res.send(e.message)
    }
})
app.post("/remove",async(req,res)=>{
    const{user,item,group}=req.body;
    console.log(user,item,group)
    try{
listuser=await ListModel.findOne({user,group});
if(!listuser){
    return res.send("something missed")
}else{
    const newlist=listuser.list.filter((ele)=>{
        return ele!==item
    });
    
    
    let oldlist=await ListModel.updateOne({user,group},{list:[...newlist]},{new:true});
    console.log(oldlist)
return res.send("updated")


}
    }catch(e){
return res.send.message
    }
})
app.post("/list",async(req,res)=>{
    const{user}=req.body
    console.log(user)
try{
list=await ListModel.find({user});

return res.send(list)
}catch(e){
return res.send("no data available")
}
})

module.exports=app