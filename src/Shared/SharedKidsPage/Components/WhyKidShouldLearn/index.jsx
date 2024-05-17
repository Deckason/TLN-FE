import WhyKidShouldLearnCard from "./WhyKidShouldLearnCard";

const WhyKidsShouldLearnEnglish = ({ WhyKidsShouldLearnEnglish }) => {
  return (
    <div className="mb-[112px]">
      <div className="text-black text-2xl mb-12 text-center font-bold max-md:text-lg ">
        {WhyKidsShouldLearnEnglish?.Title}
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {WhyKidsShouldLearnEnglish?.CardData?.map((data, index) => (
          <WhyKidShouldLearnCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WhyKidsShouldLearnEnglish;
