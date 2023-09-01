import tasks from "../models/taskModel.js"

export const allTasks=async(req,res)=>{
    const todos=await tasks.find({})
    res.status(200).json(todos)
}






