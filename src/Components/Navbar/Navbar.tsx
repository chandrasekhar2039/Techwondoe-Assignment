// Icons
import { HiChevronDown, HiMenu } from 'react-icons/hi';
// components
import ThemeButton from '../ThemeSwitcher/Theme';

const NavBar = () => {
  return (
    <nav className="bg-primary dark:bg-secondary dark:text-primary h-20 flex justify-between">
      <div className="flex items-center ml-5 md:pl-10 lg:ml-5">
        <ThemeButton />
      </div>
      <div className=" flex cursor-pointer md:p-6 md:px-10 lg:mr-5">
        <ul className="hidden md:space-x-6 lg:space-x-12 md:flex md:items-center">
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
        <div className="md:hidden items-center flex text-orange mr-4">
          <HiMenu size="2rem" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
