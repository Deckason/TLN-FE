import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import OnlineClassCard from "@/Shared/OnlineClassCard";
import WhyKidShouldLearnCard from "@/Shared/WhyKidShouldLearnCard";
import kids1 from "@/Assets/FrenchPage/FrenchForKids/kids (1).png";
import kids2 from "@/Assets/FrenchPage/FrenchForKids/kids (2).png";
import kids3 from "@/Assets/FrenchPage/FrenchForKids/kids (3).png";

const WhyKidsShouldLearnEnglish = () => {
  const levelDatas = [
    {
      title: "Global Communication",
      img: kids1,
      description:
        "English has 1.5 billion speakers globally and fosters connections across English-speaking nations, enhancing global understanding and communication opportunities for children.",
      link: "",
    },
    {
      title: "Cultural Enrichment",
      img: kids2,
      description:
        "Learning English exposes children to diverse literature, music, films, and popular culture from English-speaking countries.",
      link: "",
    },
    {
      title: "Academic Advantages",
      img: kids3,
      description:
        "Mastery of English enhances access to educational resources, research, and opportunities for higher education.",
      link: "",
    },
    {
      title: "Career Opportunities",
      img: kids1,
      description:
        "Proficiency in English opens doors in various industries, including business, technology, and tourism, offering competitive advantages in the global job market.",
      link: "",
    },
    {
      title: "Travel and Exploration",
      img: kids2,
      description:
        "English proficiency enhances travel experiences and fosters deeper engagement with English-speaking regions, such as the United States, United Kingdom, Canada, Australia, and more.",
      link: "",
    },
    {
      title: "Personal Growth",
      img: kids3,
      description:
        "Mastery of English promotes cognitive development, critical thinking, and communication skills, preparing children for success in an increasingly interconnected world.",
      link: "",
    },
  ];

  return (
    <div className="mb-[112px]">
      <div className="text-black text-2xl mb-12 text-center font-bold max-md:text-lg ">
        Why kids should learn French?
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <WhyKidShouldLearnCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WhyKidsShouldLearnEnglish;
