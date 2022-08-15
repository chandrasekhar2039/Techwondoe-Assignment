import { useEffect, useState } from 'react';
// Icons
import { HiChevronDown, HiMenu } from 'react-icons/hi';
// components
import ThemeButton from '../ThemeSwitcher/Theme';
// Api
import Api from '../../API/Endpoints';

const NavBar = () => {
  interface NavData {
    fields: {
      name: String;
      dropdown: Boolean;
    };
  }

  const [data, setData] = useState<NavData[]>([]);

  const getData = async () => {
    try {
      const res = await Api.GetData('navbar');
      setData(res.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <nav className="bg-primary dark:bg-secondary dark:text-primary h-16 md:h-18 flex justify-between sticky top-0 z-50">
      <div className="flex items-center ml-5 md:pl-10 lg:ml-5">
        <ThemeButton />
      </div>
      <div className=" flex cursor-pointer md:p-5 md:px-10 lg:mr-5">
        <ul className="hidden md:space-x-6 lg:space-x-12 md:flex md:items-center">
          {data.length !== 0 &&
            data.map((each, index) => {
              return (
                <li className="flex items-center" key={index}>
                  {each.fields.name} {each.fields.dropdown && <HiChevronDown className="ml-1" />}
                </li>
              );
            })}
        </ul>
        <div className="md:hidden items-center flex text-orange mr-4">
          <HiMenu size="2rem" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
