import React, { useState } from "react";
import "./TodoTasks.css";
import edit from "../assets/edit.png";
import bin from "../assets/bin.png";

const TodoTasks = ({ tasks, onEditTask, onDeleteTask }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditChange = (e) => setEditText(e.target.value);

  const handleSaveEdit = (index) => {
    onEditTask(index, editText);
    setEditingIndex(null);
  };

  return (
    <div className="container">
      <ul className="ulitems">
        {tasks.map((task, index) => (
          <li className="todoItem" key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                  placeholder="Edit your task"
                />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              </>
            ) : (
              <>
                {task.text}
                <img
                  src={edit}
                  alt="Edit"
                  className="edit-icon"
                  onClick={() => {
                    setEditingIndex(index);
                    setEditText(task.text);
                  }}
                />
                <img
                  src={bin}
                  alt="Bin"
                  className="bin-icon"
                  onClick={() => onDeleteTask(index)}
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoTasks;
