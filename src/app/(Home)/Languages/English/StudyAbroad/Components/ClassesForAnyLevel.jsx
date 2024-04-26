import ClassLevelCard from "@/Shared/ClassLevelCard";

const ClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "A1 ₹35,000/",
      title2: "Beginner Classes",
      description:
        "Begin your English language journey with our beginner course, specially designed to introduce you to the basics of English grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in English.",
      link: "", // You can insert the link here
    },
    {
      title: "A2 ₹42,000/",
      title2: "Intermediate Classes",
      description:
        "Build upon your existing English knowledge and enhance your fluency with our intermediate course. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your English proficiency.",
      link: "", // You can insert the link here
    },
    {
      title: "B2 On Request",
      title2: "Advanced Classes",
      description:
        "Take your English skills to the highest level with our online advanced class. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in English.",
      link: "", // You can insert the link here
    },
  ];

  return (
    <div className="xl:max-w-[1684px] my-[112px] w-full mx-auto">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        English Classes for Any Level
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ClassesForAnyLevel;
