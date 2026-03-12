


const App = () => {

  const btnClicked = async ()=>{
    const response = await axios.get("http://localhost:5173/")

    console.log(response);
    
  }

  return (
    <div>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}
export default App         