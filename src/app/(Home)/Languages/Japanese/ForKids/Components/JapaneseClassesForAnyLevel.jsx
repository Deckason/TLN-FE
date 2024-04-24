import ClassLevelCard from "@/Shared/ClassLevelCard";

const JapaneseClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "N5 Part I & II: ₹28,000-₹28,000",
      title2: "Beginner Level",
      description:
        "Embark on an exciting Japanese adventure with our beginner course! Designed for kids who are new to Japanese, these courses introduce basic grammar, vocabulary, and pronunciation in a fun way and also introduce them to three different scripts in a seamless manner!",
      link: "",
    },
    {
      title: "N4",
      title2: "Intermediate ",
      description:
        "On Request: Level up your Japanese abilities with our intermediate course designed for young learners. Delve into advanced grammar, enrich your vocabulary, and participate in interactive activities to improve fluency. ",
      link: "",
    },
  ];
  return (
    <div className="xl:max-w-[1684px] my-[112px] w-full mx-auto">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Japanese Classes for Any Level
      </div>
      <div className="xl:grid-cols-2 xl:max-w-[850px]   flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default JapaneseClassesForAnyLevel;
