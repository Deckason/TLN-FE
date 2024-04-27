import ClassLevelCard from "@/Shared/ClassLevelCard";

const ClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "HSK 1 & 2 ₹15,990-₹17,390",
      title2: "Beginner Classes (A1 & A2)",
      description:
        "Begin your Mandarin language journey with our beginner courses, specially designed to introduce you to the basics of Mandarin grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Mandarin.",
      link: "", // You can insert the link here
    },
    {
      title: "HSK 3 & 4 ₹21,990-₹25,990",
      title2: "Intermediate Classes (B1 & B2)",
      description:
        "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Mandarin proficiency.",
      link: "", // You can insert the link here
    },
    {
      title: "HSK 5 & 6 ₹29,990-₹24,990",
      title2: "Advanced Classes (C1 & C2)",
      description:
        "Elevate your Mandarin proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts.",
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
