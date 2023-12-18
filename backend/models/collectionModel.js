import mongoose from "mongoose";
import Task from "./taskModel.js";

const collectionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    CreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
})

collectionSchema.post('findOneAndDelete',async function(collection){
   if(collection.tasks.length){
    const res=await Task.deleteMany({_id:{$in:collection.tasks}})
    console.log('these are the tasks deleted', res)
   }
})

const collection = mongoose.model('Collection', collectionSchema);

export default collection