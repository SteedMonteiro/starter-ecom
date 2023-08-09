import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders Home page', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome to our Smart Skipping Rope Store!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders product recommendations', () => {
  render(<Home />);
  const recommendationElement = screen.getByTestId('product-recommendations');
  expect(recommendationElement).toBeInTheDocument();
});

test('renders call to action', () => {
  render(<Home />);
  const ctaElement = screen.getByText(/Start Shopping Now!/i);
  expect(ctaElement).toBeInTheDocument();
});