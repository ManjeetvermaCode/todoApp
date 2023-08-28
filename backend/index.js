import express from 'express'
import dotenv from 'dotenv'
import dbConfig from './connectDb.js'

const app=express()

dotenv.config()

dbConfig()

app.get('/',(req,res)=>{
    res.send('home page')
})


app.listen(3000,()=>{
    console.log('hosted on port 3000')
})