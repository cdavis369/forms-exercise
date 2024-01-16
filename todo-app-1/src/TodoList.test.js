// TodoList.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  it('renders TodoList', () => {
    render(<TodoList />);
  });

  it('create todo works', () => {
    const { getByLabelText, getByText } = render(<TodoList />);
    const todoInput = getByLabelText('Todo');
    const createTodoButton = getByText('Create Todo');

    fireEvent.change(todoInput, { target: { value: 'Testing testy test' } });
    fireEvent.click(createTodoButton);

    const todoItem = getByText('Testing testy test');
    expect(todoItem).toBeInTheDocument();
  });

  it('delete todo works', () => {
    const { getByLabelText, getByText, queryByText } = render(<TodoList />);
    const todoInput = getByLabelText('Todo');
    const createTodoButton = getByText('Create Todo');

    fireEvent.change(todoInput, { target: { value: 'Testing testy test' } });
    fireEvent.click(createTodoButton);

    const deleteButton = getByText('X');
    fireEvent.click(deleteButton);

    const todoItem = queryByText('Testing testy test');
    expect(todoItem).not.toBeInTheDocument();
  });

  it('create multiple todos', () => {
    const { getByLabelText, getByText } = render(<TodoList />);
    const todoInput = getByLabelText('Todo');
    const createTodoButton = getByText('Create Todo');

    fireEvent.change(todoInput, { target: { value: 'Todo 0' } });
    fireEvent.click(createTodoButton);

    fireEvent.change(todoInput, { target: { value: 'Todo 1' } });
    fireEvent.click(createTodoButton);

    const todoItems = document.querySelectorAll('li');
    expect(todoItems.length).toBe(2);
  });
});
