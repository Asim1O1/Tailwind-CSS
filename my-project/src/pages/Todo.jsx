import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {

    if(task.length = 0)
    {
        
    }


  };
  return (
    <div>
      <div className="mx-auto bg-sky-300 h-96 w-96 my-20 rounded-lg overflow-hidden">
        <div className="flex justify-center space-x-1">
          <input
            className="border-2 rounded-sm border-black my-2"
            type="text"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            onClick={handleAddTask}
            className="border-2 rounded-lg border-white  my-2 p-2  bg-red-500"
          >
            add task
          </button>
        </div>
        <div className="bg-white w-20 h- 20 "></div>
      </div>
    </div>
  );
};

export default Todo;
