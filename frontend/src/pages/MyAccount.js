import React from 'react';
import { Box, Heading, Button } from 'theme-ui';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyAccount = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ mt: 4, mb: 4 }}>
        <Heading as="h1">My Account</Heading>
        <Button onClick={() => console.log('Edit Profile')}>Edit Profile</Button>
        <Button onClick={() => console.log('Change Password')}>Change Password</Button>
        <Button onClick={() => console.log('View Orders')}>View Orders</Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default MyAccount;