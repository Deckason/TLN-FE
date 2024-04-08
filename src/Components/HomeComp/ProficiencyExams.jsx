import logo1 from "@/Assets/Homepage/ProficiencyExam/logo1.png";
import logo2 from "@/Assets/Homepage/ProficiencyExam/logo2.png";
import logo3 from "@/Assets/Homepage/ProficiencyExam/logo3.png";
import logo4 from "@/Assets/Homepage/ProficiencyExam/logo4.png";
import logo5 from "@/Assets/Homepage/ProficiencyExam/logo5.png";
import logo6 from "@/Assets/Homepage/ProficiencyExam/logo6.png";
import logo7 from "@/Assets/Homepage/ProficiencyExam/logo7.png";
import logo8 from "@/Assets/Homepage/ProficiencyExam/logo8.png";
import logo9 from "@/Assets/Homepage/ProficiencyExam/logo9.png";
import Image from "next/image";
const ProficiencyExams = () => {
  return (
    <div className="my-[112px] max-w-[1681px]  mx-auto flex justify-center items-center ">
      <section>
        {" "}
        <div>
          <h1 className="text-stone-900 text-xl  lg:text-2xl font-bold text-center mb-[88.9px]">
            We prepare you for International Proficiency Exams
          </h1>
        </div>
        <div className="flex  flex-wrap justify-center items-center w-full gap-[30px]">
          <Image className="w-[160px]" alt="logo" src={logo1} />
          <Image className="w-[160px]" alt="logo" src={logo2} />
          <Image className="w-[160px]" alt="logo" src={logo3} />
          <Image className="w-[160px]" alt="logo" src={logo4} />
          <Image className="w-[160px]" alt="logo" src={logo5} />
          <Image className="w-[160px]" alt="logo" src={logo6} />
          <Image className="w-[160px]" alt="logo" src={logo7} />
          <Image className="w-[160px]" alt="logo" src={logo8} />
          <Image className="w-[160px]" alt="logo" src={logo9} />
        </div>
      </section>
    </div>
  );
};

export default ProficiencyExams;
