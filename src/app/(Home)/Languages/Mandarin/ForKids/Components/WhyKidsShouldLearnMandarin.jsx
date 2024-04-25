import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import OnlineClassCard from "@/Shared/OnlineClassCard";
import WhyKidShouldLearnCard from "@/Shared/WhyKidShouldLearnCard";
import kids1 from "@/Assets/FrenchPage/FrenchForKids/kids (1).png";
import kids2 from "@/Assets/FrenchPage/FrenchForKids/kids (2).png";
import kids3 from "@/Assets/FrenchPage/FrenchForKids/kids (3).png";

const WhyKidsShouldLearnMandarin = () => {
  const levelDatas = [
    {
      title: "Global Communication",
      img: kids1,
      description:
        "Mandarin is spoken by one billion speakers globally and helps enhance global understanding and communication opportunities for children.",
      link: "",
    },
    {
      title: "Educational Advantages",
      img: kids2,
      description:
        "Enhances cognitive abilities, including problem-solving and spatial awareness, and provides insights into one of the world's oldest civilizations.",
      link: "",
    },
    {
      title: "Career Opportunities",
      img: kids3,
      description:
        "Proficiency in Mandarin is highly valued in fields like international business, diplomacy, tourism, and global trade, offering competitive advantages.",
      link: "",
    },
    {
      title: "Cultural Enrichment",
      img: kids1,
      description:
        "Learning Mandarin exposes children to rich Mandarin traditions, literature, arts, and millennia-old history.",
      link: "",
    },
    {
      title: "Travel and Exploration",
      img: kids2,
      description:
        "Facilitates immersive experiences while exploring China's diverse landscapes, iconic landmarks, and culinary delights.",
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

export default WhyKidsShouldLearnMandarin;
