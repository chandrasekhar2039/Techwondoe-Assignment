const Team = () => {
  return (
    <div className="dark:bg-secondary dark:opacity-95 dark:text-primary bg-fadeOrange grid  md:grid-cols-2 gap-4 md:p-10 xl:p-36 xl:px-56 md:pt-10 pb-10 md:pb-0">
      <div className="md:pt-5 flex justify-center lg:block">
        <img src="/Assets/Team.png" alt="Teamimg" />
      </div>
      <div className="p-5 pt-10 md:px-0 md:pt-0 lg:pr-12">
        <p className="text-orange font-bold">Our Team</p>
        <h1 className="text-4xl font-bold my-3">A team you can trust</h1>
        <p className="leading-6 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Enim vulputate aliquam arcu .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
          vulputate aliquam arcu .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu
          .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu . Contrary to popular
          belief, Lorem Ipsum is not simply random text.
        </p>
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
