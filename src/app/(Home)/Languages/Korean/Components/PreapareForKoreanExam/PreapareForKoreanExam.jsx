import dalf from "@/Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "@/Assets/FrenchPage/FrenchMain/delf.png";
import telf from "@/Assets/FrenchPage/FrenchMain/telf.png";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForKoreanExam = () => {
  const levelDatas = [
    {
      title: "TOPIK",
      img: dalf,
      description:
        "Get ready for the TOPIK proficiency exam with our expert courses. Our comprehensive curriculum covers all aspects of the exam, helping you excel in vocabulary, grammar, listening, and speaking. Join us and achieve your Korean language goals!        ",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for Korean Exams
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForKoreanExam;
