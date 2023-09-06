import  express  from "express";
const router=express.Router()

import { allUsers,User,registerUser, login, logout } from "../controller/userController.js";

router.route('/',).get(allUsers)
router.route('/:id').get(User)
router.route('/register').post(registerUser)
router.route('/login').post(login)
router.route('/logout').post(logout)



export default router