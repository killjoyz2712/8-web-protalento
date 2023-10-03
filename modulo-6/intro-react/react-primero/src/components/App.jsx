import Navbar from './Navbar'
import Card from './Card'
import Hero from './Hero'
function App() {
  // const [count, setCount] = useState(0)
  const hola = 'Hola mundo'

  return (
    <div>
      <Navbar/>
      <Hero titulo="Hola mundo"></Hero>
      <div className="container mt-5">
        <div className="columns">
          <Card texto={hola} imagen="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"/>
          <Card texto="Buenas tardes Componente" imagen="https://images.unsplash.com/photo-1536890274788-51861e124205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
          <Card texto="Buenas noches Componente" imagen="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
        </div>
      </div>
      <Hero titulo="Adios mundo"></Hero>

    </div>
  )
}

export default App
