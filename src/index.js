// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Landingpg from './Landingpg';
// import reportWebVitals from './reportWebVitals';



// ReactDOM.render(
//   <React.StrictMode>
//     <Landingpg />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App2'
import Landingpg from './Landingpg';
import SignInSide from './SignInSide'



const Routes = () => (
  <BrowserRouter>
      <App>
          <Route exact path="/login" component={SignInSide} />
          <Route exact path="/" component={Landingpg} />
      </App>
  </BrowserRouter>
);



ReactDOM.render(<Routes />, document.getElementById('root'));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

