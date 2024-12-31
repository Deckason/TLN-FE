"use client";
import Image from "next/image";
import { useGetAllAlumniQuery } from "../../store/apiSlice";

const OurAlumni = () => {
  const { data: logoImg } = useGetAllAlumniQuery(""); 
 
  return (
    <div>
      <div className="w-full max-w-[1270px] 2xl:max-w-[1681px] mx-auto flex justify-center items-center">
        <div>
          <div>
            <h1 className="text-stone-900 text-[24px]/[29px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[72px] font-bold text-center mb-[20.9px]">
              Our Alumni Network
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center lg:w-[1000px] w-[350px] xl:w-[1270px] gap-[30px]">
            <div className="slider">
              <div className="slide-track">
                {logoImg && logoImg.length > 0 ? (
                  logoImg.map((logo, index) => (
                    <div className="slide w-[160px]" key={index}>
                      <Image className="" alt="logo" src={logo.image} width={160} height={160}/>
                    </div>
                  ))
                ) : (
                  <p>Loading logos...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAlumni;