"use client";
import FaqsCard from "@/Shared/FaqsCard";
import frenchFlag from "@/Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";

const FaqsForSpanishKids = () => {
  const datas = [
    {
      question: "Why your child should study with The Language Network?",
      answer:
        "The Language Network offers personalised instruction, flexible scheduling, and immersive learning experiences tailored to your child's specific needs. Our expert tutors offer 1:1 classes for children, ensuring personalised attention and effective learning. Additionally, we provide recordings of classes for their convenience and offer free study material worth ₹5,000+ to support their language learning journey.",
    },
    {
      question: "Why is learning Spanish beneficial for children?",
      answer:
        "Learning Spanish at a young age offers numerous advantages, including cognitive development, academic success, and cultural enrichment.",
    },
    {
      question: "At what age should children start learning Spanish?",
      answer:
        "Children can start learning Spanish as early as primary school age to benefit from enhanced cognitive abilities and language acquisition skills.",
    },
    {
      question:
        "What resources are available to help children learn Spanish effectively?",
      answer:
        "Your child will be provided with comprehensive study material worth ₹5,000+ free of cost to supplement their learning and reinforce key concepts.",
    },
    {
      question: "What levels are assessed in the DELE for children?",
      answer:
        "The DELE exams assess language proficiency at different levels corresponding to the Common European Framework of Reference for Languages (CEFR): A1, A2, B1, and B2.",
    },
    {
      question:
        "How can parents ensure their child's success in learning Spanish?",
      answer:
        "Parents can monitor their child's progress by screening their weekly assessments and performance. Additionally, Parents can facilitate their child's proficiency in Spanish by establishing a nurturing environment at home and promoting consistent language practice through diverse activities.",
    },
  ];

  const [splicing, setsplicing] = useState(true);
  return (
    <div className="flex justify-center bg-[#F6F3F3] pb-[112px]">
      <div className="max-w-[1463px] flex-col justify-center w-full mx-auto items-center  gap-12 flex">
        <div className="flex-col justify-start items-center gap-12 flex">
          <div className="text-black text-2xl font-bold ">FAQs</div>
          <div className="justify-center mx-4 h-full items-center max-xl:gap-4 order-2  grid lg:grid-cols-2 max-xl:flex-col-reverse">
            <div className="w-full lg:order-2 order-1 flex justify-center">
              <Image
                alt="frenchFlag"
                className="max-w-[562px] w-full object-contain  max-h-[508px] rounded-2xl"
                src={frenchFlag}
              />
            </div>
            <div className="flex-col  md:w-full mx-auto lg:order-1 order-2 gap-y-2 gap-x-2">
              {splicing &&
                datas
                  .splice(0, 6)
                  .map((data, index) => (
                    <FaqsCard key={index} data={data} i={index} />
                  ))}
              {!splicing &&
                datas.map((data, index) => (
                  <FaqsCard key={index} data={data} i={index} />
                ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => setsplicing(!splicing)}
          className="h-[58px] px-8 py-3.5 rounded-lg border border-teal-600 justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-center text-teal-600 text-2xl font-medium ">
            {!splicing ? "Read less FAQs" : "Read all FAQs"}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FaqsForSpanishKids;
