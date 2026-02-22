/*import React from "react";
import { useState } from "react";

const App = () => {
  // let a = 20;

  // function changeA() {
  //   console.log(a);
  //   a = 40;
  //   console.log(a);
  // }


  const [num, setNumm] = useState(90)
  const [name, setName] = useState("Priyanshu")

function changeA() { 
    setNumm(70)
    setName("priyanshu kumar")
  }
// function changeB() { 
//     setName("priyanshu kumar");
//   }
  
  return (
    <div>
      <h1>vlaue of a is {num}</h1>
      <h1>my name is {name}</h1>
      <button onClick={changeA} >click for change</button>
    </div>
  );
};

export default App;
*/

import React, { useState } from 'react'

const App = () => {

const [first, setFirst] = useState(0)

function change(){
 setFirst(first+1)
}
function changeA(){
 setFirst(first-1)
}
function changeB(){
 setFirst(first+5)
}
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={change}>Increase</button>
      <button onClick={changeA}>Decrease</button>
      <button onClick={changeB}>Jump by 5</button>
    </div>
  )
}

export default App