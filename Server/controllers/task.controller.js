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
    const{title,description} = req.body;
    const task = await Task.findById(id);
    if(!task){
      return res.status(404).json({
        success:false,
        message:"Task not found"
      })
    }
    if(title){
      task.title = title ; 

    }
    if(description){
      task.description = description
    }

    await task.save();

    res.status(200).json({
      success:true,
      task,
    });
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

export const toggleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    // ✅ this runs only if task exists
    task.completed = !task.completed;
    await task.save();

    res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating the task",
    });
  }
};
