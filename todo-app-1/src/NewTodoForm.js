import React, { useState } from "react";

function NewBoxForm({ addTodo }) {
  const [task, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ task: task});
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo
        <input type="text" value={task} onChange={(e) => setTodo(e.target.value)} />
      </label>
      <button type="submit">Create Todo</button>
    </form>
  );
}

export default NewBoxForm;