import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  // we can also pass objects and arrays to the props in curly braces
  // eg. myObj = {
  //   userName: "Saakshi",
  //   age: 20
  // }
  // is an object and while passing it to the props, we can pass it like:
  // <Card obj={myObj} />

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
     <Card userName="Saakshi" btnText="click me"/>
     <Card userName= "Delba" btnText="visit me"/>
     <Card userName= "Delba" />

    </>
  )
}

export default App
