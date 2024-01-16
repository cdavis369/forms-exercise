// Todo.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

describe('Todo Component', () => {
  it('renders todo', () => {
    render(<Todo task="Testing testy test" onDelete={() => {}} index={0} />);
  });

  it('onDelete button click works', () => {
    const onDeleteMock = jest.fn();
    const { getByText } = render(<Todo task="Testing testy test" onDelete={onDeleteMock} index={0} />);
    const deleteButton = getByText('X');

    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });

  it('todo text works', () => {
    const { getByText } = render(<Todo task="Testing testy test" onDelete={() => {}} index={0} />);
    const taskText = getByText('Testing testy test');

    expect(taskText).toBeInTheDocument();
  });

  it('index works', () => {
    const { getByTestId } = render(<Todo task="Testing testy test" onDelete={() => {}} index={0} />);
    const todoElement = getByTestId('todo-0');

    expect(todoElement).toBeInTheDocument();
  });
});
