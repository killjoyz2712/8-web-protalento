import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Animal.css'
import Animal from './Animal'

function getRandoAnimal(){
  const animals = ['bird','cat','dog','gator','horse','cow']
  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  
  let [animales,setAnimales] = useState([])

  function agregar(){
    setAnimales([...animales,getRandoAnimal()])
  }

  function limpiar(){
    setAnimales([]);
  }

  const muestraAnimales = animales.map((animal,index)=>{
        return <Animal name = {animal} key={index}/>
  })

  
  return (
    <div className="App">
      <button onClick={agregar}>Clickeame</button>
      <button onClick={limpiar}>Limpiar</button>
      <br/>
      <div className='animales'>{muestraAnimales}</div>
    </div>
  )
}

export default App
