import "./App.css"
import { useState } from "react";

function App() {

  let [counter, setCounter]= useState(0)

  // let counter= 0;

  const addValue=()=>{
    // counter= counter+1;
    if(counter <20){
      setCounter(counter+1);
      console.log("value added", counter);
    }
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1);
      console.log("value removed", counter);
    }
  }

  return (
    <>
    <h1>Hello world!</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}> Increase value</button>
    <br/> <br/>
    <button onClick={removeValue}>Decrease Value</button>

    </>
  )
}

export default App
