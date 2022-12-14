import Navbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/HeroSection/Hero';
import ChooseUs from '../Components/ChooseUs/ChooseUs';
import Team from '../Components/Team/Team';
import News from '../Components/News/News';
import Pograms from '../Components/Pograms/Pograms';
import Carrer from '../Components/Carrer/Carrer';
import Footer from '../Components/Footer/footer';
import Copyright from '../Components/CpoyRight/Copyright';

const Home = () => {
  return (
    <div className="font-primary font-normal not-italic">
      <Navbar />
      <HeroSection />
      <div className="relative">
        <img
          src="/Assets/vector.png"
          alt="Vector"
          className="absolute top-[35rem] -left-[50px] invisible md:visible z-20"
        />
        <ChooseUs />
        <Team />
      </div>
      <News />
      <Pograms />
      <Carrer />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
