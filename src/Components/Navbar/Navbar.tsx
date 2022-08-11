import { HiChevronDown, HiMenu } from 'react-icons/hi';

const NavBar = () => {
  return (
    <nav className="bg-primary drak:bg-secondary h-20 flex justify-end cursor-pointer md:p-6 md:px-12 md:mr-5    ">
      <ul className="hidden md:space-x-12 md:flex md:items-center">
        <li className="flex items-center">
          About <HiChevronDown className="ml-1" />
        </li>
        <li>Job Search</li>
        <li className="flex items-center">
          Candidates <HiChevronDown className="ml-1" />
        </li>
        <li className="flex items-center">
          Employers <HiChevronDown className="ml-1" />
        </li>
        <li>Latest News</li>
        <li>Contact</li>
      </ul>
      <div className="md:hidden items-center flex text-orange">
        <HiMenu size="2rem" />
      </div>
    </nav>
  );
};

export default NavBar;
