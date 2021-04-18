import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App2'
import Landingpg from './Landingpg';
import SignInSide from './SignInSide'
import Profiles from './Profiles'
import Cart from './Cart'
import SignUpSide from './SignUpSide'
import PotatoSearch from './PotatoSearch'
import Checkout from './Checkout'

const Routes = () => (
  <BrowserRouter>
      <App>
          <Route exact path="/login" component={SignInSide} />
          <Route exact path="/sign-up" component={SignUpSide} />
          <Route exact path="/" component={Landingpg} />
          <Route exact path="/farms" component={Profiles} />
          <Route exact path="/West-Lothian-Farm" component={Cart} />
          <Route exact path="/search" component={PotatoSearch} />
          <Route exact path="/Checkout" component={Checkout} />
      </App>
  </BrowserRouter>
);



ReactDOM.render(<Routes />, document.getElementById('root'));