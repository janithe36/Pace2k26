import React from "react";

const Register = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center hero10-container bg-black px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative z-10 text-center">
        STARTING SOON
      </h1>
      <style jsx>{`
        @media (max-width: 500px) {
          .hero10-container {
            height: 100vh;
            width: 150%;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
