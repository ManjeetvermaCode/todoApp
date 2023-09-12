import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    dueDate: {
        type: Date,
        required: false,
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

},   
{timestamps:true});

const Task = mongoose.model('Task', taskSchema);

export default Task;