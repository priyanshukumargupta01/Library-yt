import React from "react"; 
import Navbar from "./component/card";
const name = "Priyanshu";

const App = () => {
  return (
    <div> 
      <Navbar />
      <h1 id="heading">Hi, my name is {name}</h1>
    </div>
  );
};

export default App;
