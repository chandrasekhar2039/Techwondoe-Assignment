import { useEffect, useState } from 'react';
// Icons
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs';
// Api
import Api from '../../API/Endpoints';
import { PTag } from '../Typography/Typography';

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
        <PTag>Home</PTag>
        <PTag>About</PTag>
        <PTag>Candidates</PTag>
      </div>
      <div>
        <PTag>Employers</PTag>
        <PTag>Latest News</PTag>
        <PTag>Contact</PTag>
      </div>
      <div className="break-words xl:break-normal">
        <PTag>{data[0]?.fields.phoneNumber}</PTag>
        <PTag>{data[0]?.fields.email}</PTag>
      </div>
      <div>
        <PTag>{data[0]?.fields.address}</PTag>
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
