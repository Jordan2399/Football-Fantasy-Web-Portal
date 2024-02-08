import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoadingButton from './LoadingButton';

describe('LoadingButton', () => {
  it('renders correctly', () => {
    const { getByRole, getByText } = render(<LoadingButton />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-600');
    expect(button).toHaveAttribute('disabled');
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('changes state when clicked', () => {
    const { getByRole, getByText } = render(<LoadingButton />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(button).not.toHaveAttribute('disabled');
    expect(getByText('Loading...')).not.toBeInTheDocument();
  });
});