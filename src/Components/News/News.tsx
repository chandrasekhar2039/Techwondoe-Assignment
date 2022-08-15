import { useEffect, useState } from 'react';
// Icons
import { HiOutlineArrowRight } from 'react-icons/hi';
// Api
import Api from '../../API/Endpoints';
import { H1, H2, PTag } from '../Typography/Typography';

const News = () => {
  interface IData {
    fields: {
      description: String;
      heading: String;
      image: object;
    };
  }

  const [data, setData] = useState<IData[]>([]);
  const [img, setImg] = useState<any[]>([]);

  const getData = async () => {
    try {
      const res = await Api.GetData('news');
      setData(res.data.items);
      setImg(res.data.includes.Asset);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="dark:bg-secondary dark:text-primary p-3 pb-10 md:p-36 md:px-48">
      <div className="text-center flex justify-between my-10 px-2">
        <H1 cName="text-2xl md:text-4xl font-bold">Latest News</H1>
        <button
          type="button"
          className="text-orange md:bg-orange md:p-2 md:px-5 md:font-medium md:rounded md:text-primary md:mr-9"
        >
          View All
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-4 justify-center">
        {data.length !== 0 &&
          data.map((each, index) => {
            return (
              <div key={index} className="my-2">
                <img src={`https:${img[index].fields.file.url}`} alt="News" className="cursor-pointer" />
                <PTag cName="my-4 opacity-80">{each.fields.description}</PTag>
                <H2 cName="font-semibold text-xl">{each.fields.heading}</H2>
                <p className="flex text-orange mt-14 cursor-pointer text-lg">
                  Read more <HiOutlineArrowRight className="self-center ml-2" />
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
