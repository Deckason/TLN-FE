import ClassLevelCard from "@/Shared/ClassLevelCard";

const SpanishClassesForAnyLevel = () => {
  const levelDatas = [
    {
      title: "A1",
      description:
        "Discover the joy of learning Spanish with our engaging beginner program tailored for kids. Through fun activities and interactive lessons, children will build a solid foundation in Spanish vocabulary and grammar.",
      title2: "₹35,000/-",
      link: "",
    },
    {
      title: "A2",
      description:
        "Elevate your child's Spanish skills with our elementary program, designed to deepen their understanding and fluency. Through interactive lessons and engaging activities, children will expand their vocabulary and improve their conversational abilities.",
      title2: "₹42,000/-",
      link: "",
    },
    {
      title: "B1",
      description:
        "Boost your child's Spanish skills at our intermediate program, helping them express fluently and understand complex texts confidently. Through engaging activities, they'll master familiar topics and enhance their language proficiency.",
      title2: "On Request",
      link: "",
    },
  ];

  return (
    <div className="xl:max-w-[1684px] my-[112px] w-full mx-auto">
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Spanish Classes for Any Level
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <ClassLevelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default SpanishClassesForAnyLevel;
