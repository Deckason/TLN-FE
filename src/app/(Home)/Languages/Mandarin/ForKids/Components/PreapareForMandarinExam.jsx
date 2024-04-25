import delf from "@/Assets/Mandarin/HSK.jpg";

import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForMandarinExam = () => {
  const levelDatas = [
    {
      title: "HSK",
      img: delf,
      description:
        "Prepare your child for Mandarin proficiency exam with us. Covering vocabulary, grammar, reading, and listening skills, our program ensures comprehensive preparation. With engaging lessons and mock exams, we foster confidence and success and empower your child's language journey!     ",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for Mandarin Exams
      </div>
      <div className="xl:grid-cols-1 xl:max-w-[548px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-1 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForMandarinExam;
