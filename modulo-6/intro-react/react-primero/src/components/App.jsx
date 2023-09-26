import { useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0)
  const hola = "Hola mundo"
  const hola2 = import.meta.env.VITE_APP_NAME
  return (
    <div>
      <Navbar/>
      <h1>{hola}</h1>
      <div className="columns">
        <Card/>
        <Card/>
        <Card/>
      </div>
  </div>
  )
}

export default App
