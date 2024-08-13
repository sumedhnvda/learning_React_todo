const zod=require("zod")
const createtodo=zod.object({
    title:zod.string(),
    description:zod.string()
})
const Completetodo=zod.object({
    id:zod.string()

})

module.exports={
    createtodo:createtodo,
    Completetodo: Completetodo
}