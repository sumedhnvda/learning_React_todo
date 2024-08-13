const express=require("express")
const { createtodo, Completetodo } = require("./types")
const { todoo } = require("./db")
const cors=require("cors");
const app=express()
app.use(express.json())
app.use(cors({}))
app.post("/todo",async (req,res)=>{
    const createtodocontent=req.body
    const pasredtodocontent=createtodo.safeParse(createtodocontent)
    if(!pasredtodocontent.success){
        return res.status(411).send("invalid data format")
    }
    await todoo.create({
        title:createtodocontent.title,
        description:createtodocontent.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })

})
app.get("/todo",async (req,res)=>{
    const dataintodo=await todoo.find()
    res.json({
        dataintodo
    })
})
app.put("/complete",async (req,res)=>{
    const getidoftodo=req.body
    const parsedidoftodo=Completetodo.safeParse(getidoftodo)
    if(!parsedidoftodo.success){
        return res.status(411).send("invalid data format")
    }
    await todoo.findByIdAndUpdate(getidoftodo.id,{completed:true})
    res.json({
        msg:"todo is updated"
    })
})
app.listen(3000,()=>{
    console.log("app running on port 3000");    
})

