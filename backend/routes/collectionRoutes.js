import  express  from "express";
const router=express.Router()

import  {allcollections,collectionById}  from "../controller/collectionController.js";

router.route('/').get(allcollections)
router.route('/:id').get(collectionById)



export default router