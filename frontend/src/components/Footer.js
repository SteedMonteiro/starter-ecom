import React from 'react';
import { Box, Text, Link } from 'theme-ui';

const Footer = () => {
  return (
    <Box as="footer" sx={{ bg: 'primary', color: 'white', p: 4 }}>
      <Text sx={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} Smart Skipping Rope
      </Text>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Link href="/home" p={2}>
          Home
        </Link>
        <Link href="/product" p={2}>
          Product
        </Link>
        <Link href="/checkout" p={2}>
          Checkout
        </Link>
        <Link href="/myaccount" p={2}>
          My Account
        </Link>
        <Link href="/myorders" p={2}>
          My Orders
        </Link>
        <Link href="/refunds" p={2}>
          Refunds
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;