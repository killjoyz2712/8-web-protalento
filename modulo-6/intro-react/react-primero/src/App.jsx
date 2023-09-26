import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
function App() {
  const [count, setCount] = useState(0)
  const hola = "Hola mundo"
  return (
    <div>
      {hola} 
      <Navbar/>
    </div>
    
  )
}

export default App
