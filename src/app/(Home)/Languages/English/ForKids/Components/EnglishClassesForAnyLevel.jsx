import ClassLevelCard from "@/Shared/ClassLevelCard";

const EnglishClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "A1 ₹35,000/",
      title2: "Beginner Classes",
      description:
        "Discover the joy of learning French with our engaging beginner program tailored for kids. Through fun activities and interactive lessons, children will build a solid foundation in French vocabulary and grammar.",
      link: "",
    },
    {
      title: "A2 ₹42,000/",
      title2: "Intermediate Classes",
      description:
        "Elevate your child's French skills with our elementary program, designed to deepen their understanding and fluency. Through interactive lessons and engaging activities, children will expand their vocabulary and improve their conversational abilities.",
      link: "",
    },
    {
      title: "B2 On Request",
      title2: "Advanced Classes",
      description:
        "Boost your child's French skills at our intermediate program, helping them express fluently and understand complex texts confidently. Through engaging activities, they'll master familiar topics and enhance their language proficiency.",
      link: "",
    },
  ];

  return (
    <div className="xl:max-w-[1684px] my-[112px] w-full mx-auto">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        English Classes for Any Level
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1640px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default EnglishClassesForAnyLevel;
