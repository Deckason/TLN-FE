import dalf from "@/Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "@/Assets/FrenchPage/FrenchMain/delf.png";
import telf from "@/Assets/FrenchPage/FrenchMain/telf.png";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForFrenchExam = () => {
  const levelDatas = [
    {
      title: "DELF Prim",
      img: delf, // Assuming delf is the variable holding the image URL for DELF
      description:
        "Prepare your child for success with the DELF Prim exam, tailored for young learners in primary school. Our specialized program ensures they're fully equipped to showcase their French language skills confidently and excel in their academic endeavors.",
      link: "", // You can insert the link here
    },
    {
      title: "DALF",
      img: dalf, // Assuming dalf is the variable holding the image URL for DALF
      description:
        "DALF is an advanced-level French language proficiency exam, suitable for individuals aiming to demonstrate high-level competency in French. It is recognized globally by academic institutions, employers, and immigration authorities.",
      link: "", // You can insert the link here
    },
    {
      title: "TEF",
      img: telf, // Assuming tef is the variable holding the image URL for TEF
      description:
        "The TEF exam is an internationally recognized French language proficiency test for individuals seeking to assess their French language abilities. It is widely accepted by academic institutions, employers, and immigration authorities worldwide.",
      link: "", // You can insert the link here
    },
  ];

  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for French Exams
      </div>
      <div className="xl:grid-cols-3 xl:max-w-[1440px] max-w-8xl  flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForFrenchExam;
