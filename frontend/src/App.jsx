import React, { useState } from "react";
import TodoList from "./TodoList/TodoList";
import TodoTasks from "./TodoTasks/TodoTasks";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, isEditing: false }]);
  };

  const editTask = (index, updatedText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: updatedText, isEditing: false } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <TodoList onAddTask={addTask} />
      <TodoTasks
        tasks={tasks}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
