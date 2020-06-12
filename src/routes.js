import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
  <BrowserRouter> {/* Definily we are using the routes in a browser */}
    <Switch> {/* Only one route is call by a request  */}
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
    </Switch>
  </BrowserRouter>
)

export default Routes;