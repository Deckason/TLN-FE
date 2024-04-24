import dalf from "@/Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "@/Assets/FrenchPage/FrenchMain/delf.png";
import telf from "@/Assets/FrenchPage/FrenchMain/telf.png";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForEnglishExam = () => {
  const levelDatas = [
    {
      title: "IELTS",
      img: dalf,
      description:
        "Take your English skills to new heights with our IELTS preparation courses. Designed to help you excel in all four components - reading, writing, listening, and speaking - our expert instructors will guide you towards success in this globally recognized English proficiency exam.",
      link: "",
    },
    {
      title: "TOEFL",
      img: dalf,
      description:
        "Open doors to international opportunities with our TOEFL preparation courses. From mastering academic English to excelling in listening, speaking, reading, and writing, our comprehensive training ensures you're fully prepared to ace this crucial exam.",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for English Exams
      </div>
      <div className="xl:grid-cols-2 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForEnglishExam;
