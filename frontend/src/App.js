import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home from './pages/Home';
import Authentication from './pages/Authentication';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';
import MyAccount from './pages/MyAccount';
import MyOrders from './pages/MyOrders';
import Refunds from './pages/Refunds';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" component={Authentication} />
          <Route path="/product" component={ProductPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/my-account" component={MyAccount} />
          <Route path="/my-orders" component={MyOrders} />
          <Route path="/refunds" component={Refunds} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;