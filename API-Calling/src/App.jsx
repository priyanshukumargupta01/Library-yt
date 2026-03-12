import React from 'react'

const App = () => {

   async function  btnClicked (){

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

   console.log(await response.json());
   
  }

  return (
    <div>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}
export default App         