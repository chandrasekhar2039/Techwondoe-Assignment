import { useEffect, useState } from 'react';
// Icon
import { HiOutlineCheck } from 'react-icons/hi';
// Api
import Api from '../../API/Endpoints';
import { H1, PTag } from '../Typography/Typography';

const ChooseUs = () => {
  interface IData {
    fields: {
      description: String;
      heading: String;
    };
  }

  const [data, setData] = useState<IData[]>([]);

  const getData = async () => {
    try {
      const res = await Api.GetData('why');
      setData(res.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-3 md:p-16 dark:text-primary dark:bg-secondary md:pb-32">
      <div className="text-center mt-16">
        <H1 cName="text-4xl font-bold leading-relaxed">Why choose us?</H1>
      </div>
      <div className="text-center">
        <PTag cName="text-lg my-3">
          We have decades of experience, having successfully recruited across the globle for many years.
        </PTag>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-16 mt-10">
        {data.length !== 0 &&
          data.map((each, index) => {
            return (
              <div className="p-1 flex" key={index}>
                <div>
                  <HiOutlineCheck size="1.5rem" className="text-orange mt-5" />
                </div>
                <div className="m-2">
                  <h3 className="text-lg font-bold py-2">{each.fields.heading}</h3>
                  <PTag>{each.fields.description}</PTag>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ChooseUs;
