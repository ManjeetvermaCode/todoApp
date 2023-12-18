import { COLLECTIONS_URL,POST_COLLECTION_URL,DELETE_COLLECTION} from "../constants";

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
        GetCollectionsByUserId:builder.query({
            query:(userId)=>({
                url:`${COLLECTIONS_URL}/user/${userId}`
            })
        }),
        PostCollection:builder.mutation({
            query:(data)=>({
                url:POST_COLLECTION_URL,
                method:'POST',
                body:data
            })
        }),
        DeleteCollection:builder.mutation({
            query:(data)=>({
                url:DELETE_COLLECTION,
                method:'POST',
                body:data
            })
        })
        
    }),
    
})

export const {useGetCollectionsQuery,useGetCollectionsByUserQuery,useGetCollectionsByUserIdQuery,usePostCollectionMutation,useDeleteCollectionMutation}=collectionsApiSlice;
