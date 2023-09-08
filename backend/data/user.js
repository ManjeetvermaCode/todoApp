import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
// import collection from './collection'
const users=[
    {
        username:'Manjeet',
        email:'man@gmail.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        username:'sarthak',
        email:'sar@gmail.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        username:'raju',
        email:'abcd@gmail.com',
        password:bcrypt.hashSync('123456',10),
        
    },
]

export default users