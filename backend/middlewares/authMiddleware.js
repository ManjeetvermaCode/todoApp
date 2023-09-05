import jwt from "jsonwebtoken"
import Users from '../models/userModel.js'

export const isUser=async(req,res,next)=>{
    let token=req.cookies.Jwt
    console.log(token)
    if(token){
        try {
            const {UserId}=jwt.verify(token,process.env.JWT_SECRET)
        req.user=await Users.findById(UserId).select('-password')   
        console.log(req.user) 
            next()   
        } catch (error) {
            console.log('something went wrong, UserId not found.')
        }
    }
    else{
        console.log('token not found')
        res.status(401).send('token not found, user is not authorized.')

    }
}