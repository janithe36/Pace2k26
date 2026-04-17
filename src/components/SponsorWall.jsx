
import s1 from "../assets/udchalo.png";
import s2 from "../assets/yogi-motors.png";
import s3 from "../assets/budhanibros.png";
import s4 from "../assets/campus.png";
import s5 from "../assets/uncle (1)-Recovered.png";
import s6 from "../assets/Decathlon_Logo24.svg.png";
import s7 from "../assets/techno.png";
import s8 from "../assets/uscholarsstudyabroad-20250203-0001-removebg-preview.png";
import s9 from "../assets/accops.svg";

const logos = [s1, s2, s3, s4, s5, s6, s7, s8, s9];

const SponsorMarquee = () => {
  return (
    <section className="py-20 overflow-hidden">
      <h2 className="font-[genos] text-center text-4xl md:text-5xl font-bold text-white mb-14">
        Our Past Sponsors
      </h2>

      {/* Top Row (Left → Right) */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee-left flex w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="mx-10 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="sponsor"
                className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row (Right → Left) */}
      <div className="relative w-full overflow-hidden mt-14">
        <div className="marquee-right flex w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="mx-10 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="sponsor"
                className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style>{`
        .marquee-left {
          animation: marqueeLeft 25s linear infinite;
        }

        .marquee-right {
          animation: marqueeRight 25s linear infinite;
        }

        @keyframes marqueeLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default SponsorMarquee;
