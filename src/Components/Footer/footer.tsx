// Icons
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="dark:bg-secondary bg-primary dark:text-primary grid grid-cols-2 gap-6 p-4 pt-12 pb-8 md:grid-cols-7 md:p-32">
      <div className="text-orange md:col-span-3 hidden md:flex">
        <BsFacebook size="1.2rem" className="mr-5" />
        <BsLinkedin size="1.2rem" className="mr-5" />
        <BsInstagram size="1.2rem" className="mr-5" />
      </div>
      <div>
        <p>Home</p>
        <p>About</p>
        <p>Candidates</p>
      </div>
      <div>
        <p>Employers</p>
        <p>Latest News</p>
        <p>Contact</p>
      </div>
      <div className="break-words">
        <p>+62 (0) 9 124 5470</p>
        <p>careers@namespace.com</p>
      </div>
      <div>
        <p>Level 3 79 High Street Melbourne CBD 1010</p>
      </div>
      <div className=" flex md:hidden col-span-full justify-end text-orange pt-5 ">
        <BsFacebook size="1.2rem" className="mr-5" />
        <BsLinkedin size="1.2rem" className="mr-5" />
        <BsInstagram size="1.2rem" className="mr-5" />
      </div>
    </div>
  );
};

export default Footer;
