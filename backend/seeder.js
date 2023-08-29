import mongoose from "mongoose";
import usersData from './data/user.js'
import tasksData from "./data/tasks.js";
import Task from "./models/taskModel.js";
import User from './models/userModel.js'
import dotenv from 'dotenv'
import configDb from "./connectDb.js";

dotenv.config()
configDb()


const insertData=async()=>{
    try {
        await User.deleteMany()
        await Task.deleteMany()

        const userData=await User.insertMany(usersData)
        console.log(userData)
        const taskData=await Task.insertMany(tasksData)
        console.log(taskData)

        console.log('data inserted successfully')
        process.exit(0)
    } catch (error) {
        console.log('somthing went wrong 1',error)
        process.exit(1)
    }
}

const removeData=async()=>{
    try {
        await User.deleteMany()
        await Task.deleteMany()
        console.log('data removed successfully for DB')
        process.exit(0)
    } catch (error) {
        console.log('something went wrong 2')
    }
}

process.argv[2]=='-d'?removeData():insertData()