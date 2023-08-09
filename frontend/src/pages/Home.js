import React from 'react';
import { Box, Heading, Button } from 'theme-ui';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // This is where you would fetch your products from your backend
  const products = [
    {
      id: 1,
      name: 'Smart Skipping Rope',
      price: 49.99,
      image: 'https://example.com/images/smart-skipping-rope.jpg',
      description: 'A smart skipping rope that tracks your workouts.'
    },
    // Add more products as needed
  ];

  return (
    <Box>
      <Navbar />
      <Heading as="h1">Welcome to our store</Heading>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;