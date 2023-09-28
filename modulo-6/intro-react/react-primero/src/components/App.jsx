import Navbar from './Navbar'
import Card from './Card'
import Hero from './Hero'
function App() {
  // const [count, setCount] = useState(0)
  // const hola = "Hola mundo"

  return (
    <div>
      <Navbar/>
      <Hero></Hero>
      <div className="container mt-5">
        <div className="columns">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default App
