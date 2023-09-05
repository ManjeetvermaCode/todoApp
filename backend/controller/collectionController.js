import collections from '../models/collectionModel.js'

export const allcollections=async(req,res)=>{
    const allcollections=await collections.find({})
    res.status(200).json({allcollections})
}

export const collectionById=async(req,res)=>{
    try {
        const {id}=req.params
    const collection=await collections.findById(id).populate('tasks')
    res.status(200).json(collection)
    } catch (error) {
        console.log('error',error)
    }
}