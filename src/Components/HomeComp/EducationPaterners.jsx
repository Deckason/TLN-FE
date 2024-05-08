import Image from "next/image";
import logo1 from "@/Assets/Homepage/Educationalbar/EducationalBar.png";
const EducationPartners = () => {
  return (
    <div>
      <div className="my-[112px] max-w-[1681px]  mx-auto flex justify-center items-center ">
        <section>
          {" "}
          <div>
            <h1 className="text-stone-900 text-xl  lg:text-2xl font-bold text-center mb-[20.9px]">
              Our Educational Partners
            </h1>
          </div>
          <div className="flex  flex-wrap justify-center items-center w-full gap-[30px]">
            <Image
              className="w-full lg:flex hidden lsw-[160px]"
              alt="logo"
              src={logo1}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationPartners;
