import  express  from "express";
const router=express.Router()

import { allUsers,User,registerUser } from "../controller/userController.js";

router.route('/',).get(allUsers)
router.route('/:id').get(User)
router.route('/register').post(registerUser)

export default router