import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
// import collection from './collection'
const users=[
    {
        username:'Manjeet',
        email:'man@gmail.com',
        password:bcrypt.hashSync('123456',10),
        collections:[
           new mongoose.Types.ObjectId('64f1b85bf77da9a97f3f8a8e')
        ]
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
        collections:[
            new mongoose.Types.ObjectId('64f1b85bf77da9a97f3f8a8f')

        ]
    },
]

export default users