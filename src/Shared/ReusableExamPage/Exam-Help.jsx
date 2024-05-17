import React from "react";

const ExamHelp = (data) => {
  return (
    <div className="w-full mt-10 justify-center items-center flex-col flex">
      <div className=" p-5 w-full xl:w-full justify-center items-center flex-col flex">
        <div className="text-[40px] mb-10 font-bold text-center">
          {data.data.title}
        </div>
        <div className="flex gap-5 flex-wrap">
          {/* First Line */}
          {data.data.data.slice(0, 3).map((card) => (
            <div
              className="w-fit shadow-md hover:shadow-xl transition duration-300 rounded-lg p-5 2xl:max-w-[535px] xl:max-w-[415px] lg:max-w-[380px]"
              key={card.title}
            >
              <div className="text-[24px] font-semibold">{card.title}</div>
              <div className="text-[20px] text-[#6E7191]">
                {card.description}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-5 flex-wrap mt-5">
          {/* Second Line */}
          {data.data.data.slice(3).map((card) => (
            <div
              className="w-fit shadow-md hover:shadow-xl transition duration-300 rounded-lg p-5 lg:max-w-[580px] xl:max-w-[632px] 2xl:max-w-[815px]"
              key={card.title}
            >
              <div className="text-[24px] font-semibold">{card.title}</div>
              <div className="text-[20px] text-[#6E7191]">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamHelp;
