import tasks from "../models/taskModel.js"

export const allTasks=async(req,res)=>{
    const todos=await tasks.find({})
    res.status(200).json(todos)
}

export const createTask=async(req,res)=>{
    const alldata=req.body
    // const newTask=await tasks.insertMany(alldata)
    
}






