import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import OnlineClassCard from "@/Shared/OnlineClassCard";
import WhyKidShouldLearnCard from "@/Shared/WhyKidShouldLearnCard";
import kids1 from "@/Assets/FrenchPage/FrenchForKids/kids (1).png";
import kids2 from "@/Assets/FrenchPage/FrenchForKids/kids (2).png";
import kids3 from "@/Assets/FrenchPage/FrenchForKids/kids (3).png";

const WhyKidsShouldLearnJapanese = () => {
  const levelDatas = [
    {
      title: "Global Communication",
      img: kids1,
      description:
        "Japanese is spoken by over 130 million people worldwide facilitating connections in business, technology, and pop culture.",
      link: "",
    },
    {
      title: "Cultural Enrichment",
      img: kids2,
      description:
        "Learning Japanese exposes children to rich traditions, anime, manga, and culinary delights, fostering cultural appreciation and understanding.",
      link: "",
    },
    {
      title: "Educational Advantages",
      img: kids3,
      description:
        "Enhances cognitive skills, such as problem-solving and creativity, and provides insights into Japan's innovative advancements in technology and science.",
      link: "",
    },
    {
      title: "Career Opportunities",
      img: kids1,
      description:
        "Proficiency in Japanese opens doors in diverse fields like gaming, animation, automotive, and tourism, offering competitive advantages in global markets.",
      link: "",
    },
    {
      title: "Travel and Exploration",
      img: kids2,
      description:
        "Enables deeper exploration of Japan's ancient history, modern cities, scenic landscapes, and unique cultural experiences.",
      link: "",
    },
    {
      title: "Personal Growth",
      img: kids3,
      description:
        "Fosters resilience, adaptability, and cross-cultural communication skills, preparing children for success in an interconnected world.",
      link: "",
    },
  ];

  return (
    <div className="mb-[112px]">
      <div className="text-black text-2xl mb-12 text-center font-bold max-md:text-lg ">
        Why kids should learn Japanese?
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <WhyKidShouldLearnCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WhyKidsShouldLearnJapanese;
