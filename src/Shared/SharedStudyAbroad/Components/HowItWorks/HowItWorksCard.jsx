import Image from "next/image";
const HowItWorksCard = ({ datas }) => {
  return (
    <div className="flex flex-col shadow-md transition duration-300 hover:shadow-xl bg-white p-6 text-center  rounded-2xl min-h-full h-[548px] mx-2 md:mx-0 md:max-w-sm max-md:w-[355px] justify-center max-xl:w-[408px] xl:max-w-[388px]">

      <div className="h-[196px]">
        <Image
          className="object-cover hidden md:block h-full w-full"
          alt="step1"
          src={datas?.img}
        />
      </div>
      <div className="flex flex-col shadow-md hover:shadow-xl transition duration-300 pb-9 mt-4 rounded-lg border border-teal-600 flex-grow h-fit lg:min-h-[298px] xl:min-h-[288px] border-solid md:w-full p-10 md:p-0 items-start md:items-center">
        <div className="justify-center py-2 text-[16px] xl:text-[32px] bg-teal-600 md:rounded-t-lg text-neutral-50 max-md:max-w-full w-fit md:w-full px-4 rounded-sm">
          <span className="hidden md:inline">Step</span> {datas?.id}
        </div>
        <div className="flex flex-col mt-8 max-md:max-w-full items-start md:items-center">
          <div className="text-[30px] xl:text-[24px] font-medium text-neutral-800 max-md:max-w-full leading-tight text-start md:text-center">
            {datas?.title}
          </div>
          <div className="mt-2 text-[16px] xl:text-[20px] font-normal leading-tight text-neutral-400 max-md:max-w-full text-start md:text-center">
            {datas?.description}
          </div>
        </div>
        <div className="h-fit block md:hidden mt-9">
          <Image
            className="object-cover h-[150px] w-full"
            alt="step1"
            src={datas?.img}
          />
      </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
