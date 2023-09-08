import users from "../models/userModel.js"
import asyncHandler from "../middlewares/asynchandler.js"
import bcypt from 'bcrypt'
import {generateToken} from "../utils/generateToken.js"

export const allUsers=asyncHandler(
  async(req,res)=>{
    const allUsers=await users.find({}).populate('tasks').populate('CreatedBy')
    res.status(200).json(allUsers)
}
)

export const User=asyncHandler(
  async(req,res)=>{
    try {
      const {id}=req.params
    const user=await users.findById(id).populate('tasks').populate('CreatedBy')
    res.status(200).json(user)
    } catch (error) {
      res.status(404)
      throw new Error('User Not Found')
    }
}
)

export const registerUser=asyncHandler(
  async(req,res)=>{
    try {
      const {username,password,email}=req.body
    const existingUser=await users.findOne({email})
  
    if(existingUser){
    //  return res.status(401).send('email already exist')
    console.log('user already exist')
    }
    const hashpass=await bcypt.hash(password,10)
    const user= await users.create({username,password:hashpass,email})
  
    generateToken(res,user._id)
  
    res.status(200).json(user._id)
    } catch (error) {
      res.status(404)
      throw new error('Failed to register User')
    }
  
  
  }
)

export const login=asyncHandler(
  async(req,res)=>{
    const {email,password}=req.body
    try {
      const user=await users.findOne({email})
      const pass=await bcypt.compare(password,user.password)
      if(pass){
        generateToken(res,user._id)
        res.status(200).json(user._id)
      }
      else{
        res.status(401)
        throw new Error('invalid Credentials')
      }
    } catch (error) {
      res.status(401)
      throw new Error('invalid credentials')
    }
  }
)

export const logout=asyncHandler(
  async(req,res)=>{
    res.cookie('Jwt','',{
      httpOnly:true,
      expiresIn:new Date(0)
    })
    res.status(200).json('logged out successfully')
}
)

// const hashPass=await bcypt.hash(password,10)
//   console.log(hashPass)
//   const pass=await bcypt.compare('12/',hashPass)
//   console.log(pass)