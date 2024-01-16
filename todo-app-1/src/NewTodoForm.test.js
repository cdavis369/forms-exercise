// NewTodoForm.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm.js';

describe('NewTestForm', () => {
  it('renders form', () => {
    render(<NewTodoForm addTodo={() => {}} />);
  });

  it('inputs work', () => {
    const { getByLabelText } = render(<NewTodoForm addTodo={() => {}} />);
    const todoInput = getByLabelText('Todo');

    fireEvent.change(todoInput, { target: { value: 'Testing testy test' } });

    expect(todoInput.value).toBe('Testing testy test');
  });

  it('addTodo parameters passed', () => {
    const addTodoMock = jest.fn();
    const { getByLabelText, getByText } = render(<NewTodoForm addTodo={addTodoMock} />);
    const todoInput = getByLabelText('Todo');
    const createTodoButton = getByText('Create Todo');

    fireEvent.change(todoInput, { target: { value: 'Testing testy test' } });
    fireEvent.click(createTodoButton);

    expect(addTodoMock).toHaveBeenCalledWith({ task: 'Testing testy test' });
  });

  it('inputs reset on form submission', () => {
    const { getByLabelText, getByText } = render(<NewTodoForm addTodo={() => {}} />);
    const todoInput = getByLabelText('Todo');
    const createTodoButton = getByText('Create Todo');

    fireEvent.change(todoInput, { target: { value: 'Testing testy test' } });
    fireEvent.click(createTodoButton);

    expect(todoInput.value).toBe('');
  });
});
