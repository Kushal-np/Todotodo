import express from 'express'
import { createTask, deleteTask, readTask, toggleTask, updateTask } from '../controllers/task.controller.js';
const router = express.Router();
router.get("/" , readTask);
router.post("/create-task" , createTask);
router.put("/update-task" , updateTask);
router.delete("/delete-task/:id" , deleteTask)
router.patch("/toggle-task/:id" , toggleTask)


export default router;