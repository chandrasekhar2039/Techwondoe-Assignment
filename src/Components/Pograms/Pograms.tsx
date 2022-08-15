import { useEffect, useState } from 'react';
// Icons
import { HiUsers, HiBriefcase } from 'react-icons/hi';
// Api
import Api from '../../API/Endpoints';

const Pograms = () => {
  interface IData {
    fields: {
      description: String;
      heading: String;
    };
  }

  const [data, setData] = useState<IData[]>([]);

  const getData = async () => {
    try {
      const res = await Api.GetData('pograms');
      setData(res.data.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-[#EDEDED] p-3  py-10 md:p-36 md:px-48 relative">
      <img src="/Assets/vectorBack.png" alt="vector" className="absolute bottom-0 right-0 invisible md:visible" />
      <div className="grid md:grid-cols-2 gap-6">
        {data.length !== 0 &&
          data.map((each, index) => {
            return (
              <div className="dark:bg-secondary dark:text-primary bg-primary p-10 z-20" key={index}>
                <div className="flex">
                  <div
                    className={`${
                      each.fields.heading === 'Candidates'
                        ? 'bg-[#E6692E33] text-orange'
                        : 'bg-[#11984B33] text-[green]'
                    } opacity-80 rounded-full p-4`}
                  >
                    {each.fields.heading === 'Candidates' ? <HiUsers size="2rem" /> : <HiBriefcase size="2rem" />}
                  </div>
                </div>
                <h1 className="text-3xl font-bold my-5">{each.fields.heading}</h1>
                <p>{each.fields.description}</p>
                <p className="mt-8 text-orange text-lg cursor-pointer">Learn more</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pograms;
