import Navbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/HeroSection/Hero';
import ChooseUs from '../Components/ChooseUs/ChooseUs';
import Team from '../Components/Team/Team';

const Home = () => {
  return (
    <div className="font-primary font-normal not-italic">
      <Navbar />
      <HeroSection />
      <ChooseUs />
      <Team />
    </div>
  );
};

export default Home;
