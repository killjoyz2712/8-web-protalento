import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx'
import Home from "../views/Home.jsx";
import Blog from "../views/Blog.jsx";
import Contacto from "../views/Contacto.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contacto" element={<Contacto />} />
        {/* pagina 404 */}
        <Route path="*" element={<h3> Page not found 404 </h3>} />
      </Routes>
    </>
  );
}

export default App;