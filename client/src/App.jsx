import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import './App.css'

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";
import { Logout } from "./pages/Logout";

import Blogs from "./pages/Blogs";
import Detector from "./pages/Detector";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NewsDetector from "./pages/NewsDetector";


import History from "./pages/History";
import ContactHistory from "./pages/ContactHistory";


import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation Layout */}
        <NavBar />

        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/detector" element={<Detector />} />
          <Route path="/blogs" element={<Blogs />} />
          // Inside your Routes:
          <Route path="/detectorx" element={<NewsDetector />} />

          <Route path="/history" element={<History />} />
          {/* {/* <Route path="/*" element={<error />} /> */}



// Inside your Routes component
<Route path="/contact-history" element={<ContactHistory />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
