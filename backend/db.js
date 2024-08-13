const mongoose=require("mongoose")
const { string, boolean } = require("zod")
mongoose.connect("mongodb+srv://sumedhnavuda:%408217nvda@cluster0.evh93.mongodb.net/todo")
const todoschema=mongoose.Schema({
title: String,
description: String,
completed: Boolean   
})
const todoo=mongoose.model("todoo",todoschema)
module.exports={
    todoo
}   