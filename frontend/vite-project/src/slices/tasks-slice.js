import baseApiSlice from "./baseApiSlice"
import { CREATE_TASKS_URL,TOGGLE_TASK,DELETE_TASK } from "../constants"


const TaskSlice=baseApiSlice.injectEndpoints({
    endpoints:(builder)=>({
        AddTask:builder.mutation({
            query:(data)=>({
                url:CREATE_TASKS_URL,
                method:'post',
                body:data
            })
        }),
        ToggleTaskStatus:builder.mutation({
            query:(data)=>({
                url:TOGGLE_TASK,
                method:'post',
                body:data
            })
        }),
        DeleteTask:builder.mutation({
            query:(data)=>({
                url:DELETE_TASK,
                method:'post',
                body:data
            })
        })
    })
})

export const {useAddTaskMutation,useToggleTaskStatusMutation,useDeleteTaskMutation}=TaskSlice