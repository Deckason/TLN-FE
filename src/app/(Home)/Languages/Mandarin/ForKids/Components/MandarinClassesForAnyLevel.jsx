import ClassLevelCard from "@/Shared/ClassLevelCard";

const MandarinClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "Beginner HSK 1 & 2",
      title2: "Beginner Level",
      description:
        "Start your child's Mandarin journey with our beginner course, designed to introduce basic grammar, vocabulary, and pronunciation. Perfect for kids with little to no prior experience in Mandarin.",
      link: "",
    },
    {
      title: "Intermediate HSK 3",
      title2: "Intermediate Level",
      description:
        "Advance your child's Mandarin skills with our intermediate course! Building upon foundational knowledge, they will delve into more complex grammar, expand vocabulary, and have engaging conversations to enhance fluency.",
      link: "",
    },
  ];

  return (
    <div className="xl:max-w-[1684px] my-[112px] w-full mx-auto">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Mandarin Classes for Any Level
      </div>
      <div className="xl:grid-cols-2 xl:max-w-[850px]   flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MandarinClassesForAnyLevel;
