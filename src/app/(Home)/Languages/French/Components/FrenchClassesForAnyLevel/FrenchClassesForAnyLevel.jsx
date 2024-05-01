import ClassLevelCard from "@/Shared/ClassLevelCard";

const FrenchClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "A1-A2",
      title2: "Beginner Classes",
      description:
        "Start your French language journey with our engaging online classes designed for beginners. Learn fundamental grammar, vocabulary, and practical conversation skills at your own pace with our expert instructors' guidance.",
      link: "",
    },
    {
      title: "B1-B2",
      title2: "Intermediate Classes",
      description:
        "Elevate your French proficiency with our online intermediate classes. Refine pronunciation, expand vocabulary, and master complex grammar structures to confidently engage in conversations and express yourself fluently.",
      link: "",
    },
    {
      title: "C1-C2",
      title2: "Advanced Classes",
      description:
        "Advance your French skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in French.",
      link: "",
    },
  ];
  return (
    <div className="xl:max-w-[1684px] mt-[112px] w-full mx-auto">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        French Classes for Any Level
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1640px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default FrenchClassesForAnyLevel;
