```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Authentication from '../pages/Authentication';

test('renders Authentication page', () => {
  const { getByText } = render(<Authentication />);
  const linkElement = getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});

test('allows the user to login successfully', async () => {
  const fakeUserResponse = { token: 'fake_user_token' };
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse),
    });
  });

  const { getByLabelText, getByText } = render(<Authentication />);

  fireEvent.change(getByLabelText(/username/i), {
    target: {value: 'chuck'},
  });
  fireEvent.change(getByLabelText(/password/i), {
    target: {value: 'norris'},
  });

  fireEvent.click(getByText(/submit/i));

  const alert = await window.alert;
  expect(alert).toEqual('Logged in!');
});
```