import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Non from "./Pages/NotFound";
import Men from "./Pages/MenCollection";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="Men" element={<Men />} />
          <Route path="Men" element={<Men />} />
          <Route path="Men" element={<Men />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/contact/:id" element={<Contact />} />                            //for dynamic Routing */}
        <Route path="*" element={<Non />} />                                              //for unwanted paaath
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
