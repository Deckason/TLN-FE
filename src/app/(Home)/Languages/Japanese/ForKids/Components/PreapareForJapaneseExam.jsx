import delf from "@/Assets/Japanese/jlpt.png";

import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForJapaneseExam = () => {
  const levelDatas = [
    {
      title: "The JLPT",
      img: delf,
      description:
        "Empower your child to excel in the JLPT with our specialized courses designed just for them! The JLPT is the ultimate benchmark for Japanese proficiency, and our expert-led classes are tailored to make learning engaging and effective for kids. We carefully cover vocabulary, grammar, reading, and listening, ensuring their success in every section of the exam. Give your child the tools they need to conquer the JLPT and explore exciting opportunities with our comprehensive courses.",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for Japanese Exams
      </div>
      <div className="xl:grid-cols-1 xl:max-w-[548px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-1 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForJapaneseExam;
