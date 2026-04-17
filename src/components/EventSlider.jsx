import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import volley from "../assets/volleyball.png";
import football from "../assets/football.png";
import basketball from "../assets/basketball.png";
import squash from "../assets/squash.png";
import lawnTennis from "../assets/lawn tennis.png";
import tableTennis from "../assets/tt.png";
import badminton from "../assets/badminton.png";
import chess from "../assets/chess.png";
import kabaddi from "../assets/kabaddi.png";
import cricket from "../assets/cricket2.png";
import pace from "../assets/PACE 2025 RULEBOOK.pdf";
import volleyballRulebook from "../assets/Volleyball.pdf";
import footballRulebook from "../assets/Football.pdf";
import basketballRulebook from "../assets/Basketball.pdf";
import squashRulebook from "../assets/Squash.pdf";
import lawnTennisRulebook from "../assets/Lawn Tennis.pdf";
import tableTennisRulebook from "../assets/Table Tennis.pdf";
import badmintonRulebook from "../assets/Badminton.pdf";
import chessRulebook from "../assets/Chess.pdf";
import kabaddiRulebook from "../assets/Kabaddi.pdf";
import cricketRulebook from "../assets/Cricket.pdf";
const events = [
  {
    id: 1,
    title: "VOLLEYBALL",
    image: volley,
    categories: ["ENTRY FEE", "", "MEN", "WOMEN"],
    prices: ["", "", "", "", "₹2500/-", "₹1500/-"],
    rulebook: volleyballRulebook,
    bgGradient:
      "radial-gradient(circle at 75% 80%, rgba(255, 99, 71, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)",
  },
  {
    id: 2,
    title: "KABADDI",
    image: kabaddi,
    categories: ["ENTRY FEE", "MEN"],
    prices: ["", "", "₹2500/-"],
    rulebook: kabaddiRulebook,
    bgGradient:
      "radial-gradient(circle at 75% 80%, rgba(10, 79, 80, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)",
  },
  {
    id: 3,
    title: "FOOTBALL",
    image: football,
    categories: ["ENTRY FEE", "", "MEN-6", "MEN-11", "WOMEN"],
    prices: ["", "", "", "", "", "₹2000/-", "₹3500/-", "₹1500/-"],
    rulebook: footballRulebook,
    bgGradient:
      "radial-gradient(circle at 75% 80%, rgba(0, 191, 255, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)",
  },
  {
    id: 4,
    title: "BASKETBALL",
    image: basketball,
    categories: ["ENTRY FEE", "", "MEN", "WOMEN"],
    prices: ["", "", "", "", "₹2500/-", "₹1500/-"],
    rulebook: basketballRulebook,
    bgGradient:
      "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)",
  },
  {
    id: 5,
    title: "CRICKET",
    image: cricket,
    categories: ["ENTRY FEE", "", "MEN", "WOMEN"],
    prices: ["", "", "", "", "₹4500/-", "₹999/-"],
    rulebook: cricketRulebook,
    bgGradient:
      "radial-gradient(circle at 75% 80%, rgba(10, 79, 80, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)",
  },
  {
    id: 6,
    title: "SQUASH",
    image: squash,
    categories: ["ENTRY FEE", "", "MEN-S", "WOMEN-S", "MEN-D"],
    prices: ["", "", "", "", "₹300/-", "₹300/-", "₹600/-"],
    rulebook: squashRulebook,
    bgGradient:
      "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)",
  },
  {
    id: 7,
    title: "LAWN TENNIS",
    image: lawnTennis,
    categories: ["ENTRY FEE", "", "MEN", "WOMEN"],
    prices: ["", "", "", "₹400/-", "₹200/-"],
    rulebook: lawnTennisRulebook,
    bgGradient:
      "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)",
  },
  {
    id: 8,
    title: "TABLE TENNIS",
    image: tableTennis,
    categories: ["MEN", "WOMEN","MEN-T","WOMEN-T"],
    prices: ["₹300/-","₹200/-","800","500"],
    rulebook:tableTennisRulebook,
    bgGradient:
      "radial-gradient(circle at 75% 80%, rgba(0, 191, 255, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)",
  },
  {
    id: 9,
    title: "BADMINTON",
    image: badminton,
    categories: ["MEN", "WOMEN", "MIXED","MEN-T","WOMEN-T",],
    prices: ["₹300/-", "₹200/-", "₹500/-","1000","700"],
    rulebook: badmintonRulebook,
    bgGradient:
      "radial-gradient(circle at 75% 80%, rgba(10, 79, 80, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)",
  },
  {
    id: 10,
    title: "CHESS",
    image: chess,
    categories: ["ENTRY FEE", "", "MEN-T", "WOMEN-I"],
    prices: ["", "", "", "₹500/-", "₹100/-"],
    rulebook: chessRulebook,
    bgGradient:
      "radial-gradient(circle at 75% 80%, rgba(255, 99, 71, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)",
  },
];

function EventSlider() {
  return (
    <div className="min-h-screen bg-black p-8 hero8-container flex flex-col items-center">
      <h1 className="items-center text-5xl font-[Genos] font-bold text-white mb-8">
        MAJOR EVENTS
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        initialSlide={4}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 3,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="w-full py-12"
      >
        {events.map((event) => (
          <SwiperSlide
            key={event.id}
            className="w-[450px] h-[600px] transition-transform duration-300 scale-75 opacity-50 swiper-slide"
          >
            <div
              className="relative h-full rounded-2xl overflow-hidden shadow-lg"
              style={{
                background: event.bgGradient,
                borderRadius: "15px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div className="relative z-10 flex flex-col items-center h-full p-8">
                {/* Event Title with dynamic color */}
                <h2
                  className="text-4xl font-[Genos] font-bold mb-8"
                  style={{ color: getTitleColor(event.bgGradient) }}
                >
                  {event.title}
                </h2>

                {/* Event Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-50 h-60 mb-12 object-contain"
                />

                {/* Event Details */}
                <div className="w-full space-y-4 mb-auto">
                  <div className="flex justify-between items-center font-[Genos] font-bold text-white text-xl">
                    {event.categories.map((category, index) => (
                      <span key={index}>{category}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center font-[Genos] text-white text-xl">
                    {event.prices.map((price, index) => (
                      <span key={index}>{price}</span>
                    ))}
                  </div>
                </div>

                {/* Button with #AE5201 Background */}
                <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <a href={event.rulebook} className="bg-[#AE5201] hover:bg-[#924401] text-white font-[Genos] px-8 py-3 rounded-md text-lg transition-colors" download>
                    Event Details →
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        /* Phone View (Below 500px) */
        @media (max-width: 500px) {
          .hero8-container {
            width: 150%;
            height: 200%;
          }
        }
      `}</style>
    </div>
  );
}

// Function to dynamically set the title color based on the background gradient
function getTitleColor(gradient) {
  const colorMap = {
    "radial-gradient(circle at 75% 80%, rgba(145, 242, 166, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)":
      "#91F2A6", // New Gradient with #91F2A6
    "radial-gradient(circle at 75% 80%, rgba(255, 99, 71, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)":
      "#FF6347", // Volleyball
    "radial-gradient(circle at 75% 80%, rgba(10, 79, 80, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)":
      "#0A4F50", // Cricket
    "radial-gradient(circle at 75% 80%, rgba(0, 191, 255, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)":
      "#00BFFF", // Football
    "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)":
      "#FFA500", // Basketball
  };

  return colorMap[gradient] || "#FFFFFF"; // Default to white if gradient doesn't match
}

export default EventSlider;
