import dele from "@/Assets/Spanish/DELE.png";
import seile from "@/Assets/Spanish/Siele.png";
import PreapareForExamCard from "@/Shared/PreapareForExamCard";

const PreapareForSpanishExam = () => {
  const levelDatas = [
    {
      title: "DELE preparation classes",
      img: dele,
      description:
        "Achieve Spanish language proficiency with our DELE exam preparation courses. These diplomas are internationally recognised and validate your Spanish skills for academic, professional, or personal purposes.",
      link: "",
    },
    {
      title: "SIELE preparation classes",
      img: seile,
      description:
        "Prepare for the SIELE exam, a globally recognized certification of Spanish language proficiency. Whether for academic or professional advancement, our courses are tailored to help you succeed.",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-black text-2xl mb-12 text-center font-bold ">
        Prepare for French Exams
      </div>
      <div className="xl:grid-cols-2 2xl:max-w-[1440px] max-w-8xl h-fit flex-wrap justify-center gap-1 max-md:gap-5 md:gap-2 px-5 mx-auto w-full lg:gap-[18px] md:grid-cols-2 grid items-center mt-[48px] ">
        {levelDatas.map((data, index) => (
          <PreapareForExamCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PreapareForSpanishExam;
