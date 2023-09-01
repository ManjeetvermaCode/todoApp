import express from 'express'
const app=express()
import dotenv from 'dotenv'
import dbConfig from './connectDb.js'
// import cors from 'cors'

import tasks from './models/taskModel.js'
import users from './models/userModel.js'

// app.use(cors())

dotenv.config()
dbConfig()

app.get('/api/',(req,res)=>{
    res.send('home page')
})

app.get('/api/tasks',async(req,res)=>{
    const allTasks=await tasks.find({})
    res.status(200).json(allTasks)

})

app.get('/api/users',async(req,res)=>{
    const allUsers=await users.find({})
    res.status(200).json(allUsers)

})
app.get('/api/users/:id',async(req,res)=>{
    const {id}=req.params
    const user=await users.findById(id)
    res.status(200).json(user)

})




app.listen(3000,()=>{
    console.log('hosted on port 3000')
})