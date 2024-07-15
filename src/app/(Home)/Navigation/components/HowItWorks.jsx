import React from "react";
import Image from "next/image";

const HowItWorks = ({ data }) => {
  return (
    <>
      <h2 className="text-[35px]/[50px] sm:text-[40px]/[55px] md:text-[45px]/[60px] lg:text-[50px]/[65px] xl:text-[55px]/[70px] 2xl:text-[60px]/[72.61px] text-[#1E1E1E] font-bold text-center mt-[50px] xl:mt-[90px] 2xl:mt-[120px] mb-[67px]">
        How it works?
      </h2>
      <div className="sm:pb-20 pt-8 pb-8">
        <div className="container mx-auto sm:px-16 px-5 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto">
            {data.map((val, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center xl:w-[340px] 2xl:w-[360px] "
                >
                  <div className="flex items-center justify-center h-fit w-full px-8">
                    <Image
                      width={359}
                      height={140}
                      src={val.icon}
                      className="w-full"
                      alt="Form Image"
                    />
                  </div>
                  <div className="bg-white rounded-lg border border-primary-color text-xl mt-5 text-center w-full h-[225px] lg:h-auto">
                    <h5 className="bg-primary-color py-3 mb-5 text-white ">
                      {val.heading}
                    </h5>
                    <p className="text-gray-600 mx-[40px] my-[8px] text-center h-fit min-h-32 ">
                      {val.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
