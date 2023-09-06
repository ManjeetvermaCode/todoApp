import {configureStore} from '@reduxjs/toolkit'
import apiSlice from './slices/baseApiSlice';
import authReducer from './slices/auth-slice';
const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        authUser:authReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),// This is an arrow function that takes getDefaultMiddleware as a parameter and returns a modified array of middleware.
      devTools:true,
})

export default store;