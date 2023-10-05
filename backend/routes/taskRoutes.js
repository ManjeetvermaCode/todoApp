import  express  from "express";
const router=express.Router()

import  {allTasks,createTask,toggleTaskStatus}  from "../controller/tasksController.js";

router.route('/').get(allTasks)
router.route('/new').post(createTask)
router.route('/togglestatus').post(toggleTaskStatus)

export default router