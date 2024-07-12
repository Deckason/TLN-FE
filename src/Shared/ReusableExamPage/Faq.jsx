"use client";
import FaqsCard from "../../Shared/FaqsCard";
import frenchFlag from "../../Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";

const Faqs = ({ data }) => {
  const [faqs, setFaqs] = useState(data.slice(0, 6)); // Initialize state with sliced data

  const toggleSplicing = () => {
    setFaqs(splicing ? data.slice(0, 6) : data); // Toggle between sliced and full data
    setSplicing(!splicing); // Toggle splicing state
  };

  const [splicing, setSplicing] = useState(true);

  return (
    <div className="flex  justify-center bg-[#F6F3F3] pb-[112px]">
      <div className="max-w-[1463px] flex-col justify-center w-full mx-auto items-center  gap-12 flex">
        <div className="flex-col w-full justify-center items-center gap-12 flex">
          <div className="text-black text-4xl font-bold ">FAQs</div>
          <div className="lg:justify-around justify-center xl:justify-around mx-4 h-full items-center gap-5 max-xl:gap-4 flex w-full xl:flex-row  flex-col">
            <div className="w-fit xl:ml-0 lg:ml-0 ml-6 lg:order-2 order-1 pr-5 flex justify-center">
              <Image
                alt="frenchFlag"
                className=" w-full object-contain max-h-[508px] rounded-2xl"
                src={frenchFlag}
              />
            </div>
            <div className="flex-col xl:w-[869px] w-full px-5 mx-auto lg:order-1 order-2 gap-y-2 gap-x-2">
              {faqs.map((faq, index) => (
                <FaqsCard key={index} data={faq} i={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full px-8">
        <button
          onClick={toggleSplicing}
          className="h-[58px] px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-center text-teal-600 text-2xl font-medium">
            {splicing ? "Read less FAQs" : "Read all FAQs"}
          </div>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
