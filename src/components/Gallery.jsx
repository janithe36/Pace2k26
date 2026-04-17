import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight, Play, Pause
} from "lucide-react";

/* =======================
   IMAGE IMPORTS (49)
======================= */
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";

import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";

import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import img27 from "../assets/img27.jpg";
import img28 from "../assets/img28.jpg";
import img29 from "../assets/img29.jpg";
import img30 from "../assets/img30.jpg";

import img31 from "../assets/img31.jpg";
import img32 from "../assets/img32.jpg";
import img33 from "../assets/img33.jpg";
import img34 from "../assets/img34.jpg";
import img35 from "../assets/img35.jpg";
import img36 from "../assets/img36.jpg";
import img37 from "../assets/img37.jpg";
import img38 from "../assets/img38.jpg";
import img39 from "../assets/img39.jpg";
import img40 from "../assets/img40.jpg";

import img41 from "../assets/img41.jpg";
import img42 from "../assets/img42.jpg";
import img43 from "../assets/img43.jpg";
import img44 from "../assets/img44.jpg";
import img45 from "../assets/img45.jpg";
import img46 from "../assets/img46.jpg";
import img47 from "../assets/img47.jpg";
import img48 from "../assets/img48.jpg";
import img49 from "../assets/img49.jpg";

/* =======================
   IMAGE ARRAY
======================= */
const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25,
  img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35,
  img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45,
  img46, img47, img48, img49,
];

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const isFirstRender = useRef(true);
   

  // refs for thumbnails
  const thumbRefs = useRef([]);

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  /* =======================
     AUTO-SCROLL LOGIC
  ======================= */
  useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }

  thumbRefs.current[activeIndex]?.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
}, [activeIndex]);

  /* =======================
     AUTO PLAY LOGIC
  ======================= */
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextImage();
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

 
  return (
    <div id="gallery-section" className="dark bg-black min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">

        {/* MAIN IMAGE */}
        <div className="relative rounded-xl overflow-hidden border border-neutral-800">
          <img
            src={images[activeIndex]}
            alt="Gallery preview"
            className="w-full h-[420px] md:h-[520px] object-cover"
          />

          {/* PLAY / PAUSE BUTTON */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-full text-sm transition"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>


          {/* LEFT ARROW */}
          <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-800 hover:bg-blue-500 p-3 rounded-full text-white transition disabled:opacity-30"
          
        >
          <ChevronLeft />
        </button>

          {/* RIGHT ARROW */}
          <button
                    onClick={nextImage}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-800 hover:bg-blue-500 p-3 rounded-full text-white transition disabled:opacity-30"
                    
                  >
                    <ChevronRight />
                  </button>
        </div>

        {/* THUMBNAILS */}
        <div className="mt-4 bg-neutral-900 rounded-xl px-4 py-3">
          <div className="flex gap-3 overflow-x-hidden">
            {images.map((img, index) => (
              <button
                key={index}
                ref={(el) => (thumbRefs.current[index] = el)}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPlaying(true);
                }}
                className={`flex-shrink-0 border rounded-md overflow-hidden transition
                  ${
                    index === activeIndex
                      ? "border-white"
                      : "border-neutral-700 hover:border-neutral-400"
                  }`}
              >

                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-16 w-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
