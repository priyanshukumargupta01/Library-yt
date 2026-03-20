import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/contact" element={<Contact /> } />
      </Routes>
      <Footer />
      
    </div>
  );
};

export default App;
