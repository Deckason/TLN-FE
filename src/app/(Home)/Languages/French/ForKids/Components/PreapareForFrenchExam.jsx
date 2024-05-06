import dalf from "@/Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "@/Assets/FrenchPage/FrenchMain/delf.png";
import telf from "@/Assets/FrenchPage/FrenchMain/telf.png";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForFrenchExam = () => {
  const levelDatas = [
    {
      title: "DELF",
      img: delf, // Assuming ielts is the variable holding the image URL for IELTS
      description:
        "The DELF exam assesses French language proficiency for non-native speakers.It is designed for individuals seeking certification for academic or professional purposes, and for those planning to immigrate to French-speaking countries. ",
      link: "/Languages/French/exam/delf", // You can insert the link here
    },
    {
      title: "DALF",
      img: dalf, // Assuming ielts is the variable holding the image URL for IELTS
      description:
        "DALF is an advanced-level French language proficiency exam, suitable for individualsaiming to demonstrate high-level competency in French. It is recognized globally by academicinstitutions, employers, and immigration authorities.",
      link: "/Languages/French/exam/delf", // You can insert the link here
    },
    {
      title: "TEF",
      img: telf, // Assuming ielts is the variable holding the image URL for IELTS
      description:
        "The TEF exam is an internationally recognized French language proficiency test forindividuals seeking to assess their French language abilities. It is widely accepted by academicinstitutions, employers, and immigration authorities worldwide.",
      link: "/Languages/French/exam/delf", // You can insert the link here
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
            <PreapareForExamCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreapareForFrenchExam;
