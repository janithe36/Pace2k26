import React from 'react';
import brochure from "../assets/pace2025brochure.pdf"

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white  hero3-container font-[Genos] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left - PACE */}
          <div className="text-4xl font-bold mb-4 md:mb-0 md:text-5xl">PACE</div>

          {/* Center - Links */}
          <div className="flex flex-row md:flex-row justify-between space-x-20  text-center">
  <div className="flex flex-col space-y-2 mt-4 md:mt-0">
    <a href="#" className="hover:text-gray-300 text-lg">Home</a>
 <a href={brochure} className="text-lg text-white hover:text-gray-300" download>
          Brochure
        </a>
  </div>
  <div className="flex flex-col space-y-2 mt-4 md:mt-0">
    <a href="#" className="hover:text-gray-300">Register Now</a>
    <a href="https://linktr.ee/PACE2K25" className="hover:text-gray-300">Contact Us</a>
  </div>
</div>


          {/* Right - Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="mailto:pace2k2526@gmail.com" className="hover:text-gray-300" target='__blank'>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/aitsportsclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-gray-300" target='__blank'>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex px-8 py-4 justify-center items-center">
          <div className="w-full h-[2px] rounded-3xl opacity-30 bg-gray-200"></div>
        </div>

        <div className="text-center mt-2 text-gray-400">
          © 2026 PACE | Organized by AIT SPORTS CLUB
        </div>

        <style jsx>{`
          @media (max-width: 500px) {
            .container {
              flex-direction: row;
            }
          }

           @media (max-width: 500px) {
            .hero3-container {
              width: 150%;
              height: 200%;
            }
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Footer;
