import {configureStore} from '@reduxjs/toolkit'
import apiSlice from './slices/baseApiSlice';
const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),// This is an arrow function that takes getDefaultMiddleware as a parameter and returns a modified array of middleware.
      devTools:true,
})

export default store;