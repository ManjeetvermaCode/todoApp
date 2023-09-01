import mongoose from "mongoose";

const collectionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
})


const collection = mongoose.model('Collection', collectionSchema);

export default collection