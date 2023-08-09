import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Flex, Text, Button } from 'theme-ui';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Flex as="nav">
        <Heading as="h1" sx={{ flexGrow: 1 }}>
          <Link to="/">Smart Skipping Rope</Link>
        </Heading>
        <Link to="/home">
          <Text>Home</Text>
        </Link>
        <Link to="/product">
          <Text>Product</Text>
        </Link>
        <Link to="/checkout">
          <Text>Checkout</Text>
        </Link>
        <Link to="/myaccount">
          <Text>My Account</Text>
        </Link>
        <Link to="/myorders">
          <Text>My Orders</Text>
        </Link>
        <Link to="/refunds">
          <Text>Refunds</Text>
        </Link>
        <Link to="/authentication">
          <Button>Login</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;