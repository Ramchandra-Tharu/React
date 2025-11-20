import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const addCount = ()=>{
    setCounter(counter +1)
  }
  const removeCount = () =>{
    setCounter(counter-1)
  }
  
  return (
    <div>
      <h1>hey sirzan</h1>
      <h2>welcome to conter to counter:</h2>
      <h4>counter  = {counter} </h4>
      <button
      onClick={addCount}
      >Counter ++ </button>
      <br />

      <button 
      onClick={removeCount}>Counter -- </button>
    </div>
    

  )
}
export default Counter;