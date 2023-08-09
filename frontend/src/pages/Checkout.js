import React from 'react';
import { Box } from 'theme-ui';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ mt: 4, mb: 4 }}>
        <CheckoutForm />
      </Box>
      <Footer />
    </Box>
  );
};

export default Checkout;