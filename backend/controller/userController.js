import users from "../models/userModel.js"
import bcypt from 'bcrypt'
import {generateToken} from "../utils/generateToken.js"

export const allUsers=async(req,res)=>{
    const allUsers=await users.find({})
    res.status(200).json(allUsers)
}

export const User=async(req,res)=>{
    const {id}=req.params
    const user=await users.findById(id).populate('collections').populate({
        path: 'collections',
        populate: {
          path: 'tasks',
        },
      })
    res.status(200).json(user)
}

export const registerUser=async(req,res)=>{
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


}

export const login=async(req,res)=>{
  const {email,password}=req.body
  try {
    const user=await users.findOne({email})
    const pass=await bcypt.compare(password,user.password)
    if(pass){
      generateToken(res,user._id)
      res.status(200).json(user._id)
    }
    else{
      res.status(406).json('Unabled to generate token')
    }
  } catch (error) {
    res.status(401).json('invalid credentials.')
  }
}

export const logout=async(req,res)=>{
    res.cookie('Jwt','',{
      httpOnly:true,
      expiresIn:new Date(0)
    })
    res.status(200).json('logged out successfully')
}

// const hashPass=await bcypt.hash(password,10)
//   console.log(hashPass)
//   const pass=await bcypt.compare('12/',hashPass)
//   console.log(pass)