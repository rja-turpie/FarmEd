// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import   LandingPage from './Landingpg';
// import reportWebVitals from './reportWebVitals';


// ReactDOM.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

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



const Routes = () => (
  <BrowserRouter>
      <App>
          <Route exact path="/login" component={SignInSide} />
          <Route exact path="/sign-up" component={SignUpSide} />
          <Route exact path="/" component={Landingpg} />
          <Route exact path="/farms" component={Profiles} />
          <Route exact path="/West-Lothian-Farm" component={Cart} />
      </App>
  </BrowserRouter>
);



ReactDOM.render(<Routes />, document.getElementById('root'));