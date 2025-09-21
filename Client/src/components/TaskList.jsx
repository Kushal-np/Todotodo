import axios from "axios";

const TaskList = ({ tasks, setTasks }) => {
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/task/delete-Task/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Task List</h1>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{task.title}</h3>
              <p className="text-gray-600 mt-1">{task.description}</p>
            </div>

            <button
              onClick={() => deleteTask(task._id)}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
