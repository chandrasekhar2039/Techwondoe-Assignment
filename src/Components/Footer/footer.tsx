import { useEffect, useState } from 'react';
// Icons
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs';
// Api
import Api from '../../API/Endpoints';

const Footer = () => {
  interface IData {
    fields: {
      address: String;
      phoneNumber: String;
      email: String;
    };
  }

  const [data, setData] = useState<IData[]>([]);

  const getData = async () => {
    try {
      const res = await Api.GetData('footer');
      setData(res.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="dark:bg-secondary bg-primary dark:text-primary grid grid-cols-2 gap-6 p-4 pt-12 pb-8 md:grid-cols-7 md:p-32">
      <div className="text-orange md:col-span-3 hidden md:flex cursor-pointer">
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
      <div className="break-words xl:break-normal">
        <p>{data[0]?.fields.phoneNumber}</p>
        <p>{data[0]?.fields.email}</p>
      </div>
      <div>
        <p>{data[0]?.fields.address}</p>
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
