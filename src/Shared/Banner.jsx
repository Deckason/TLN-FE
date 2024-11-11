const Banner = ({ title, description, buttonText = "Apply Now" }) => {
    return (
      <div className="flex flex-col md:flex-row p-8 md:p-16 lg:p-24 gap-8 md:gap-12">
        <div className="flex flex-col items-start gap-4 md:gap-5">
          <p className="text-2xl md:text-3xl lg:text-[40px] font-bold">{title}</p>
          <p className="text-sm md:text-base lg:text-[15px]">{description}</p>
          <button className="text-white bg-primary-color py-3 px-8 rounded-md">
            {buttonText}
          </button>
        </div>
        <div className="w-full md:w-auto">
          <div className="w-full h-48 md:min-w-[300px] md:min-h-[300px] bg-gray-300"></div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  