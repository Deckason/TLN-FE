import Image from "next/image";
import React from "react";

const AboutDelf = (data) => {
  return (
    <div className="mt-10">
      <div className="w-full  justify-center items-center flex-col flex">
        <div className=" p-5 w-full xl:w-full justify-center items-center flex-col flex">
          <div className="lg:text-[30px] text-[20px] xl:text-[40px] font-bold text-center">
            {data.data.title}
          </div>
        </div>
        <div className=" gap-10 p-5 w-full xl:w-full justify-center items-center xl:flex-row lg:flex-row flex-col flex">
          <Image src={data.data.image} className="w-[549px]" alt="delf" />
          <div className="xl:w-[779px] xl:text-center lg:text-center text-center lg:w-[779px] w-full  p-5 shadow-md hover:shadow-xl transition duration-300 rounded-lg">
            <div className="text-[24px] font-bold">{data.data.paraTitle}</div>
            <div className="text-[20px]">{data.data.para}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDelf;
