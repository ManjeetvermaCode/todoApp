import  express  from "express";
const router=express.Router()

import  {allTasks}  from "../controller/tasksController.js";

router.route('/').get(allTasks)

export default router