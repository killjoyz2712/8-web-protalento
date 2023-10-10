import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link className="boton" to="/">Home</Link>
        <Link className="boton" to="blog/1">Blog Programacion</Link>
        <Link className="boton" to="blog/2">Blog Vida Cotidiana</Link>
        <Link className="boton" to="contacto">Contacto</Link>
      </nav>
    </>
  );
}

export default App;

