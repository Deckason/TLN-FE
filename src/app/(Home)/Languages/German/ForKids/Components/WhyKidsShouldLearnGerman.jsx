import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import OnlineClassCard from "@/Shared/OnlineClassCard";
import WhyKidShouldLearnCard from "@/Shared/WhyKidShouldLearnCard";
import kids1 from "@/Assets/FrenchPage/FrenchForKids/kids (1).png";
import kids2 from "@/Assets/FrenchPage/FrenchForKids/kids (2).png";
import kids3 from "@/Assets/FrenchPage/FrenchForKids/kids (3).png";

const WhyKidsShouldLearnGerman = () => {
  const levelDatas = [
    {
      title: "Global Communication",
      img: kids1,
      description:
        "With over 100 million native speakers, German is crucial for communication in STEM fields and offers access to a vast network of professionals worldwide.",
      link: "",
    },
    {
      title: "Educational Advantages",
      img: kids2,
      description:
        "Studying German enhances cognitive abilities such as problem-solving and critical thinking, contributing to overall academic success.",
      link: "",
    },
    {
      title: "Career Opportunities",
      img: kids3,
      description:
        "Proficiency in German broadens job prospects, particularly in engineering, technology, and international business sectors where German-speaking companies thrive.",
      link: "",
    },
    {
      title: "Cultural Enrichment",
      img: kids1,
      description:
        "Learning German provides a window into Germany's vibrant culture, including its influential literature, philosophy, and music, enriching children's cultural awareness.",
      link: "",
    },
    {
      title: "Travel Benefits",
      img: kids2,
      description:
        "Knowing German enhances travel experiences in Germany and other German-speaking regions, enabling deeper engagement with the country's history, art, and cuisine.",
      link: "",
    },
    {
      title: "Personal Growth",
      img: kids3,
      description:
        "Learning German fosters resilience and adaptability while promoting empathy and understanding of different cultures, nurturing well-rounded individuals.",
      link: "",
    },
  ];

  return (
    <div className="mb-[112px]">
      <div className="text-black text-2xl mb-12 text-center font-bold max-md:text-lg ">
        Why kids should learn German?
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <WhyKidShouldLearnCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WhyKidsShouldLearnGerman;
