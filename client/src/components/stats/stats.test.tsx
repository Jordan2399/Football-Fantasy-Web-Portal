import React from 'react';
import { render, screen } from '@testing-library/react';
import { StatsProps } from "@/components/stats/type";
import { toBeInTheDocument } from '@testing-library/jest-dom';

import { Stats } from './stats'; // Adjust the import path as per your project structure

// Mock StatsProps
const mockStatsProps: StatsProps = {
  value: '100',
  title: 'Total Users',
};

test('renders stats component with correct value and title', () => {
  render(<Stats {...mockStatsProps} />);
  
  const valueElement = screen.getByText('100');
  expect(valueElement).toBeInTheDocument();

  const titleElement = screen.getByText('Total Users');
  expect(titleElement).toBeInTheDocument();
});
