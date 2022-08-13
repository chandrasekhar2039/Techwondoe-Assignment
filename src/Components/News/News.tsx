// Icons
import { HiOutlineArrowRight } from 'react-icons/hi';

const News = () => {
  return (
    <div className="dark:bg-secondary dark:text-primary p-3 pb-10 md:p-36 md:px-48">
      <div className="text-center flex justify-between my-10 px-2">
        <h1 className="text-2xl md:text-4xl font-bold">Latest News</h1>
        <button
          type="button"
          className="text-orange md:bg-orange md:p-2 md:px-5 md:font-medium md:rounded md:text-primary md:mr-9"
        >
          View All
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-4 justify-center">
        {[1, 2, 3].map((each) => {
          return (
            <div key={each} className="my-2">
              <img src="/Assets/news.png" alt="News" className="cursor-pointer" />
              <p className="my-4 opacity-80">by John Doe | Oct 11, 2021</p>
              <h2 className="font-semibold text-xl"> Risk & Compliance market</h2>
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
