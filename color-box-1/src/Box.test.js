// Box.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

describe('Box tests', () => {
  it('renders box', () => {
    render(<Box />);
  });

  it('renders box with width, height, and color', () => {
    const { container } = render(<Box w={5} h={5} color="blue" />);
    const box = container.querySelector('.box');

    expect(box).toHaveStyle({
      width: '5rem',
      height: '5rem',
      backgroundColor: 'blue',
    });
  });

  it('delete button works', () => {
    const onDeleteMock = jest.fn();
    const { getByText } = render(<Box onDelete={onDeleteMock} />);
    const deleteButton = getByText('X');

    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });
});
