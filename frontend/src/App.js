import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ExploreWorkPage from "./components/ExploreWorkPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore-work" element={<ExploreWorkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
