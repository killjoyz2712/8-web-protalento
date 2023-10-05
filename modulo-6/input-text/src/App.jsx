import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')
  const nombreFijo= "Roberto"

  const nombrar = async (evt) =>{
    // nombre = "Adrian" /** ESTO ESTA MAL */
    // setNombre("Adrian")
    setNombre(evt.target.value)

    // Alterativia
    // const input = evt.target
    // setNombre(input.value)

  }

  return (
    <>
      <h1 id="nombre">Hola {nombre}</h1>
      <input type="text" onChange={nombrar} placeholder="Ingresa un nombre"></input>
      <button onClick={nombrar}>Nombrar</button>
      <h1>Adios {nombre}</h1>
      <p>Hecho por {nombreFijo}</p>
    </>
    )
}

export default App
