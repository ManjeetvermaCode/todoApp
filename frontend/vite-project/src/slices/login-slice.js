import baseApiSlice from './baseApiSlice'
import { LOGIN_URL } from '../constants'


export const LoginSlice=baseApiSlice.injectEndpoints({
    endpoints:(builder)=>({
        Login:builder.mutation({
            query:(data)=>({
                url:LOGIN_URL,
                body:data,
                method:'post'
            })
            
                
            })
        })
    
})

export const {useLoginMutation}=LoginSlice
    