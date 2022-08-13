// Icons
import { HiUsers, HiBriefcase } from 'react-icons/hi';

const Pograms = () => {
  return (
    <div className="bg-[#EDEDED] p-3  py-10 md:p-36 md:px-48 relative">
      <img src="/Assets/vectorBack.png" alt="vector" className="absolute bottom-0 -right-24 invisible md:visible" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="dark:bg-secondary dark:text-primary bg-primary p-10 z-20">
          <div className="flex">
            <div className="bg-[#E6692E33] opacity-80 rounded-full p-4 text-orange">
              <HiUsers size="2rem" />
            </div>
          </div>
          <h1 className="text-3xl font-bold my-5">Candidates</h1>
          <p>
            We are dedicated to matching highly skilled professionals to the right business, with the right team. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .
          </p>
          <p className="mt-8 text-orange text-lg cursor-pointer">Learn more</p>
        </div>
        <div className="dark:bg-secondary dark:text-primary bg-primary p-10 z-20">
          <div className="flex">
            <div className="bg-[#11984B33] opacity-80 rounded-full p-4 text-[green]">
              <HiBriefcase size="2rem" />
            </div>
          </div>
          <h1 className="text-3xl font-bold my-5">Employers</h1>
          <p>
            We exist because businesses want to hire the best people.. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Enim vulputate aliquam arcu .
          </p>
          <p className="mt-8 text-orange text-lg cursor-pointer">Learn more</p>
        </div>
      </div>
    </div>
  );
};

export default Pograms;
