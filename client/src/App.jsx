import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import './App.css'

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation Layout */}
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
