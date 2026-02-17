import React from 'react'
import profile from './assets/profile.jpg'

const App = () => {
  return (
    <div>
      <div className="card">
        <img src={profile} alt="" />
        <h1>PriyanshuKumar</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut minus alias nobis.</p>
        <button>Click Me</button>
      </div>
    </div>
  )
}

export default App