import React, { useState } from "react";
import Todo from './Todo';
import NewTodoForm from './NewTodoForm.js';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ul>
      {todos.map((todo, index) => (
        <li key={index}><Todo key={index} {...todo} onDelete={() => removeTodo(index)} /></li>
      ))}  
      </ul>
    </div>
  );
}

export default TodoList;