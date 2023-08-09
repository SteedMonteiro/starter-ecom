import React, { useState } from 'react';
import { Box, Button, Label, Input, Textarea } from 'theme-ui';

const RefundForm = () => {
  const [orderId, setOrderId] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the refund request by calling an API
  };

  return (
    <Box as='form' onSubmit={handleSubmit}>
      <Label htmlFor='orderId'>Order ID</Label>
      <Input
        id='orderId'
        name='orderId'
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />

      <Label htmlFor='reason'>Reason for Refund</Label>
      <Textarea
        id='reason'
        name='reason'
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <Button>Submit Refund Request</Button>
    </Box>
  );
};

export default RefundForm;