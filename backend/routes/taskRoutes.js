import  express  from "express";
const router=express.Router()

import  {allTasks,createTask}  from "../controller/tasksController.js";

router.route('/').get(allTasks)
router.route('/new').post(createTask)

export default router