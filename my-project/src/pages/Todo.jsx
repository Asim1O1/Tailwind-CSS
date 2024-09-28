import React, { useEffect, useState } from "react";
import { Trash2, PlusCircle, X } from "lucide-react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isInitialized]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteSingleTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-96">
        <div className="bg-purple-600 p-4">
          <h1 className="text-2xl font-bold text-white">Todo List</h1>
        </div>
        <div className="p-4">
          <div className="flex mb-4">
            <input
              className="flex-grow border-2 border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:border-purple-500"
              type="text"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
            />
            <button
              onClick={handleAddTask}
              className="bg-purple-600 text-white py-2 px-4 rounded-r-md hover:bg-purple-700 transition duration-300"
            >
              <PlusCircle size={24} />
            </button>
          </div>
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-md"
              >
                <span className="text-gray-800">{task}</span>
                <button
                  onClick={() => deleteSingleTask(index)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  <X size={20} />
                </button>
              </li>
            ))}
          </ul>
          {tasks.length > 0 && (
            <div className="mt-4 text-right">
              <button
                onClick={deleteAllTasks}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 flex items-center justify-center ml-auto"
              >
                <Trash2 size={20} className="mr-2" />
                Delete All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
