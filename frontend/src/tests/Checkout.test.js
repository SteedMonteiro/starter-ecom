```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkout from '../pages/Checkout';

test('renders Checkout page', () => {
  const { getByText } = render(<Checkout />);
  const linkElement = getByText(/checkout/i);
  expect(linkElement).toBeInTheDocument();
});

test('can submit checkout form', () => {
  const { getByLabelText, getByText } = render(<Checkout />);
  
  fireEvent.change(getByLabelText(/name on card/i), {
    target: { value: 'John Doe' },
  });
  fireEvent.change(getByLabelText(/card number/i), {
    target: { value: '1234567812345678' },
  });
  fireEvent.change(getByLabelText(/expiry date/i), {
    target: { value: '12/24' },
  });
  fireEvent.change(getByLabelText(/cvv/i), {
    target: { value: '123' },
  });
  
  fireEvent.click(getByText(/place order/i));
  
  expect(getByText(/order placed successfully/i)).toBeInTheDocument();
});
```