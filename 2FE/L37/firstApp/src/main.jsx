import { createRoot } from 'react-dom/client'

let x = createRoot(document.getElementById('root'));

import App from './App'
import Navbar from './Navbar'

x.render(
     <>
        <Navbar></Navbar>
        <h1>Hello </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quia!</p>
        <App></App>
        <App></App>
     </>
)
