require("dotenv").config();
const express=require("express");
const cors=require("cors");
const PORT=process.env.PORT||8080;
const connect=require("./src/config/connect")
const users=require("./src/model/user.route")
const lists=require("./src/model/list.route");



const app=express();
app.use(express.json())
app.use(cors())
app.use("/users",users)
app.use("/lists",lists)
app.get("/",async(req,res)=>{
    res.send("ok")
})

app.listen(PORT,async()=>{
    await connect();
    console.log("started")
})



