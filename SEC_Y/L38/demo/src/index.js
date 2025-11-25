import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar';
import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <>
        <Navbar/>
        <App/>
        <Counter/>
    </>
  </BrowserRouter>
);
 