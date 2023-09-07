import collections from '../models/collectionModel.js'
import asyncHandler from '../middlewares/asynchandler.js'

export const allcollections=asyncHandler(
    async(req,res)=>{
        try {
            const allcollections=await collections.find({})
        res.status(200).json({allcollections})
        } catch (error) {
           res.status(404)
           throw new Error('Collections Not Found') 
        }
    }
)

export const collectionById=asyncHandler(
    async(req,res)=>{
        try {
            const {id}=req.params
        const collection=await collections.findById(id).populate('tasks')
        res.status(200).json(collection)
        } catch (error) {
            res.status(404)
           throw new Error('Collection Not Found') 
        }
    }
)