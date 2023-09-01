import usersData from './data/user.js'
import tasksData from "./data/tasks.js";
import collectionData from './data/collection.js';

import Task from "./models/taskModel.js";
import User from './models/userModel.js'
import collection from './models/collectionModel.js'

import dotenv from 'dotenv'
import configDb from "./connectDb.js";

dotenv.config()
configDb()


const insertData=async()=>{
    try {
        await User.deleteMany()
        // await Task.deleteMany()
        // await collection.deleteMany()

        const userData=await User.insertMany(usersData)
        console.log(userData)

        // const taskData=await Task.insertMany(tasksData)
        // const rescollectionData=await collection.insertMany(collectionData)

        // const taskIds = taskData.map(task => task._id);
        // const collectionIds=rescollectionData.map(collection=>collection._id)
        // console.log(rescollectionData)


        // // await collection.updateMany({},{$set:{tasks:taskIds}})
        // await User.updateMany({}, { $set: { collections: collectionIds } });

        console.log('data inserted successfully')
        process.exit(0)
    } catch (error) {
        console.log('somthing went wrong 1',error)
        process.exit(1)
    }
}

const removeData=async()=>{
    try {
        await User.deleteMany()
        await Task.deleteMany()
        console.log('data removed successfully for DB')
        process.exit(0)
    } catch (error) {
        console.log('something went wrong 2')
    }
}

process.argv[2]=='-d'?removeData():insertData()