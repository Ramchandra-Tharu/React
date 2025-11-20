import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () =>{
    setCounter (counter + 1)
  }
  const removeValue = ()=>{
    setCounter(counter-1)
  }


  return(
    <div>
      <h1>Hey Sirzan </h1>
      <h3>Welcome to increase button </h3>
      <h4>counter:{counter}</h4>
      <button
      onClick = {addValue}
      > Counter ++ </button>
      <br />
      <button onClick={removeValue}> Counter --</button>
    </div>

  )
 
}


export default App
