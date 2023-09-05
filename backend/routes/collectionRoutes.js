import  express  from "express";
const router=express.Router()
import {isUser} from "../middlewares/authMiddleware.js";

import  {allcollections,collectionById}  from "../controller/collectionController.js";

router.route('/').get(isUser,allcollections)
router.route('/:id').get(collectionById)



export default router