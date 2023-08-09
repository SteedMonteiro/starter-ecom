import React from 'react';
import { Box, Heading, Image, Text, Button } from 'theme-ui';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      recommendedProducts: [],
    };
  }

  componentDidMount() {
    // Fetch product details from API
    // Fetch recommended products from AI service
  }

  render() {
    const { product, recommendedProducts } = this.state;

    if (!product) {
      return <div>Loading...</div>;
    }

    return (
      <Box>
        <Navbar />
        <Box p={4}>
          <Heading as="h1">{product.name}</Heading>
          <Image src={product.image} alt={product.name} />
          <Text>{product.description}</Text>
          <Text>${product.price}</Text>
          <Button>Buy Now</Button>
          <Heading as="h2">You might also like</Heading>
          <Box>
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>
        </Box>
        <Footer />
      </Box>
    );
  }
}

export default ProductPage;