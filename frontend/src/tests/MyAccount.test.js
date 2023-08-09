```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyAccount from '../pages/MyAccount';

describe('MyAccount', () => {
  test('renders MyAccount page', () => {
    render(<MyAccount />);
    expect(screen.getByTestId('myAccount')).toBeInTheDocument();
  });

  test('displays user information', () => {
    render(<MyAccount />);
    expect(screen.getByTestId('userInfo')).toBeInTheDocument();
  });

  test('displays order history', () => {
    render(<MyAccount />);
    expect(screen.getByTestId('orderHistory')).toBeInTheDocument();
  });

  test('displays account settings', () => {
    render(<MyAccount />);
    expect(screen.getByTestId('accountSettings')).toBeInTheDocument();
  });
});
```