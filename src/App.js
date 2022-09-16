import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import { Routes , Route } from "react-router-dom";
import Services from "./components/services/services";
import Contactus from "./components/contactus/contactus";
import WhoWeAre from "./components/whoweare/whoweare";


// import Slider from "./components/Slider/Slider";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />

      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
