import React, { useEffect, useRef, useState } from "react";
import home1 from "../assets/diro1.jpg";
import home2 from "../assets/foot.jpg";
import home3 from "../assets/gitlvoly.jpg";
import home4 from "../assets/team.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  const imagesRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (imagesRef.current) {
      observer.observe(imagesRef.current);
    }
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      if (imagesRef.current) {
        observer.unobserve(imagesRef.current);
      }
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about-section"
      className="bg-black text-white px-10 py-16  hero2-container relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={headingRef}
          className={`text-[60px] font-bold text-center font-[Genos] mb-3 transition-transform duration-1000 ease-in-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          ABOUT PACE
        </h2>
        <div className="w-150 border-t border-gray-500 mx-auto mb-8"></div>

        <div className="grid md:grid-cols-2 gap-10">
          <div
            className={`text-lg leading-relaxed  transition-transform duration-1000 ease-in-out`}
          >
            <p>
              The annual sports fest of{" "}
              <b>ARMY INSTITUTE of TECHNOLOGY, PUNE</b> is one of the largest of
              its kind in <b>PUNE</b> and an energy-packed event.
            </p>
            <br />
            <p>
              Colleges from all over Pune participate in the fest every year
              with more than <b>4000 participants</b> taking part. Teams from
              prestigious institutes like <b>AFMC, CME, NDA, BEG, INA</b> also
              grace the event while competing fiercely.
            </p>
            <br />
            <p>
              PACE has grown leaps and bounds over the years and has
              consistently attracted participants from all over India. It has
              been living up to the expectations of thousands of participants
              who come here looking forward to the best events of their kind.
            </p>
          </div>

          {/* Image Grid */}
          <div
            className={`grid grid-cols-2 gap-4 p-4 rounded-lg transition-transform duration-1000 ease-in-out relative`}
          >
            {/* <div className="absolute inset-0 bg-gradient-to-b from-[#001E3A] to-[#80C2FF] opacity-80"></div> */}
            <img
              src={home1}
              alt="Sports Image 1"
              className="rounded-lg relative z-10 transform transition-transform duration-500 hover:scale-105"
            />
            <img
              src={home2}
              alt="Sports Image 2"
              className="rounded-lg relative z-10 transform transition-transform duration-500 hover:scale-105"
            />
            <img
              src={home3}
              alt="Sports Image 3"
              className="rounded-lg relative z-10 transform transition-transform duration-500 hover:scale-105"
            />
            <img
              src={home4}
              alt="Sports Image 4"
              className="rounded-lg relative z-10 transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Bottom Gradient - Full Width */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-[#001E3A] to-[#80C2FF] blur-2xl opacity-30"></div>
      <style jsx>{`
        /* Phone View (Below 500px) */
        @media (max-width: 500px) {
          .hero2-container {
            width: 150%;
            height: 200%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
