import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/' element={<About />}/> 
      </Routes> 
<h1>yujhvm</h1>
    </div>
  )
}

export default App