import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link className="boton" to="/">Home</Link>
        <Link className="boton" to="blog">Blog</Link>
        <Link className="boton" to="contacto">Contacto</Link>
      </nav>
    </>
  );
}

export default App;

