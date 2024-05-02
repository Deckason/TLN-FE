import ClassesForAnyGoalCard from "./ClassesForAnyGoalCard";

const LanguageClassesForAnyGoal = ({ ClassesForAnyGoal }) => {
  return (
    <div className="mb-[112px]">
      <div className="text-black text-[60px] mb-12 text-center font-bold ">
        Online {ClassesForAnyGoal?.title} Classes for any goal
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1640px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {ClassesForAnyGoal?.CardData?.map((data, index) => (
          <ClassesForAnyGoalCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default LanguageClassesForAnyGoal;
