import mongoose from "mongoose";

const dbConfig=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to mongoDb')
    } catch (error) {
        console.log('something went wrong', error)
    }
}

export default dbConfig