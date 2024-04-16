import Image from "next/image";
const FluencyCultureCard = ({ datas }) => {
  return (
    <div className="flex flex-col p-6 text-center bg-white rounded-2xl min-h-full lg:min-h-[548px] mx-2 md:mx-0 md:max-w-sm lg:max-w-[500px] xl:max-w-[548px] max-md:px-5">
      <Image alt="step1" src={datas?.img} />
      <div className="flex flex-col pb-9 mt-4 rounded-lg border border-teal-600 flex-grow lg:min-h-[298px] xl:min-h-[288px] border-solid max-md:max-w-full">
        <div className="justify-center py-4 text-3xl bg-teal-600 rounded-lg text-neutral-50 max-md:max-w-full">
          Step {datas?.id}
        </div>
        <div className="flex flex-col px-4 mt-8 max-md:max-w-full">
          <div className="text-2xl font-medium text-neutral-800 max-md:max-w-full">
            {datas?.title}
          </div>
          <div className="mt-2 text-xl leading-7 text-neutral-500 max-md:max-w-full">
            {datas?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FluencyCultureCard;
