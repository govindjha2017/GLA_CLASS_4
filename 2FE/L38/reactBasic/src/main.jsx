import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Navbar from './Navbar'
// import './Navbar.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <Navbar></Navbar> */}
      <Navbar/>
      {/* {Navbar()} */}
  </StrictMode>,
)
