import ClassLevelCard from "@/Shared/ClassLevelCard";

const KoreanClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "TOPIK 1-Level 1 & 2",
      title2: "Beginner Level",
      description:
        "Start your child's Korean journey with our beginner course, introducing them to Korean basics like grammar, vocabulary, and pronunciation, perfect for kids who are new to the language.",
      link: "",
    },
  ];
  return (
    <div className="xl:max-w-[1684px] my-[112px] w-full mx-auto">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Korean Classes for Any Level
      </div>
      <div className="xl:grid-cols-1 xl:max-w-[450px]   flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default KoreanClassesForAnyLevel;
