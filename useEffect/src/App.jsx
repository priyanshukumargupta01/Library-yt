import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

  useEffect(() => {
    console.log("hi")
  }, [num]) 

  return (
    <div>
      <h1>num  1 is : {num}</h1>
      <h1>num  2 is : {num2}</h1>
      <button 
      onMouseEnter={() => {
        setNum(num + 1) 
      }}
      onMouseLeave={()=>{
        setNum2(num2 + 1)
      }   }>
        click
      </button>
    </div>
  )
}

export default App