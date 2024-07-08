import Image from "next/image";
const FluencyCultureCard = ({ datas }) => {
  return (
    <div className="flex flex-col p-6 shadow-md hover:shadow-xl transition duration-200 text-center bg-white rounded-2xl min-h-full lg:min-h-[548px] mx-2 md:mx-10 xl:mx-0 lg:mx-[50px] w-full max-w-[600px] xl:max-w-[400px] 2xl:max-w-[420px] 3xl:max-w-[450px] 4xl:w-[548px] max-md:px-5">
      <Image alt="step1" src={datas?.img} />
      <div className="flex flex-col pb-9 mt-4 shadow-md rounded-lg border border-teal-600 flex-grow lg:min-h-[298px] xl:min-h-[288px] border-solid max-md:max-w-full">
        <div className="justify-center py-4 text-3xl bg-teal-600 rounded-t-lg text-neutral-50 max-md:max-w-full">
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
