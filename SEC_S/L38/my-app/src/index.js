import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
 
// import './app.css';

import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
      {/* <Navbar></Navbar> */}
      <Navbar/>
      {/* {Navbar()} */}
      <h1>My first react app</h1>
      <p>This is p tag</p>
      {App()}
   </>
);

 