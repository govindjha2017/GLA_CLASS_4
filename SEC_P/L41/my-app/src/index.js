import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar';
// import './Navbar.css'
import Landing from './Landing'
import Counter from './Counter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
          {Navbar()}
          <Landing/>
          <Counter/>
          <h1>Hello from my first react app</h1>
          <p>Hello from p tag</p>
          {App()}
          <App></App>
          <App/>
     </>
);
