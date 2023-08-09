import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Refunds from '../pages/Refunds';

test('renders Refunds page', () => {
  const { getByText } = render(<Refunds />);
  const linkElement = getByText(/Refunds/i);
  expect(linkElement).toBeInTheDocument();
});

test('submits refund request', async () => {
  const { getByLabelText, getByText } = render(<Refunds />);
  
  fireEvent.change(getByLabelText(/Order ID/i), { target: { value: '12345' } });
  fireEvent.change(getByLabelText(/Reason for Refund/i), { target: { value: 'Product is defective' } });
  
  fireEvent.click(getByText(/Submit Refund Request/i));
  
  await waitFor(() => getByText(/Refund request submitted successfully/i));
  
  expect(getByText(/Refund request submitted successfully/i)).toBeInTheDocument();
});