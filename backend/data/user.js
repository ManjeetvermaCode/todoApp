import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
// import collection from './collection'
const users=[
    {
        username:'Manjeet',
        email:'man@gmail.com',
        password:bcrypt.hashSync('123456',10),
        collections:[
           new mongoose.Types.ObjectId('64f19c9071f7519ff95c8b15')
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
            new mongoose.Types.ObjectId('64f19c9071f7519ff95c8b15')

        ]
    },
]

export default users