import React from 'react'
import { Route , Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<h1>Home page</h1>}></Route>
            <Route path="/about" element={<h1>about page</h1>}></Route>
            <Route path="/contact" element={<h1>contact page</h1>}></Route>
        </Routes>
    </div>
  )
}

export default App