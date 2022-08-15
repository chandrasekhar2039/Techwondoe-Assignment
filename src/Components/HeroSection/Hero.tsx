import { useEffect, useState } from 'react';
// Api
import Api from '../../API/Endpoints';
import { H1 } from '../Typography/Typography';

const HeroSection = () => {
  const [data, setData] = useState<String>('');

  const getData = async () => {
    try {
      const res = await Api.GetData('herosection');
      setData(res.data.includes.Asset[0].fields.file.url);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(https:${data})`,
      }}
      className="min-h-screen bg-center bg-cover flex justify-center align-center relative"
    >
      <H1 cName="text-primary text-4xl md:text-6xl absolute top-1/3 z-10 lg:invisible">Take the leap with us</H1>
      <img
        src="/Assets/Herovector.png"
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
