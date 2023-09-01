import users from "../models/userModel.js"

export const allusers=async(req,res)=>{
    const allUsers=await users.find({})
    res.status(200).json(allUsers)
}

export const user=async(req,res)=>{
    const {id}=req.params
    const user=await users.findById(id)
    res.status(200).json(user)
}