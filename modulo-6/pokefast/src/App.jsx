import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pokemon from './components/Pokemon'
function App() {

  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.currentTarget.value)
    console.log(input)
  }
  
  return (
    <div className="App">
      <input type="text" id="nombre" onWheel={onChange} />
      <Pokemon nombre={input}></Pokemon>
    </div>
  )
}

export default App
