import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import udchalo from "../assets/udchalo.png";
import yogi from "../assets/yogi-motors.png";
import budani from "../assets/budhanibros.png";
import campus from "../assets/campus.png";
import uncle from "../assets/uncle (1)-Recovered.png";
import decat from "../assets/Decathlon_Logo24.svg.png";
import techno from "../assets/techno.png";
import study from "../assets/uscholarsstudyabroad-20250203-0001-removebg-preview.png";

const Sponsors = () => {
  const sponsors = [
    { name: "UdChalo", color: "bg-blue-500", image: udchalo },
    { name: "Yogi Motors", color: "bg-red-500", image: yogi },
    { name: "Budhani Bros", color: "bg-yellow-500", image: budani },
    { name: "Campus Times", color: "bg-green-500", image: campus },
    { name: "Decathlon", color: "bg-blue-500", image: decat },
    { name: "Uncle`s Kitchen", color: "bg-red-500", image: uncle },
    { name: "Techno Sport", color: "bg-yellow-500", image: techno },
    { name: "US Scholar Study", color: "bg-green-500", image: study },

  ];
 
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="bg-black font-[Genos] text-white hero3-container py-10 px-4 w-full"
    >
      <motion.h2
        initial={{ x: -100, opacity: 0}}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="text-center sm:text-5xl font-bold font-[Genos] mb-8"
      >
        PREVIOUS SPONSORS
      </motion.h2>

      {/* Sponsor Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-20 w-full px-2 sm:px-4">
      {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.2, ease: "easeInOut" }}
            className="relative w-full flex flex-col items-center rounded-xl shadow-md bg-gray-900"
          >
            <div className="w-full h-32 sm:h-40 bg-black flex justify-center items-center rounded-t-xl overflow-hidden">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
            <div
              className={`w-full h-8 sm:h-10 flex justify-center items-center ${sponsor.color} rounded-b-xl`}
            >
              <p className="text-white uppercase sm:text-lg">
                {sponsor.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      

      <style jsx>{`
        @media (max-width: 500px) {
          .hero3-container {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Sponsors;
