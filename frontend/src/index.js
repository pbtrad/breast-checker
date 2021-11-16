import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyles.css';

import App from './App';

ReactDOM.render(
<Router basename={process.env.PUBLIC_URL}>
  < App />
  </Router>, document.getElementById('root'));


// const routing = (
//   <BrowserRouter>
//     <div>
//       <Route path='/' component={App}></Route>
//     </div>
//   </BrowserRouter>
// );

// ReactDOM.render(routing,document.getElementById('root'));


 //ReactDOM.render(
   //<BrowserRouter>
     //<App />
   //</BrowserRouter>,
     //document.getElementById('root')
 //);


