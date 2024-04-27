import ielts from "@/Assets/GermanMainPage/Gothe.svg";

import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForGermanExam = () => {
  const levelDatas = [
    {
      title: "TOPIK",
      img: ielts, // Assuming ielts is the variable holding the image URL for IELTS
      description:
        "Get ready for the TOPIK proficiency exam with our expert courses. Our comprehensive curriculum covers all aspects of the exam, helping you excel in vocabulary, grammar, listening, and speaking. Join us and achieve your Korean language goals!",
      link: "", // You can insert the link here
    },
  ];

  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for Korean Exams
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
