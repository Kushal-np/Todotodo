import { Task } from "../model/task.model.js";

export const createTask = async (req, res) => {
  try {
    const { title , description} = req.body;
    if (!title || !description) {
      res.status(501).json({
        success: false,
        message: "title is required",
      });
    }
    const task = await Task.create({ title , description });
    res.status(201).json({
      success: true,
      task,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
};

export const readTask = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(201).json({
      success:true , 
      tasks:task,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Error getting the tasks",
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const {id} = req.params; 
    const updatedTask = await Task.findByIdAndUpdate(id,req.body,{new:true})
    if(!updatedTask){
      return res.status(401).json({
        success:false , 
        message:"Task not found"

      });
    }
    res.status(200).json({
      success:true,
      updatedTask,
    })
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
   }
};


export const deleteTask = async (req, res) => {
  try {
    console.log("here we come")
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
