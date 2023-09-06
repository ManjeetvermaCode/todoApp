import jwt from 'jsonwebtoken'
export const generateToken=(res,UserId)=>{
    const token=jwt.sign({UserId},process.env.JWT_SECRET,{expiresIn:'7d'})
  res.cookie('Jwt',token,{
    httpOnly:true,
    secure:false,
    samesite:'none',
    maxAge:7*60*60*24*1000
  })

}