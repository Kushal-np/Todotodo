import axios from "axios";
import { useState } from "react";

const TaskList = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState("all");
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/v1/task/delete-Task/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const toggleTask = async (id) => {
    const res = await axios.patch(
      `http://localhost:5000/api/v1/task/toggle-task/${id}`
    );
    const updatedTask = res.data.task;

    setTasks(tasks.map((t) => (t._id === id ? updatedTask : t)));
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }
    if (filter === "pending") {
      return !task.completed;
    }
    return true;
  });

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Task List</h1>
      {/* Filter buttons */}
      <button
        onClick={() => setFilter("all")}
        className={`px-3 py-1 rounded ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-3 py-1 rounded ${
          filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Completed
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-3 py-1 rounded ${
          filter === "pending" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Pending
      </button>

      <div className="space-y-3">
        {filteredTask.map((task) => (
          <div
            key={task._id}
            className="flex justify-between items-center bg-white shadow p-4 rounded-lg"
          >
            <div>
              <h3
                className={`text-lg font-semibold ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.title}
              </h3>
              <p className="text-sm text-gray-600">{task.description}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => toggleTask(task._id)}
                className={`px-3 py-1 rounded ${
                  task.completed
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-200 text-yellow-800"
                }`}
              >
                {task.completed ? "✅ Done" : "⏳ Pending"}
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-200 text-red-800 px-3 py-1 rounded hover:bg-red-300"
              >
                ❌ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
