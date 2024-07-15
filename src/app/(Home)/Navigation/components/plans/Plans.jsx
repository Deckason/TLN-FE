import Image from "next/image";
import React from "react";
import PlansCard from "./PlansCard";

const Plans = ({ data }) => {
  return (
    <>
      <div >
        <h2 className="text-[35px]/[50px] sm:text-[40px]/[55px] md:text-[45px]/[60px] lg:text-[50px]/[65px] xl:text-[55px]/[70px] 2xl:text-[60px]/[72.61px] text-[#1E1E1E] font-bold text-center mt-[50px] xl:mt-[90px] 2xl:mt-[120px] mb-[67px]">
          3 Plans
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mx-auto sm:mx-10 md:mx-12 lg:mx-16  gap-[32px] justify-items-center">
            {data.map((val, index) => {
              return <PlansCard cardData={val} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
