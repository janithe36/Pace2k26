
import Hero from "../components/Hero";
import SponsorWall from "../components/SponsorWall";
import SponsorSection from "../components/SponsorSection";
import EventSlider from "../components/EventSlider";
import Countdown from "../components/Countdown";
import TeamSection from "../components/TeamSection";
import Gallery from "../components/Gallery"
import AboutUs from "../components/AboutUs";


const Home = () => {
  return (
    <>
      <div className="mb-10">
        <Hero />
      </div>
      <div className="mb-25">
        <AboutUs />
      </div>
      <div className="mb-25">
        <Countdown />
      </div>
      <div className="mb-25">
        <EventSlider />
      </div>
      <div className="mb-25">
        <TeamSection />
      </div>
      <div className="mb-25">
        <SponsorWall />
      </div>
      <div>
        <Gallery />
      </div>
      <div className="mb-16">
        <SponsorSection />
      </div>
    </>
  );
};

export default Home;
