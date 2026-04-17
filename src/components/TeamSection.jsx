import { useState } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";

/* ---------------- TEAM DATA ---------------- */

const teams = {

  te: [
    {
      name: "Shivani Dogra",
      role: "Secretary",
      image: "../src/assets/TE-shivani.jpeg",
      instagram: "https://www.instagram.com/__shivani.8888?igsh=MXJrcHhrdWl5YjZ6dw==",
    },
    {
      name: "Dheeraj Pandey",
      role: "Secretary",
      image: "../src/assets/TE-pandu.jpeg",
      instagram: "https://www.instagram.com/dheerajpandey5513?igsh=MTU3Z3hpNnkwZ2dmMg==",
    },
    {
      name: "Sanshey",
      role: "Technical Head",
      image: "../src/assets/TE-me2.jpeg",
      instagram: "https://www.instagram.com/09_s.unshine?igsh=cG42a3o0cmg0dWJq",
    },
    {
      name: "Aditya Mahala",
      role: "Technical Head",
      image: "../src/assets/TE-mahala.jpeg",
      instagram: "https://www.instagram.com/viper_2324?igsh=dGx5cWN5b3gycGFq",
    },
    {
      name: "Piyush Kumar",
      role: "Management Head",
      image: "../src/assets/TE-piyush.jpeg",
      instagram: "https://www.instagram.com/piyushkumar__7?igsh=MXAxazh5aDNlaHd0Zg==",
    },
    {
      name: "Keshav Dangi",
      role: "Social Media Head",
      image: "../src/assets/TE-keshuu.jpeg",
      instagram: "https://www.instagram.com/keshavv_choudhary12?igsh=cHRzM2ZoM3Rtdmhr",
    },
    {
      name: "Ayush Bajetha",
      role: "Social Media Head",
      image: "../src/assets/TE-ayush.jpeg",
      instagram: "https://www.instagram.com/ayush_bajetha?igsh=bXk2dXB4ZzBlN2U1",
    },
    {
      name: "Rahul Triphati",
      role: "Technical Head",
      image: "../src/assets/TE-rahul.jpeg",
      instagram: "https://www.instagram.com/_rahul2k4?igsh=MWRmbXQ3aXM2ZXEydA==",
    },
    {
      name: "Shivang",
      role: "Sponsorship Head",
      image: "../src/assets/TE-shivang1.jpeg",
      instagram: "https://www.instagram.com/shiv_xng22?igsh=MXYxdnZ0ZXQ4OHFpeA==",
    },
    {
      name: "Kuldeep Bishnoi",
      role: "Designing Head",
      image: "../src/assets/TE-kuldeep.png",
      instagram: "https://www.instagram.com/_rk_15_03?igsh=MWFwbmRoZ2V3cG1zMA==",
    },
    {
      name: "Lalit Makhan Singh",
      role: "Registration Head",
      image: "../src/assets/TE-lalit.jpeg",
      instagram: "https://www.instagram.com/lalitsingh2004?igsh=bHo1OW03bTRqOGR6",
    },
    {
      name: "Paramjeet Singh",
      role: "Treasurer",
      image: "../src/assets/TE-param.jpeg",
      instagram: "https://www.instagram.com/paramjeet.20?igsh=MWg0MG5sbm92eTZnbg==",
    },
    {
      name: "Divyanshi",
      role: "Management Head",
      image: "../src/assets/TE-divyanshi.jpeg",
      instagram: "https://www.instagram.com/_diva_.314?igsh=bXJ4MWJ3Yms2ZGU=",
    },
    {
      name: "Aakash",
      role: "PR head",
      image: "../src/assets/TE-akash.jpeg",
      instagram: "https://www.instagram.com/aakashxyadav_?igsh=dHJrdTJld283N3p2",
    },
    
    // add 5 more...
  ],

  faculty: [
    {
      name: "Mr. Vishal Pardeshi",
      role: "Physical Director",
      image: "../src/assets/FAC-pd.jpeg",
      instagram: "#",
    },
    {
      name: "Prof. Asha P Sathe",
      role: "Faculty Incharge",
      image: "../src/assets/FAC-ash.jpeg",
      instagram: "#",
    },
    {
      name: "Mrs. Swati Salunkhe",
      role: "Faculty Member",
      image: "../src/assets/FAC-swati.jpeg",
      instagram: "#",
    },
  ],

  se: [
    {
      name: "Himanshu",
      role: "Joint Secretary",
      image: "../src/assets/SE-himanshu.jpeg",
      instagram: "https://www.instagram.com/himanshu_r27?igsh=MTNjN3F2djFhZnFudQ==",
    },
    {
      name: "Sagar",
      role: "Joint Secretary",
      image: "../src/assets/SE-sagar.jpeg",
      instagram: "https://www.instagram.com/sagar_d_2803?igsh=djNnb2luZnprbDNq",
    },
    {
      name: "Yogesh",
      role: "Joint Secretary",
      image: "../src/assets/SE-yogesh.jpeg",
      instagram: "https://www.instagram.com/jakhar_37?igsh=YTg1NW5mdnc5MXll",
    },
    {
      name: "Ritika",
      role: "Joint Secretary",
      image: "../src/assets/SE-ritika.jpeg",
      instagram: "https://www.instagram.com/ritikagautam375?igsh=a3p5ZjJqNjh3ZTA4",
    },
    {
      name: "Mahinder",
      role: "Joint Secretary",
      image: "../src/assets/SE-mah.jpeg",
      instagram: "https://www.instagram.com/jani_the0036?igsh=MW90dGpsaGpkYmRkYg==",
    },
    {
      name: "Shomya",
      role: "Joint Secretary",
      image: "../src/assets/SE-shomya.jpeg",
      instagram: "https://www.instagram.com/ranjan.shomya/",
    },
    {
      name: "Lokesh",
      role: "Joint Secretary",
      image: "../src/assets/SE-lokesh.jpeg",
      instagram: "https://www.instagram.com/_lokesh_vats?utm_source=qr&igsh=MWFzeXVpMG4zcGEyZQ==",
    },
    {
      name: "Aysha",
      role: "Joint Secretary",
      image: "../src/assets/SE-ayesha.png",
      instagram: "https://www.instagram.com/ayshabisht_12?utm_source=qr&igsh=MWs4bHhpcW00eTByeA==",
    },
    {
      name: "Sidhi",
      role: "Joint Secretary",
      image: "../src/assets/SE-siddhi.png",
      instagram: "https://www.instagram.com/_.siddhiii06?igsh=Nmg0Y2Y4dWh0cGtn&utm_source=qr",
    },
    {
      name: "Navdeep",
      role: "Joint Secretary",
      image: "../src/assets/SE-navdeep.png",
      instagram: "https://www.instagram.com/_bynv_/",
    },
    {
      name: "Punit",
      role: "Joint Secretary",
      image: "../src/assets/SE-puneet.png",
      instagram: "https://www.instagram.com/punit_phogat16?igsh=MTA3OHNjZm93bWF5OA==",
    },
    
    {
      name: "Manjeet",
      role: "Joint Secretary",
      image: "../src/assets/SE-manjeet.jpeg",
      instagram: "https://www.instagram.com/manusingh090?utm_source=qr&igsh=MWxqNmE4cW8yZ2NnbQ==",
    },
    {
      name: "Rahul",
      role: "Joint Secretary",
      image: "../src/assets/SE-rahul.jpeg",
      instagram: "https://www.instagram.com/r.ahul_0018?igsh=N2NmcDV1MW05dGk1",
    },
    {
      name: "Rohan",
      role: "Joint Secretary",
      image: "../src/assets/SE-rohan.jpeg",
      instagram: "https://www.instagram.com/rohanchoudhary21?igsh=c3l6YXRzcW95MDFy",
    },
    {
      name: "Lakhshya ",
      role: "Joint Secretary",
      image: "../src/assets/SE-lakshya.jpeg",
      instagram: "https://www.instagram.com/lakshya.y_?igsh=ejUxa3lidnlxNWdn",
    },
    {
      name: "Anagha",
      role: "Joint Secretary",
      image: "../src/assets/SE-anagha.png",
      instagram: "https://www.instagram.com/_a_nagha_._?utm_source=qr&igsh=ZWw4NW40M3Y0OWQ5",
    },
    {
      name: "Akash",
      role: "Joint Secretary",
      image: "../src/assets/SE-akash.png",
      instagram: "https://www.instagram.com",
    },
    {
      name: "Shivansh",
      role: "Joint Secretary",
      image: "../src/assets/SE-shivansh.jpeg",
      instagram: "https://www.instagram.com/shivanshhh_28?igsh=MTVwYW80YmJieWFicg==",
    },{
      name: "Tanu",
      role: "Joint Secretary",
      image: "../src/assets/SE-tanu.jpeg",
      instagram: "#",
    },
    // add ~9 more...
  ],
  event: [
    {
      name: "Akash Takhar",
      role: "Kabaddi Head",
      image: "../src/assets/EH-akash.jpeg",
      instagram: "#",
    },
    {
      name: "Millan Patra",
      role: "Basketball Head",
      image: "../src/assets/EH-millan.jpeg",
      instagram: "#",
    },
    {
      name: "Ajay",
      role: "Basketball Head",
      image: "../src/assets/EH-ajay.jpeg",
      instagram: "#",
    },
    {
      name: "Ritika",
      role: "Squash Head",
      image: "../src/assets/EH-ritika.jpeg",
      instagram: "#",
    },
    {
      name: "Shivang",
      role: "Squash Head",
      image: "../src/assets/TE-shivang1.jpeg",
      instagram: "#",
    },
    {
      name: "Sunandha",
      role: "Football Head",
      image: "../src/assets/EH-sunandha.jpeg",
      instagram: "#",
    },
    {
      name: "Manish",
      role: "Football Head",
      image: "../src/assets/EH-manish.jpeg",
      instagram: "#",
    },
    {
      name: "Laxmi",
      role: "Volleyball Head",
      image: "../src/assets/EH-laxmi.jpeg",
      instagram: "#",
    },
    {
      name: "Mohit",
      role: "Volleyball Head",
      image: "../src/assets/EH-mohitk.jpeg",
      instagram: "#",
    },
    {
      name: "Sweta",
      role: "Cricket Head",
      image: "../src/assets/EH-shweta.jpeg",
      instagram: "#",
    },
    {
      name: "Mohit",
      role: "Cricket Head",
      image: "../src/assets/EH-mohit.jpeg",
      instagram: "#",
    },
    {
      name: "Shivani",
      role: "Badminton Head",
      image: "../src/assets/EH-shivani.jpeg",
      instagram: "#",
    },
    {
      name: "Daksh",
      role: "Badminton Head",
      image: "../src/assets/EH-daksh.jpeg",
      instagram: "#",
    },
    {
      name: "Sonali",
      role: "Table Tennis Head",
      image: "../src/assets/EH-sonali.jpeg",
      instagram: "#",
    },
    {
      name: "Akash",
      role: "Table Tennis Head",
      image: "../src/assets/EH-akashtt.jpeg",
      instagram: "#",
    },
    {
      name: "Pooja",
      role: "Lawn Tennis Head",
      image: "../src/assets/EH-pooja.jpeg",
      instagram: "#",
    },
    {
      name: "Rayan",
      role: "Lawn Tennis Head",
      image: "../src/assets/EH-rayan.jpeg",
      instagram: "#",
    },
    {
      name: "Kajal",
      role: "Chess Head",
      image: "../src/assets/EH-kajal.jpeg",
      instagram: "#",
    },
    {
      name: "Anirudh",
      role: "Chess Head",
      image: "../src/assets/EH-anirudh.jpeg",
      instagram: "#",
    },
    
    // add ~9 more...
  ],
};

