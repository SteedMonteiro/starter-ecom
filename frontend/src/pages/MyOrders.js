import React, { useEffect, useState } from 'react';
import { Box } from 'theme-ui';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OrderCard from '../components/OrderCard';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from API
    fetch('/api/orders')
      .then(response => response.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <Box>
      <Navbar />
      <Box as="main" sx={{ p: 4 }}>
        <h1>My Orders</h1>
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default MyOrders;