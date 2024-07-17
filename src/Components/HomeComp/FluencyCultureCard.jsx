import Image from "next/image";

const FluencyCultureCard = ({ datas }) => {

  return (
    <div className="flex flex-col items-center 2xl:p-[24px] 4xl:gap-[16px] 4xl:shadow-md hover:shadow-xl transition duration-200 text-center bg-white rounded-2xl 2xl:h-[548px] w-full  2xl:w-[410.67px] 4xl:w-[548px]">
      <Image
        alt="step1"
        src={datas?.img}
        className="2xl:w-[362.67px] 2xl:h-[196px]"
      />
      <div className="flex flex-col 2xl:gap-[32px] w-full 2xl:w-[362.62px] 4xl:w-[500px] mt-4 shadow-md rounded-lg border border-teal-600 flex-grow 2xl:h-[288px] border-solid">
        <div className="justify-center 2xl:py-4 2xl:text-[32px]/[38.73px] font-[400] bg-teal-600 rounded-t-lg text-neutral-50 max-md:max-w-full">
          Step {datas?.id}
        </div>
        <div className="flex flex-col px-4 max-md:max-w-full 2xl:gap-[8px]">
          <div className="2xl:text-[24px]/[29.05px] font-[500] text-neutral-800 max-md:max-w-full">
            {datas?.title}
          </div>
          <div className="2xl:text-[20px]/[28px] font-[400] 2xl:w-[330px] 4xl:w-[468px] 2xl:h-[111px] text-neutral-500 ">
            {datas?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FluencyCultureCard;
