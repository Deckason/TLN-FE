import OnlineClassCard from "./OnlineClassCard";

const OnlineLanguageClass = ({ OnlineLanguageClass }) => {
  return (
    <div className=" mb-[112px]">
      <div className="text-black max-md:text-2xl lg:text-4xl max-lg:text-3xl xl:text-[60px] mb-12 text-center font-bold ">
        Online {OnlineLanguageClass?.Language} classes
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1640px] max-w-8xl  flex-wrap justify-center gap-1  h-full max-md:gap-5 md:gap-2 max-md:px-4 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {OnlineLanguageClass?.CardData?.map((data, index) => (
          <OnlineClassCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OnlineLanguageClass;
