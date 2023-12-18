import collections from '../models/collectionModel.js'
import asyncHandler from '../middlewares/asynchandler.js'
import User from '../models/userModel.js'
import collection from '../models/collectionModel.js'

export const allcollections=asyncHandler(
    async(req,res)=>{
        try {
            const allcollections=await collections.find({}).populate('tasks')
        res.status(200).json(allcollections.tasks)
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
        res.status(200).json(collection.tasks)
        } catch (error) {
            res.status(404)
           throw new Error('Collection Not Found') 
        }
    }
)

export const getCollectionByUserId=asyncHandler(
    async(req,res)=>{
        try{
                const {id}=req.params
                const allcollections=await collections.find({CreatedBy:id})
                if(allcollections.length>0){
                    res.status(200).json(allcollections)
                }
        }catch(err){
            res.status(403)
            throw new Error('Resource not found')
        }
    }
)

export const createCollection=asyncHandler(
    async(req,res)=>{
        try {
            const {title,description,UserId}=req.body
        console.log(UserId)
        const newCollection=new collections({title,description,CreatedBy:UserId})
        const collection=await newCollection.save()
        res.status(200).json(collection)
        } catch (error) {
            res.status(200)
            throw new Error('Collection not saved')
        }
        
    }
)

export const deleteCollection=asyncHandler(
    async(req,res)=>{
        const {id}=req.body
        // const collection=await collection.findById(id)
        // console.log(collection)
        console.log(id)
    }
)