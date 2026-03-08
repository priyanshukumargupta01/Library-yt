import React from 'react'

const App = () => {

  // sessionStorage.clear()
  // localStorage.clear()

  /*
  // localStorage.setItem("user","Priyanshu")
  // localStorage.setItem("Age","20") 
  const user = localStorage.getItem("user")
  const age = localStorage.getItem("Age")
  console.log(user,age);
  */

  // const user={
  //  name: "pk",
  //  age:20,
  //  city:"gaya"
  // }
  // localStorage.setItem("user",JSON.stringify(user))
  const a = JSON.parse(localStorage.getItem("user"))
  console.log(a);
  

  return (
    <div>App</div>
  )
}

export default App