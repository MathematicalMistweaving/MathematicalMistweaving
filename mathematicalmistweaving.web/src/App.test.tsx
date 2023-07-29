import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders get started link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Get Started/i);
  expect(linkElement).toBeInTheDocument();
});
