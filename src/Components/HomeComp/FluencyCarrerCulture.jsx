"use client";
import step1 from "../../../public/homepage/steps/step1.png";
import step2 from "../../../public/homepage/steps/step2.png";
import step3 from "../../../public/homepage/steps/step3.png";

import FluencyCultureCard from "./FluencyCultureCard";
const FluencyCarrerCulture = () => {
  const datas = [
    {
      id: 1,
      title: "Register with us",
      description:
        "Complete our form with your details and language preference to register. Our team will then assist you with online classes, study materials, and more!",
      img: step1,
    },
    {
      id: 2,
      title: "Experience a free demo class",
      description:
        "Discover the power of learning with our complimentary demo class at your convenient time!",
      img: step2,
    },
    {
      id: 3,
      title: "Get started",
      description:
        "Love our demo- now pick and choose batches according to your flexibility and get started on your learning adventure!",
      img: step3,
    },
  ];
  return (
    <div className="4xl:bg-[#F6F3F3] pb-[10px]">
      <section className="">
        <div className="w-full flex justify-center  items-center lg:h-[321px] h-[256px] bg-primary-color flex-col">
          <h1 className="text-center text-neutral-50 lg:text-[45px] text-3xl px-8 font-bold lg:mb-[25px]">
            Fluency, Culture, Career & Beyond
          </h1>
          <h2 className="lg:text-[28px] p-4 text-[18px] text-center  text-neutral-50">
            From learning a new language to living it!
          </h2>
        </div>
      </section>

      <section className="2xl:pt-[56px] 4xl:pt-[112px] flex flex-col justify-center items-center 2xl:gap-[48px]">
        <div className="flex flex-col justify-center items-center 2xl:gap-[8px]">
          <h1 className="text-stone-900 2xl:text-[60px]/[72.61px] xl:text-[45px] max-md:text-2xl max-xl:text-3xl text-[24px] font-bold  text-center ">
            Let&apos;s embark on a Language Trip!
          </h1>
          <h1 className="text-neutral-500 2xl:text-[32px]/[38.73px] font-medium  text-center mb-2">
            Here are the steps
          </h1>
        </div>
        <div className="2xl:w-[1264px] 4xl:w-[1680px] hidden 2xl:flex flex-wrap justify-center 2xl:gap-[16px] 4xl:gap-[18px] items-center">
          {datas.map((data) => {
            return (
              <FluencyCultureCard
                key={data.id}
                datas={data}
              ></FluencyCultureCard>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FluencyCarrerCulture;
