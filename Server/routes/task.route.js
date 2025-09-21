import express from 'express'
import { createTask, deleteTask, readTask, updateTask } from '../controllers/task.controller.js';
const router = express.Router();
router.get("/" , readTask);
router.post("/create-task" , createTask);
router.put("/update-task" , updateTask);
router.delete("/delete-task/:id" , deleteTask)


export default router;