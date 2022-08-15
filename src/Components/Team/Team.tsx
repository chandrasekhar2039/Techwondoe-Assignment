import { useEffect, useState } from 'react';
// Api
import Api from '../../API/Endpoints';
import { H1, PTag } from '../Typography/Typography';

const Team = () => {
  interface IData {
    fields: {
      description: String;
      heading: String;
      image: object;
    };
  }

  const [data, setData] = useState<IData[]>([]);
  const [img, setImg] = useState<String>('');

  const getData = async () => {
    try {
      const res = await Api.GetData('team');
      setData(res.data.items);
      setImg(res.data.includes.Asset[0].fields.file.url);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="dark:bg-secondary dark:opacity-95 dark:text-primary bg-fadeOrange grid  md:grid-cols-2 gap-4 md:p-10 xl:p-36 xl:px-56 md:pt-10 pb-10 md:pb-0">
      <div className="md:pt-5 flex justify-center lg:block">
        <img src={`https:${img}`} alt="Teamimg" />
      </div>
      <div className="p-5 pt-10 md:px-0 md:pt-0 lg:pr-12">
        <PTag cName="text-orange font-bold">Our Team</PTag>
        <H1 cName="text-4xl font-bold my-3">{data[0]?.fields.heading}</H1>
        <PTag cName="leading-6 mt-5">{data[0]?.fields.description}</PTag>
        <div className="mt-5 md:mt-16">
          <button type="button" className="bg-orange p-3 px-5 font-medium rounded text-primary">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
