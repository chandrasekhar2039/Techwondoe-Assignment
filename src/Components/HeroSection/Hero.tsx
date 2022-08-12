const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(/Assets/Banner.png)',
      }}
      className="min-h-screen bg-center bg-cover flex justify-center align-center relative"
    >
      <h1 className="text-primary text-4xl md:text-6xl absolute top-1/3 z-10 lg:invisible">Take the leap with us</h1>
      <img
        src="/Assets/Bannervector.png"
        alt="vector"
        className="invisible md:visible md:absolute md:bottom-0 md:right-0 md:h-5/6 "
      />
      <img
        src="/Assets/MobileBanner.png"
        alt="vector"
        className="sm:invisible absolute h-3/4 right-0 bottom-0 left-0"
      />
    </div>
  );
};

export default HeroSection;
