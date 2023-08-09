import React from 'react';
import { Box, Button, Label, Input, Textarea } from 'theme-ui';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the form submission,
    // for example, send the form data to the server.
  }

  render() {
    return (
      <Box as="form" onSubmit={this.handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />

        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          name="address"
          value={this.state.address}
          onChange={this.handleInputChange}
        />

        <Label htmlFor="cardNumber">Card Number</Label>
        <Input
          id="cardNumber"
          name="cardNumber"
          value={this.state.cardNumber}
          onChange={this.handleInputChange}
        />

        <Label htmlFor="expiryDate">Expiry Date</Label>
        <Input
          id="expiryDate"
          name="expiryDate"
          value={this.state.expiryDate}
          onChange={this.handleInputChange}
        />

        <Label htmlFor="cvv">CVV</Label>
        <Input
          id="cvv"
          name="cvv"
          value={this.state.cvv}
          onChange={this.handleInputChange}
        />

        <Button>Submit</Button>
      </Box>
    );
  }
}

export default CheckoutForm;