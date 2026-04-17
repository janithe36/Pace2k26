import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "../src/assets/abt1.jpeg",
  "../src/assets/abt2.jpeg",
  "../src/assets/abt3.jpeg",
  "../src/assets/abt4.jpeg",
  "../src/assets/diro1.jpg",
  "../src/assets/img45.jpg",
];

export default function AboutUs() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");

  const next = () => {
    setDirection("next");
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setDirection("prev");
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about-section" className="w-full bg-black text-white py-20 px-6 flex justify-center">
      
      {/* CSS Animations */}
      <style>
        {`
          .slide-up {
            animation: slideUp 0.7s ease-in-out;
          }

          .slide-down {
            animation: slideDown 0.7s ease-in-out;
          }

          @keyframes slideUp {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE SLIDER */}
        <div className="relative w-full h-[360px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">

          <img
            key={current}
            src={images[current]}
            alt="PACE Sports"
            className={`absolute inset-0 w-full h-full object-cover
              ${direction === "next" ? "slide-up" : "slide-down"}
            `}
          />

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full hover:bg-white hover:text-black transition"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full hover:bg-white hover:text-black transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* TEXT */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-wide">About PACE</h2>

          <p>
              The annual sports fest of{" "}
              <b>ARMY INSTITUTE of TECHNOLOGY, PUNE</b> is one of the largest of
              its kind in <b>PUNE</b> and an energy-packed event.
            </p>
            
            <p>
              Colleges from all over Pune participate in the fest every year
              with more than <b>5000 participants</b> taking part. Teams from
              prestigious institutes like <b>AFMC, CME, NDA, BEG, INA</b> also
              grace the event while competing fiercely.
            </p>
            
            <p>
              PACE has grown leaps and bounds over the years and has
              consistently attracted participants from all over India. It has
              been living up to the expectations of thousands of participants
              who come here looking forward to the best events of their kind.
            </p>

          {/* STATS */}
          <div className="flex gap-10 pt-6">
            <Stat number="5000+" label="Participants" />
            <Stat number="10+" label="Sports" />
            <Stat number="100+" label="Colleges" />
          </div>
        </div>

      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 border-2 border-white/40 rounded-full flex items-center justify-center text-2xl font-bold">
        {number}
      </div>
      <p className="mt-2 text-gray-400">{label}</p>
    </div>
  );
}
