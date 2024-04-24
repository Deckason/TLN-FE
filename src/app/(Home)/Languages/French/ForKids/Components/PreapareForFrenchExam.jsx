import dalf from "@/Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "@/Assets/FrenchPage/FrenchMain/delf.png";
import telf from "@/Assets/FrenchPage/FrenchMain/telf.png";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForFrenchExam = () => {
  const levelDatas = [
    {
      title: "DELF Junior",
      img: delf,
      description:
        "Prepare your child for success in the DELF Junior exam with our specialized program. Our engaging lessons and targeted practice ensure they're fully equipped to excel and achieve their language goals.",
      link: "",
    },
    {
      title: "DELF Prim",
      img: delf,
      description:
        "Prepare your child for success with the DELF Prim exam, tailored for young learners in primary school. Our specialized program ensures they're fully equipped to showcase their French language skills confidently and excel in their academic endeavors.",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for French Exams
      </div>
      <div className="xl:grid-cols-2 xl:max-w-[940px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForFrenchExam;
