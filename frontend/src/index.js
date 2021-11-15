import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './GlobalStyles.css';

import App from './App';

// const routing = (
//   <BrowserRouter>
//     <div>
//       <Route path='/' component={App}></Route>
//     </div>
//   </BrowserRouter>
// );

// ReactDOM.render(routing,document.getElementById('root'));


 ReactDOM.render(
   <BrowserRouter>
     <App />
   </BrowserRouter>,
     document.getElementById('root')
 );


