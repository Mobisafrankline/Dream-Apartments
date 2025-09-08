import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import DiverseInvestmentOptions from "./components/DiverseInvestmentOptions";
import Neighborhood from "./components/Neighborhood";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import About from "./components/About"; // Separate About page

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Projects />
                <Neighborhood />
                <DiverseInvestmentOptions />
                <Testimonials />
                <Contact />
              </>
            }
          />

          {/* About Page */}
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
