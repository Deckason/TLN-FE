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
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

  return (
    <div className="my-[50px] lg:my-[90px] max-w-[1681px] mx-[10px] sm:mx-auto flex flex-col justify-center w-full items-center ">
      <div>
        <h1 className="text-center mb-[40px] text-stone-900 sm:mx-4 sm:px-4 font-semibold text-[32px]/[39px] lg:text-[40px]/[48.01px] md:text-3xl xl:text-[50px]/[60px] 2xl:text-[60px]/[72px] sm:font-bold">
          We prepare you for International Proficiency Exams
        </h1>
      </div>
      <div className="flex sm:mx-4 xl:flex-wrap lg:flex-wrap md:flex-nowrap justify-center md:mx-auto items-center w-[90%] sm:w-[350px] lg:w-[1000px] xl:w-[1270px] 2xl:gap-[30px] xl:gap-[25px] lg:gap-[20px] gap-[15px]">
        <div className="slider">
          <div className="slide-track flex">
            {logos.map((logo, index) => (
              <div className="slide w-[160px]" key={index}>
                <Image
                  className="rounded-md"
                  alt={`Proficiency Exam Logo ${index + 1}`}
                  src={logo}
                  width={160}  // Use specific width and height to ensure clarity
                  height={80}   // Adjust based on the original aspect ratio
                  quality={100} // Use high-quality image rendering
                  priority={index === 0} // Prioritize the first image for faster loading
                />
              </div>
            ))}

            {/* Looping images for continuous scrolling */}
            {logos.map((logo, index) => (
              <div className="slide w-[160px]" key={index + logos.length}>
                <Image
                  className="rounded-md"
                  alt={`Proficiency Exam Logo ${index + 1}`}
                  src={logo}
                  width={160}
                  height={80}
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProficiencyExams;
