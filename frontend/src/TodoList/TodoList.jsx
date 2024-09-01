import React, { useState } from "react";
import "./TodoList.css";

const TodoList = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => setTask(e.target.value);

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask(""); // Clear input after adding
    }
  };

  return (
    <div className="main">
      <div className="heading">
        <h1 className="h1">Todo List</h1>
      </div>
      <div className="todolist">
        <input
          className="input-box"
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter Your Task Here"
        />
        <button className="button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoList;
