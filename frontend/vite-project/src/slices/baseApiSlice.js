import { BASE_URL } from '../constants.js'

import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery=fetchBaseQuery({baseUrl:BASE_URL})

const baseApiSlice=createApi({
    baseQuery:baseQuery,
    tagTypes:['collections','tasks','user'],
    endpoints:(builder)=>({}) 
})

export default baseApiSlice
