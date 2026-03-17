import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log("hi")
  }, []) 

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => {
        setNum(num + 1)
      }}>
        click
      </button>
    </div>
  )
}

export default App