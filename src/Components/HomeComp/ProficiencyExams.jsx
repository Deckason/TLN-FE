import logo1 from "../../Assets/Homepage/ProficiencyExam/logo1.png";
import logo2 from "../../Assets/Homepage/ProficiencyExam/logo2.png";
import logo3 from "../../Assets/Homepage/ProficiencyExam/logo3.png";
import logo4 from "../../Assets/Homepage/ProficiencyExam/logo4.png";
import logo5 from "../../Assets/Homepage/ProficiencyExam/logo5.png";
import logo6 from "../../Assets/Homepage/ProficiencyExam/logo6.png";
import logo7 from "../../Assets/Homepage/ProficiencyExam/logo7.png";
import logo8 from "../../Assets/Homepage/ProficiencyExam/logo8.png";
import logo9 from "../../Assets/Homepage/ProficiencyExam/logo9.png";
import Image from "next/image";
const ProficiencyExams = () => {
  return (
    <div className="my-[90px] max-w-[1681px]  mx-auto flex justify-center w-full items-center ">
      <section>
        {" "}
        <div>
          <h1 className="mb-[40px] text-stone-900 px-4 2xl:text-[45px] xl:text-[45px] max-md:text-2xl max-xl:text-5xl text-[24px] font-bold text-center">
            We prepare you for International Proficiency Exams
          </h1>
        </div>
        <div className="flex   xl:flex-wrap lg:flex-wrap md:flex-nowrap justify-center mx-auto items-center lg:w-[1000px] w-[350px] xl:w-[1270px] 2xl:gap-[30px] xl:gap-[25px] lg:gap-[20px] gap-[15px] ">
          <div className="slider">
            <div className="slide-track">
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo1} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo2} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo3} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo4} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo5} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo6} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo7} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo8} />
              </div>
              <div className="slide w-[160px] text-white">
                <Image className="" alt="logo" src={logo9} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo1} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo2} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo3} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo4} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo5} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo6} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo7} />
              </div>
              <div className="slide  w-[160px]">
                <Image className="" alt="logo" src={logo8} />
              </div>
              <div className="slide w-[160px]  text-white">
                <Image className="" alt="logo" src={logo9} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProficiencyExams;
