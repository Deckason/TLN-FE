import Image from "next/image";

const Banner = ({ title, description, buttonText = "Apply Now",imageSrc="" }) => {
    return (
      <div className="flex flex-col md:flex-row p-8 md:p-16 lg:p-24 gap-8 md:gap-12">
        <div className="flex flex-col items-start gap-4 md:gap-5">
          <p className="text-[32px] md:text-[60px] font-bold leading-normal md:leading-[80px]">{title}</p>
          <p className="text-[16px] md:text-[20px] font-[400] leading-normal md:leading-[28px]">{description}</p>
          <button className="text-white bg-primary-color py-3 px-8 rounded-md text-[14px] md:text-[24px]">
            {buttonText}
          </button>
        </div>
        <div className="w-full md:w-auto md:shrink lg:shrink-0">
          <Image src={imageSrc} className="w-full"/>
          {/* <div className="w-full h-48 md:min-w-[300px] md:min-h-[300px] bg-gray-300"></div> */}
        </div>
      </div>
    );
  };
  
  export default Banner;
  