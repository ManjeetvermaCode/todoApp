import  express  from "express";
const router=express.Router()

import { allusers,user } from "../controller/userController.js";

router.route('/',).get(allusers)
router.route('/:id').get(user)

export default router