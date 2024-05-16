import ClassLevelCard from "./ClassLevelCard";

const LanguageClassesForAnyLevel = ({ ClassesForAnyLevel }) => {
  // console.log(ClassesForAnyLevel);
  return (
    <div className=" mt-[112px] w-full mx-auto">
      <div className="text-black max-md:text-2xl lg:text-4xl max-lg:text-3xl text-[60px] mb-12 text-center font-bold ">
        {ClassesForAnyLevel?.Language} Classes for Any Level
      </div>
      <div
        className={`${
          ClassesForAnyLevel?.CardData?.length === 3 && "xl:grid-cols-3"
        } ${ClassesForAnyLevel?.CardData?.length === 4 && "xl:grid-cols-4"} ${
          ClassesForAnyLevel?.CardData?.length === 1 ? "grid" : ""
        } md:grid 2xl:max-w-[1640px] max-w-8xl justify-center  max-md:gap-5 md:gap-2 px-5 mx-auto max-sm:px-4 w-full lg:gap-[18px] gap-8 md:grid-cols-2  items-center mt-[48px] `}
      >
        {ClassesForAnyLevel?.CardData?.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default LanguageClassesForAnyLevel;
