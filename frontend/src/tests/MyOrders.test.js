```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyOrders from '../pages/MyOrders';

describe('MyOrders page', () => {
  test('renders MyOrders page', () => {
    render(<MyOrders />);
    expect(screen.getByTestId('my-orders-page')).toBeInTheDocument();
  });

  test('displays user orders', async () => {
    render(<MyOrders />);
    const orders = await screen.findAllByTestId('order-card');
    expect(orders).toHaveLength(2); // assuming user has 2 orders
  });

  test('displays no orders message when no orders', async () => {
    render(<MyOrders />);
    const noOrdersMessage = screen.getByText('You have no orders yet.');
    expect(noOrdersMessage).toBeInTheDocument();
  });
});
```