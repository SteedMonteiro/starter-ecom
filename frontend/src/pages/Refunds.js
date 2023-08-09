import React from 'react';
import { Box } from 'theme-ui';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RefundForm from '../components/RefundForm';

const Refunds = () => {
  return (
    <Box>
      <Navbar />
      <Box as="main" sx={{ p: [2, 3, 4] }}>
        <h1>Request a Refund</h1>
        <RefundForm />
      </Box>
      <Footer />
    </Box>
  );
};

export default Refunds;