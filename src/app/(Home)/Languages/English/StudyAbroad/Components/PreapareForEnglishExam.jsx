import ielts from "@/Assets/English/ielts.png";
import toefl from "@/Assets/English/toefl.webp";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForEnglishExam = () => {
  const levelDatas = [
    {
      title: "IELTS",
      img: ielts, // Assuming ielts is the variable holding the image URL for IELTS
      description:
        "Take your English skills to new heights with our IELTS preparation course. Designed to help you excel in all four components - reading, writing, listening, and speaking - our expert instructors will guide you towards success in this globally recognized English proficiency exam.",
      link: "", // You can insert the link here
    },
    {
      title: "TOEFL",
      img: toefl, // Assuming toefl is the variable holding the image URL for TOEFL
      description:
        "Open doors to international opportunities with our TOEFL preparation course. From mastering academic English to excelling in listening, speaking, reading, and writing, our comprehensive training ensures you're fully prepared to ace this crucial exam.",
      link: "", // You can insert the link here
    },
  ];

  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for French Exams
      </div>
      <div className="flex flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-fit lg:gap-[18px] items-center mt-[48px]">
        {levelDatas.map((data, index) => (
          <div key={index} className="max-w-[548px]">
            <PreapareForExamCard data={data} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreapareForEnglishExam;
