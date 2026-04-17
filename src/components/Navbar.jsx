import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons
import MobileNavbar from "./MobileNavbar"; 
import brochure from "../assets/pace2025brochure.pdf"
import pace from "../assets/PACE 2025 RULEBOOK.pdf"
import TeamSection from "./TeamSection";
import Gallery from "./Gallery";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToGallery = () => {
    const gallerySection = document.getElementById("gallery-section");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToTeam = () => {
    const teamSection = document.getElementById("team-section");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black w-full hero7-container relative">
      <div className="container mx-auto py-5 px-4">
        {/* Desktop Navbar */}
        <nav className="flex items-center justify-between flex-col lg:flex-row">
          <a href="/">
          <h1 className="text-2xl font-bold font-[Genos] text-white cursor-pointer mb-4 lg:mb-0">
            AIT SPORTS CLUB
          </h1>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
          <a href={brochure} className="text-lg font-[Genos] text-white hover:text-gray-300" download>
          Brochure
        </a>
         <a href={pace} className="text-lg font-[Genos] text-white hover:text-gray-300" download>
                   Rulebook
                 </a>
                 <a href="#" onClick={handleScrollToTeam} className="text-lg font-[Genos] text-white hover:text-gray-300 hover:cursor-pointer" >
                   Team
                 </a>
                 <a href="#" onClick={handleScrollToGallery} className="text-lg font-[Genos] text-white hover:text-gray-300 hover:cursor-pointer" >
                   Gallery
                 </a>
            
            <a href="#" className="text-xl font-[Genos] text-white hover:text-gray-300" onClick={handleScrollToAbout}>
              About
            </a>

            <a href="https://linktr.ee/PACE2K25" className="text-xl font-[Genos] text-white hover:text-gray-300">
              Contact Us
            </a>
          </div>

          {/* Desktop Register Button */}
          <div className="hidden lg:flex">
  <a
    href="https://unstop.com/college-fests/pace-2025-army-institute-of-technology-ait-pune-328040"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 text-sm font-[Genos] border-2 rounded-lg border-white text-white hover:bg-white hover:text-black"
  >
    Register Now
  </a>
</div>

        </nav>
      </div>

      {/* Mobile Menu Button (Positioned to the right side) */}
      <button 
        className="lg:hidden text-white absolute top-5 right-5 z-50" 
        onClick={toggleMobileMenu}
      >
        {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navbar (Imported Component) */}
      <MobileNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      <style jsx>{`
        /* Phone View (Below 500px) */
        @media (max-width: 500px) {
          .hero7-container {
            width: 150%;
            height: 200%;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
