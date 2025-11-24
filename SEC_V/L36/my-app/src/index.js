import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
        {Navbar()}
      <h1>Hello from my first react app</h1>
      <p>para tag</p>
     </>
    
);