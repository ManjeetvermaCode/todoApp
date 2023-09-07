import tasks from "../models/taskModel.js"
import asyncHandler from "../middlewares/asynchandler.js"


export const allTasks=asyncHandler(
    async(req,res)=>{
        const todos=await tasks.find({})
        res.status(200).json(todos)
    }
)

export const createTask=asyncHandler(
    async(req,res)=>{
        const alldata=req.body
        // const newTask=await tasks.insertMany(alldata)
        
    }
)






