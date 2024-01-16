import React from "react";
import "./Todo.css"

function Todo({ task , onDelete, index}) {
  return (
    <div className="todo" data-testid={`todo-${index}`}>
      <button onClick={onDelete}>X</button>
      <p className="task">{task}</p>
    </div>
  );
}

export default Todo;