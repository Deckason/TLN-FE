import Image from "next/image";
import React from "react";

const AboutDelf = (data) => {
  return (
    <div className="mt-10 lg:mt-[60px] xl:mt-[120px] 2xl:mt-[180px] 3xl:mt-[240px]">
      <div className="w-full  justify-center items-center flex-col flex">
        <div className="w-full justify-center items-center flex-col flex">
          {/* <div className="lg:text-[30px] text-[20px] xl:text-[40px] font-bold text-center"> */}
          <div className="text-black text-[24px]/[29px] sm:text-[36px]/[45px] lg:text-[40px]/[50px] xl:text-[50px]/[60px] 2xl:text-[60px]/[80px] mb-[20px] lg:mb-12 text-center font-bold ">
            {data.data.title}
          </div>
        </div>
        <div className=" xl:w-[80%] 2xl:w-[1100px] 3xl:w-[1200px] 4xl:w-[1440px] lg:mx-10 mx-4 2xl:mx-auto  relative  flex justify-center items-center flex-col">
          <div className="lg:gap-10 p-5 w-full justify-center items-center xl:flex-row lg:flex-row flex-col flex shadow-examShadow transition duration-300 rounded-lg">
            <Image
              src={data.data.image}
              className="w-[300px] lg:w-[549px]"
              alt="delf"
            />
            <div className="xl:w-[779px] xl:text-center lg:text-center text-center lg:w-[779px] w-full">
              <div className="text-[24px]/[29px] font-bold lg:text-left lg:mt-[20px]">
                {data.data.paraTitle}
              </div>
              <div className="text-[20px]/[28px] text-[#757575] lg:text-left my-[10px] lg:my-[20px] ">
                {data.data.para}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDelf;
