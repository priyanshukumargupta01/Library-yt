import React from "react";

const App = () => {


  function hi(val) {
    console.log(val);
  }
  return (
    <div>
      <h1>HI, Priyanshu</h1>
      <button
        onClick={() => {
          console.log("button clicked");
        }}
      > 
        Change User
      </button>

      <input onChange={function(elem){
        hi(elem.target.value)
      }} type="text" placeholder="enter" />
    </div>
  );
};

export default App;
