import express from 'express'
const app=express()
import dotenv from 'dotenv'
import dbConfig from './connectDb.js'
// import cors from 'cors'

import tasks from './models/taskModel.js'
import users from './models/userModel.js'


dotenv.config()
dbConfig()
// app.use(cors())
// // app.use(express.static(path.join(__dirname, '/frontend/dist')));

// app.get('*', (req, res) =>
//   res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
// );

app.get('/api/',(req,res)=>{
    res.send('home page')
})

app.get('/api/tasks',async(req,res)=>{
    const allTasks=await tasks.find({})
    res.status(200).json(allTasks)

})

app.get('/api/users',async(req,res)=>{
    const allUsers=await users.find({}).populate('tasks')
    res.status(200).json(allUsers)

})




app.listen(3000,()=>{
    console.log('hosted on port 3000')
})