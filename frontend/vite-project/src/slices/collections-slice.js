import { COLLECTIONS_URL } from "../constants";

import baseApiSlice from "./baseApiSlice";

// const URL='/api/collections'

const collectionsApiSlice=baseApiSlice.injectEndpoints({
    endpoints:(builder)=>({
        GetCollections:builder.query({
            query:()=>({
                url:COLLECTIONS_URL
            }),
            keepUnusedDataFor:5,
        }),
        GetCollectionsByUser:builder.query({
            query:(queryKey)=>({
                url:`${COLLECTIONS_URL}/${queryKey}`
            }),
            keepUnusedDataFor:5,
        }),
        
    }),
    
})

export const {useGetCollectionsQuery,useGetCollectionsByUserQuery}=collectionsApiSlice;
