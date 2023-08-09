import React, { useState } from 'react';
import { Box, Button, Input, Label } from 'theme-ui';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Authentication logic goes here
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button>Log In</Button>
    </Box>
  );
};

export default Authentication;