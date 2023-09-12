import tasks from "../models/taskModel.js"
import asyncHandler from "../middlewares/asynchandler.js"
import collections from "../models/collectionModel.js"
import mongoose from "mongoose"


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
        try {
            console.log(req.body)
            const {id,title,description,dueDate,priority}=req.body
            // const newtask=await tasks.create({title,description,dueDate,priority})
            const taskId=newtask._id
            const spec_collection=await collections.findByIdAndUpdate(id,{$push:{tasks:taskId}})
            console.log(spec_collection)
        } catch (error) {
            res.status(304)
            throw new Error('unable to add task')
        }
       
       
    }
)






