import { createSlice } from "@reduxjs/toolkit";

const initialState={userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null}
const AuthSlice=createSlice({
    name:'authUser',
    initialState,
    reducers:{//reducers is the only valid key
        setCredentials:(state,action)=>{
            state.userInfo=action.payload,//state.xyz is used for storing data in store
            localStorage.setItem('userInfo',JSON.stringify(action.payload))//same data in localstorage in in redux store.
        },
        logout:(state,action)=>{
            state.userInfo=null,
            localStorage.removeItem('userInfo')
        }
    }
})

export const {setCredentials,logout}=AuthSlice.actions
export default AuthSlice.reducer