/* ---------------- COMPONENT ---------------- */

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("te");
  const [index, setIndex] = useState(0);

  const teamMembers = teams[activeTab];

  const cardsPerView =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const nextSlide = () => {
    if (index + cardsPerView < teamMembers.length) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIndex(0);
  };

  return (
    <section id="team-section" className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="text-lg uppercase font-[Genos] tracking-widest text-blue-500">
          Our Team Members
        </p>
        <h2 className="text-5xl font-[Genos] font-bold text-white mt-2">
          Our Sporty Team
        </h2>
        <p className="text-xl text-zinc-400  max-w-xl mx-auto mt-4">
          Meet the team that sets the pace.
        </p>

        {/* -------- TABS -------- */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {["te", "faculty", "se","event"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2 rounded-full font-[Genos] text-sm uppercase tracking-wider transition
                ${
                  activeTab === tab
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700"
                }`}
            >
              {tab === "te"
                ? "TE Members"
                : tab === "faculty"
                ? "Faculty Members"
                : tab === "se"
                ? "SE Members"
              : "Event Heads"}
            </button>
          ))}
        </div>
      </div>

      {/* -------- SLIDER -------- */}
      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                index * (100 / cardsPerView)
              }%)`,
            }}
          >
            {teamMembers.map((member, i) => (
  <div
    key={i}
    className="min-w-full md:min-w-[33.3333%] px-4"
  >
    <div className="relative h-[360px] rounded-2xl overflow-hidden group shadow-xl">
      
      {/* Background Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Bottom Info Card */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-zinc-900">
            {member.name}
          </h3>
          <p className="text-xs text-zinc-500">
            {member.role}
          </p>
        </div>

        <a
          href={member.instagram}
          target="_blank"
          className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-blue-500 transition"
        >
          <Instagram className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
))}
          </div>
        </div>

        {/* -------- CONTROLS -------- */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-800 hover:bg-blue-500 p-3 rounded-full text-white transition disabled:opacity-30"
          disabled={index === 0}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-800 hover:bg-blue-500 p-3 rounded-full text-white transition disabled:opacity-30"
          disabled={index + cardsPerView >= teamMembers.length}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
