import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import OnlineClassCard from "@/Shared/OnlineClassCard";
import WhyKidShouldLearnCard from "@/Shared/WhyKidShouldLearnCard";
import kids1 from "@/Assets/FrenchPage/FrenchForKids/kids (1).png";
import kids2 from "@/Assets/FrenchPage/FrenchForKids/kids (2).png";
import kids3 from "@/Assets/FrenchPage/FrenchForKids/kids (3).png";

const WhyKidsShouldLearnSpanish = () => {
  const levelDatas = [
    {
      title: "Global Communication",
      img: kids1,
      description:
        "Spanish has 580 million speakers globally and fosters connections across Spanish-speaking nations, enhancing global understanding and communication opportunities for children.",
      link: "",
    },
    {
      title: "Educational Advantages",
      img: kids2,
      description:
        "Learning Spanish boosts cognitive skills like problem-solving, critical thinking, multitasking, and memory. Improved linguistic abilities benefit academic performance across subjects.",
      link: "",
    },
    {
      title: "Career Opportunities",
      img: kids3,
      description:
        "Spanish proficiency is essential in global careers like business, diplomacy, tourism, and hospitality, given the significance of multilingual skills in today's world.",
      link: "",
    },
    {
      title: "Cultural Enrichment",
      img: kids1,
      description:
        "Learning Spanish exposes children to diverse cultures, literature, cinema, and art. It is also the official language of global bodies like the United Nations, UNESCO, and the International Red Cross.",
      link: "",
    },
    {
      title: "Personal Growth",
      img: kids2,
      description:
        "Learning a new language cultivates empathy, cultural sensitivity, and self-confidence, fostering personal growth and appreciation for diversity.",
      link: "",
    },
  ];

  return (
    <div className="mb-[112px]">
      <div className="text-black text-2xl mb-12 text-center font-bold max-md:text-lg ">
        Why kids should learn Mandarin?
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <WhyKidShouldLearnCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WhyKidsShouldLearnSpanish;
