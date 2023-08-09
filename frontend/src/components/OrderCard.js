import React from 'react';
import { Card, Image, Box, Text } from 'theme-ui';

const OrderCard = ({ order }) => {
  return (
    <Card>
      <Image src={order.product.image} />
      <Box>
        <Text as="h3">{order.product.name}</Text>
        <Text as="p">Quantity: {order.quantity}</Text>
        <Text as="p">Total Price: {order.totalPrice}</Text>
        <Text as="p">Order Date: {new Date(order.date).toLocaleDateString()}</Text>
        <Text as="p">Status: {order.status}</Text>
      </Box>
    </Card>
  );
};

export default OrderCard;