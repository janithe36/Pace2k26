import React, { useEffect, useRef, useState } from "react";
import cricket from "../assets/cricket.png";
import football from "../assets/football.png";
import logo from "../assets/bg1.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative bg-black hero-container text-white h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="relative text-center z-20 flex items-center justify-center gap-8 lg:gap-20 lg:flex-row flex-col">
        <img
          src={cricket}
          alt="Cricketer"
          className={`w-1/6 z-10 transform transition-transform duration-1000 ${
            isVisible ? "translate-x-0" : "-translate-x-full"
          } hidden lg:block`}
        />

        <div className="relative text-center">
          <img
            src={logo}
            alt="PACE Logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] opacity-15 z-0"
          />

          <h1
            className={`relative text-[200px] font-bold font-[Genos] tracking-wide uppercase transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white",
              zIndex: 10,
            }}
          >
            PACE
          </h1>

          <button className="relative mt-3 text-xl font-semibold px-16 py-4 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105">
            <a
              href="https://unstop.com/college-fests/pace-2025-army-institute-of-technology-ait-pune-328040"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </button>
        </div>

        <img
          src={football}
          alt="Footballer"
          className={`w-1/6 z-10 transform transition-transform duration-1000 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          } hidden lg:block`}
        />
      </div>

      <style jsx>{`
        @media (max-width: 1000px) {
          .lg\:flex-row {
            flex-direction: column;
          }
          .w-1\/6 {
            width: 20%;
          }
          .text-[200px] {
            font-size: 150px;
          }
        }

        @media (max-width: 768px) {
          .w-1\/6 {
            width: 40%;
          }
          .text-[200px] {
            font-size: 120px;
          }
          .w-[90%] {
            width: 100%;
          }
        }

        @media (max-width: 500px) {
          .hero-container {
            width: 150vw;
            height: 100vh;
            overflow: hidden; /* Extra content hide karne ke liye */
            position: relative;
          }
        }

        .gradient-border {
          background: rgba(0, 8, 16, 0.2);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          border: none;
        }

        .gradient-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(
            200deg,
            #80c2ff 10%,
            rgba(18, 15, 15, 0) 60%
          );
          mask: linear-gradient(white 0 0) content-box,
            linear-gradient(white 0 0);
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default Hero;
