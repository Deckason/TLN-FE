import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import OnlineClassCard from "@/Shared/OnlineClassCard";
import WhyKidShouldLearnCard from "@/Shared/WhyKidShouldLearnCard";
import kids1 from "@/Assets/FrenchPage/FrenchForKids/kids (1).png";
import kids2 from "@/Assets/FrenchPage/FrenchForKids/kids (2).png";
import kids3 from "@/Assets/FrenchPage/FrenchForKids/kids (3).png";

const WhyKidsShouldLearnKorean = () => {
  const levelDatas = [
    {
      title: "Global Communication",
      img: kids1,
      description:
        "Korean is spoken by over 80 million people worldwide, offering opportunities for cultural exchange, enhanced global understanding, and communication opportunities for children.",
      link: "",
    },
    {
      title: "Educational Advantages",
      img: kids2,
      description:
        "Enhances cognitive skills, including memory and problem-solving, and opens doors to understanding one of the world's most innovative economies.",
      link: "",
    },
    {
      title: "Career Opportunities",
      img: kids3,
      description:
        "Proficiency in Korean provides a competitive edge in fields such as technology, entertainment, and international relations.",
      link: "",
    },
    {
      title: "Cultural Enrichment",
      img: kids1,
      description:
        "Learning Korean exposes children to rich traditions, pop culture phenomena like K-pop, and a vibrant culinary scene.",
      link: "",
    },
    {
      title: "Travel and Exploration",
      img: kids2,
      description:
        "Enables deeper immersion and understanding while exploring South Korea's history, landmarks, and natural beauty.",
      link: "",
    },
    {
      title: "Personal Growth",
      img: kids3,
      description:
        "Fosters appreciation for linguistic diversity, cultural empathy, and adaptability in an increasingly interconnected world.",
      link: "",
    },
  ];

  return (
    <div className="mb-[112px]">
      <div className="text-black text-2xl mb-12 text-center font-bold max-md:text-lg ">
        Why kids should learn Korean?
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <WhyKidShouldLearnCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WhyKidsShouldLearnKorean;
