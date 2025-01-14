import Image from "next/image";

const Banner = ({ title, description, buttonText = "Apply Now",imageSrc="" }) => {
    return (
      <div className="flex flex-col md:flex-row p-8 md:p-16 lg:p-24 gap-8 md:gap-12">
        <div className="flex flex-col items-start gap-4 md:gap-5">
          <p className="text-[26px]/[36px] lg:text-[39px]/[45px] 2xl:text-[48px]/[59px] font-bold max-md:max-w-full">{title}</p>
          <p className="mt-2 max-sm:text-sm text-xl leading-7 lg:text-base 2xl:text-xl lg:w-[450px] xl:w-[500px] 2xl:w-full 3xl:w-[120%] max-md:max-w-full relative mb-[32px]">{description}</p>
          <button className="text-white bg-primary-color py-3 px-8 rounded-md text-[14px] md:text-[24px]">
            {buttonText}
          </button>
        </div>
        <div className="w-full md:w-auto md:shrink lg:shrink-0">
          <Image src={imageSrc} className="w-full" width={500} height={500} alt="Banner Image"/>
          {/* <div className="w-full h-48 md:min-w-[300px] md:min-h-[300px] bg-gray-300"></div> */}
        </div>
      </div>
    );
  };
  
  export default Banner;
  