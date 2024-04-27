import ClassLevelCard from "@/Shared/ClassLevelCard";

const ClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "A1 & A2 ₹11,990-₹14,390",
      title2: "Beginner Classes (A1 & A2)",
      description:
        "Start your Spanish language journey with our engaging online classes designed for beginners. Learn fundamental grammar, vocabulary, and practical conversation skills at your own pace with expert instructors' guidance.",
      link: "", // You can insert the link here
    },
    {
      title: "B1 & B2 ₹16,790-₹19,190",
      title2: "Intermediate Classes (B1 & B2)",
      description:
        "Elevate your Spanish proficiency with our online intermediate classes. Refine pronunciation, expand vocabulary, and master complex grammar structures to confidently engage in conversations and express yourself fluently.",
      link: "", // You can insert the link here
    },
    {
      title: "C1 & C2 On Request",
      title2: "Advanced Classes (C1 & C2)",
      description:
        "Take your Spanish skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in Spanish.",
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
