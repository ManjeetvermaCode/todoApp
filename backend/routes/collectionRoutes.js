import  express  from "express";
const router=express.Router()
import {isUser} from "../middlewares/authMiddleware.js";

import  {allcollections,collectionById,createCollection,getCollectionByUserId}  from "../controller/collectionController.js";

router.route('/').get(allcollections)
router.route('/:id').get(collectionById)
router.route('/:user/:id').get(getCollectionByUserId)
router.route('/new').post(createCollection)


export default router