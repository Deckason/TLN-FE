import Image from "next/image";
const HowItWorksCard = ({ datas }) => {
  return (
    <div className="flex flex-col shadow-md transition duration-300 hover:shadow-xl bg-white p-6 text-center  rounded-2xl min-h-full h-[548px] mx-2 md:mx-0 md:max-w-sm max-md:w-[355px] justify-center max-xl:w-[408px] xl:max-w-[388px]">
      
      <div className="order-3 md:order-1 h-[196px]">
        <Image
          className="object-cover h-full w-full" 
          alt="step1"
          src={datas?.img}
        />
      </div>
      
      <div 
        className="order-1 md:order-2 flex items-center justify-center text-3xl bg-teal-600 text-neutral-50 max-md:w-[50px] max-md:h-[50px] max-md:text-center max-md:pl-4 max-md:pr-4 max-md:ml-4 max-md:mr-4 max-md:rounded-lg md:rounded-t-lg"
        style={{ height: '50px' }}
      >
        <span className="md:hidden">{datas?.id}</span>
        <span className="hidden md:inline">Step {datas?.id}</span>
      </div>
      
      <div className="order-2 md:order-3 flex flex-col px-4 mt-8 max-md:text-left max-md:pl-2 max-md:pr-2 max-md:ml-2 max-md:mr-2 md:border md:border-teal-600 md:rounded-lg md:rounded-t-none md:rounded-b-lg md:mt-0">
        <div className="text-[30px] xl:text-[24px] font-medium text-neutral-800 max-md:max-w-full">
          {datas?.title}
        </div>
        <div className="mt-2 text-[16px] xl:text-[20px] leading-7 text-neutral-400 max-md:max-w-full">
          {datas?.description}
        </div>
      </div>
      
    </div>
  );
};

export default HowItWorksCard;
