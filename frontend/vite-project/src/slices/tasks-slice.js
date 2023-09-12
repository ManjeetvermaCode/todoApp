import baseApiSlice from "./baseApiSlice"
import { CREATE_TASKS_URL } from "../constants"


const TaskSlice=baseApiSlice.injectEndpoints({
    endpoints:(builder)=>({
        AddTask:builder.mutation({
            query:(data)=>({
                url:CREATE_TASKS_URL,
                method:'post',
                body:data
            })
        })
    })
})

export const {useAddTaskMutation}=TaskSlice