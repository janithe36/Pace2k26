import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import OurTeam from "./Pages/OurTeam";
 import "./App.css";
import TeamSection from "./components/TeamSection";
import Gallery from "./components/Gallery";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Loader will disappear after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
       (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/team" element={<TeamSection />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </>
      )
    </>
  );
}

export default App;