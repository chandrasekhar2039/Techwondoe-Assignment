import { useEffect, useState } from 'react';
// Api
import Api from '../../API/Endpoints';
import { H1, PTag } from '../Typography/Typography';

const Carrer = () => {
  interface IData {
    fields: {
      description: String;
      heading: String;
    };
  }

  const [data, setData] = useState<IData[]>([]);

  const getData = async () => {
    try {
      const res = await Api.GetData('carrer');
      setData(res.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="dark:text-secondary dark:bg-opacity-30 bg-orange text-primary align-center text-center md:px-32 md:py-28 py-16">
      <H1 cName="text-3xl md:text-5xl font-bold md:my-10 my-6">{data[0]?.fields.heading}</H1>
      <PTag cName="mb-10 text-lg px-4">{data[0]?.fields.description}</PTag>
      <button
        type="button"
        className="dark:text-primary dark:bg-secondary text-orange p-3 px-5 font-medium rounded bg-primary text-lg "
      >
        Get in touch
      </button>
    </div>
  );
};

export default Carrer;
