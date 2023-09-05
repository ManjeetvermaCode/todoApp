import users from "../models/userModel.js"
import bcypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

  const token=jwt.sign({UserId:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
  res.cookie('Jwt',token,{
    httpOnly:true,
    secure:false,
    samesite:'none',
    maxAge:7*60*60*24*1000
  })

  res.status(200).send({user})


}




// const hashPass=await bcypt.hash(password,10)
//   console.log(hashPass)
//   const pass=await bcypt.compare('12/',hashPass)
//   console.log(pass)