import dalf from "@/Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "@/Assets/FrenchPage/FrenchMain/delf.png";
import telf from "@/Assets/FrenchPage/FrenchMain/telf.png";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForEnglishExam = () => {
  const levelDatas = [
    {
      title: "Cambridge Assessment",
      img: delf,
      description:
        "Prepare your child for success with our Cambridge Assessment Exam preparation courses! We prioritize a holistic approach, focusing on all aspects of learning- listening, speaking, reading, and writing. With our innovative preparation techniques, your child will build the skills they need to ace their exams while enjoying fun activities and engaging lessons.",
      link: "",
    },
  ];

  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for English Exams
      </div>
      <div className="xl:grid-cols-1 xl:max-w-[540px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForEnglishExam;
