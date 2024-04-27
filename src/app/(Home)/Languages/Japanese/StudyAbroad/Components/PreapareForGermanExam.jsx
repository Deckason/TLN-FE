import ielts from "@/Assets/GermanMainPage/Gothe.svg";

import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForGermanExam = () => {
  const levelDatas = [
    {
      title: "JLPT",
      img: ielts, // Assuming ielts is the variable holding the image URL for IELTS
      description:
        "Master the JLPT with our expert courses, the global benchmark for Japanese proficiency. We meticulously cover vocabulary, grammar, reading, and listening, ensuring your success in all exam sections.",
      link: "", // You can insert the link here
    },
  ];

  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for Japanese Exams
      </div>
      <div className="xl:grid-cols-1 max-xl:max-w-[480px] xl:max-w-[480px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-1 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForGermanExam;
