import Navbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/HeroSection/Hero';
import ChooseUs from '../Components/ChooseUs/ChooseUs';
import Team from '../Components/Team/Team';

const Home = () => {
  return (
    <div className="font-primary font-normal not-italic">
      <Navbar />
      <HeroSection />
      <div className="relative">
        <img
          src="/Assets/vector.png"
          alt="Vector"
          className="absolute top-[37.5rem] -left-[50px] invisible md:visible z-20"
        />
        <ChooseUs />
        <Team />
      </div>
    </div>
  );
};

export default Home;
