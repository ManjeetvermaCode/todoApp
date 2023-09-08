import tasks from "../models/taskModel.js"
import asyncHandler from "../middlewares/asynchandler.js"


export const allTasks=asyncHandler(
    async(req,res)=>{
        try {
            const todos=await tasks.find({})
        res.status(200).json(todos)
        } catch (error) {
            res.status(404)
            throw new Error('Tasks not found')
        }
    }
)

export const createTask=asyncHandler(
    async(req,res)=>{
        const alldata=req.body
        // const newTask=await tasks.insertMany(alldata)
        
    }
)






