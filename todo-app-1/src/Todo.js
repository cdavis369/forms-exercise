import React from "react";
import "./Todo.css"

function Todo({ task , onDelete}) {
  return (
    <div className="todo">
      <button onClick={onDelete}>X</button>
      <p className="task">{task}</p>
    </div>
  );
}

export default Todo;