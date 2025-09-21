import { useState } from "react";
import axios from "axios";

const TaskForm = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async () => {
    if (!title) return;

    try {
      const res = await axios.post("http://localhost:5000/api/v1/task/create-task", {
        title,
        description,
      });
      console.log(res.data.task)
      console.log(res.description)
      console.log()
      setTasks([res.data.task, ...tasks]); 
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Add New Task</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addTask}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
