import express from 'express'
const app=express()
import dotenv from 'dotenv'
import dbConfig from './connectDb.js'
// import cors from 'cors'

import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import collectionRoutes from './routes/collectionRoutes.js'


// app.use(cors())

dotenv.config()
dbConfig()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/api/',(req,res)=>{
    res.send('home page')
})



app.use('/api/users',userRoutes)
app.use('/api/tasks',taskRoutes)
app.use('/api/collections',collectionRoutes)

app.listen(3000,()=>{
    console.log('hosted on port 3000')
})