```javascript
import React from 'react';
import { Card, Image, Button } from 'theme-ui';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Button onClick={() => {}}>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;
```