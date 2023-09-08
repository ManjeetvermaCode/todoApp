import  express  from "express";
const router=express.Router()
import {isUser} from "../middlewares/authMiddleware.js";

import  {allcollections,collectionById,createCollection}  from "../controller/collectionController.js";

router.route('/').get(allcollections)
router.route('/:id').get(collectionById)
router.route('/new').post(createCollection)


export default router