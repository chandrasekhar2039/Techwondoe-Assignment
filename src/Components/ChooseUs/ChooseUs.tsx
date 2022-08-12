// Icon
import { HiOutlineCheck } from 'react-icons/hi';

const ChooseUs = () => {
  return (
    <div className="p-3 md:p-16 dark:text-primary dark:bg-secondary md:pb-32">
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold leading-relaxed">Why choose us?</h1>
      </div>
      <div className="text-center">
        <p className="text-lg my-3">
          We have decades of experience, having successfully recruited across the globle for many years.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-16 mt-10">
        {[1, 2, 3, 4, 5, 6].map((each) => {
          return (
            <div className="p-1 flex" key={each}>
              <div>
                <HiOutlineCheck size="1.5rem" className="text-orange mt-5" />
              </div>
              <div className="m-2">
                <h3 className="text-lg font-bold py-2">Highly experienced Team</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseUs;
