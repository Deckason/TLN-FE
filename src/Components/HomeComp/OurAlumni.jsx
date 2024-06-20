import Image from "next/image";
import logo1 from "../../Assets/Homepage/Alumni/logo1.png";
import logo2 from "../../Assets/Homepage/Alumni/logo2.png";
import logo3 from "../../Assets/Homepage/Alumni/logo3.png";
import logo4 from "../../Assets/Homepage/Alumni/logo4.png";
import logo5 from "../../Assets/Homepage/Alumni/logo5.png";
const OurAlumni = () => {
  return (
    <div>
      <div className="lg:my-[112px] w-full my-10 max-w-[1270px] 2xl:max-w-[1681px]  mx-auto flex justify-center items-center ">
        <div>
          {" "}
          <div>
            <h1 className="text-stone-900 text-2xl  lg:text-2xl font-bold text-center mb-[20.9px]">
              Our Alumni Network
            </h1>
          </div>
          <div className="flex  flex-wrap justify-center items-center lg:w-[1000px] w-[350px] xl:w-[1270px] gap-[30px]">
            <div className="slider">
              <div className="slide-track">
                <div className="slide w-[160px]">
                  <Image className="" alt="logo" src={logo1} />
                </div>
                <div className="slide w-[160px]">
                  <Image className="" alt="logo" src={logo2} />
                </div>
                <div className="slide w-[160px] ">
                  <Image className="" alt="logo" src={logo3} />
                </div>
                <div className="slide w-[160px] ">
                  <Image className="" alt="logo" src={logo4} />
                </div>
                <div className="slide w-[160px] ">
                  <Image className="" alt="logo" src={logo5} />
                </div>
                <div className="slide w-[160px] ">
                  <Image className="" alt="logo" src={logo1} />
                </div>
                <div className="slide w-[160px]">
                  <Image className="" alt="logo" src={logo2} />
                </div>
                <div className="slide w-[160px] ">
                  <Image className="" alt="logo" src={logo3} />
                </div>
                <div className="slide w-[160px] ">
                  <Image className="" alt="logo" src={logo4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAlumni;
