import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

describe('BoxList tests', () => {
  it('render BoxList', () => {
    render(<BoxList />);
  });

  it('box form submission', () => {
    const { getByLabelText, getByText, getByTestId } = render(<BoxList />);
    fireEvent.change(getByLabelText('Width:'), { target: { value: '10' } });
    fireEvent.change(getByLabelText('Height:'), { target: { value: '10' } });
    fireEvent.change(getByLabelText('Color:'), { target: { value: 'green' } });
    fireEvent.click(getByText('Create Box'));

    const box = getByTestId('box-0');
    expect(box).toBeInTheDocument();
    expect(box).toHaveStyle({
      width: '10rem',
      height: '10rem',
      backgroundColor: 'green',
    });
  });

  it('removes a box from the list when delete button is clicked', () => {
    const { getByLabelText, getByText, queryByTestId } = render(<BoxList />);
    fireEvent.change(getByLabelText('Width:'), { target: { value: '10' } });
    fireEvent.change(getByLabelText('Height:'), { target: { value: '10' } });
    fireEvent.change(getByLabelText('Color:'), { target: { value: 'green' } });
    fireEvent.click(getByText('Create Box'));

    const deleteButton = getByText('X');
    const box = queryByTestId('box-1');
    fireEvent.click(deleteButton);

    
    expect(box).not.toBeInTheDocument();
  });
});