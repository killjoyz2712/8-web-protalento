import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Usuarios from './components/Usuarios'
import CrearUsuario from './components/CrearUsuario'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Listado de usuarios</Link>
        <Link to="/crear-usuario">Agregar usuario</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Usuarios/>}></Route>
        <Route path="/crear-usuario" element={<CrearUsuario/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
