import React from 'react'

const App = () => {

  const btnClicked =()=>{
   console.log("iiiii");
   
  }

  return (
    <div>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App