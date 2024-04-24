import delf from "@/Assets/KoreanPage/Topik.svg";

import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForKoreanExam = () => {
  const levelDatas = [
    {
      title: "The TOPIK Exam",
      img: delf,
      description:
        "Equip your child for success with our tailored exam course designed for kids. Our comprehensive preparation covers Korean grammar, vocabulary, reading, writing, and listening skills. With engaging lessons, interactive materials, and mock exams, we provide the perfect platform for kids to excel in the TOPIK exam.         ",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for Korean Exams
      </div>
      <div className="xl:grid-cols-1 xl:max-w-[548px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-1 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForKoreanExam;
