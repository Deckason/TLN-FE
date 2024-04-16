import Image from "next/image";
import logo1 from "@/Assets/Homepage/Alumni/logo1.png";
import logo2 from "@/Assets/Homepage/Alumni/logo2.png";
import logo3 from "@/Assets/Homepage/Alumni/logo3.png";
import logo4 from "@/Assets/Homepage/Alumni/logo4.png";
import logo5 from "@/Assets/Homepage/Alumni/logo5.png";
const OurAlumni = () => {
  return (
    <div>
      <div className="my-[112px] max-w-[1681px]  mx-auto flex justify-center items-center ">
        <section>
          {" "}
          <div>
            <h1 className="text-stone-900 text-xl  lg:text-2xl font-bold text-center mb-[20.9px]">
              Our Alumni Network
            </h1>
          </div>
          <div className="flex  flex-wrap justify-center items-center w-full gap-[30px]">
            <Image className="w-[160px]" alt="logo" src={logo1} />
            <Image className="w-[160px]" alt="logo" src={logo2} />
            <Image className="w-[160px]" alt="logo" src={logo3} />
            <Image className="w-[160px]" alt="logo" src={logo4} />
            <Image className="w-[160px]" alt="logo" src={logo5} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurAlumni;
