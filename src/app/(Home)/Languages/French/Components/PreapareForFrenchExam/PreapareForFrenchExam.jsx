import dalf from "@/Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "@/Assets/FrenchPage/FrenchMain/delf.png";
import telf from "@/Assets/FrenchPage/FrenchMain/telf.png";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForFrenchExam = () => {
  const levelDatas = [
    {
      title: "DALF preparation classes",
      img: dalf,
      description:
        "DALF is an advanced-level French language proficiency exam, suitable for individuals aiming to demonstrate high-level competency in French. It is recognized globally by academic institutions, employers, and immigration authorities.",
      link: "",
    },
    {
      title: "DELF preparation classes",
      img: delf,
      description:
        "The DELF exam assesses French language proficiency for non-native speakers. It is designed for individuals seeking certification for academic or professional purposes, and for those planning to immigrate to French-speaking countries.",
      link: "",
    },
    {
      title: "TEL preparation classes",
      img: telf,
      description:
        "The TEF exam is an internationally recognized French language proficiency test for individuals seeking to assess their French language abilities. It is widely accepted by academic institutions, employers, and immigration authorities worldwide.",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for French Exams
      </div>
      <div className="xl:grid-cols-3 2xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForFrenchExam;
