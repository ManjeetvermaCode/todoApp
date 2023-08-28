import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'Medium',
    },
    completed: {
        type: Boolean,
        default: false,
    },
    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
},   
{Timestamp:true});

const Task = mongoose.model('Task', taskSchema);

export default Task;