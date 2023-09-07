import express from 'express'
const app=express()
import dotenv from 'dotenv'
import dbConfig from './connectDb.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { notFound,errorHandler } from './middlewares/errorHandler.js'

import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import collectionRoutes from './routes/collectionRoutes.js'



dotenv.config()
dbConfig()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser())

app.get('/api/',(req,res)=>{
    res.send('home page')
})



app.use('/api/users',userRoutes)
app.use('/api/tasks',taskRoutes)
app.use('/api/collections',collectionRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(3000,()=>{
    console.log('hosted on port 3000')
})