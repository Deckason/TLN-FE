"use client";
import FaqsCard from "@/Shared/FaqsCard";
import frenchFlag from "@/Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";

const FaqsSudyAbroad = () => {
  const datas = [
    {
      question:
        "What advantages does studying a language with The Language Network offer for individuals planning to pursue education abroad?",
      answer:
        "Studying a language with The Language Network offers a dynamic, immersive experience, nurturing language proficiency and cultural understanding essential for studying abroad. It promotes personal growth, enhances inter-cultural communication skills, and broadens global perspectives. Additionally, students receive valuable support services, including counselling and free study materials worth ₹10,000+, ensuring they are well-equipped for success in their educational endeavors overseas.",
    },
    {
      question:
        "What job opportunities will I get after completing my Spanish course?",
      answer:
        "Upon completing your Spanish course, you'll gain access to job opportunities in fields like translation, tourism, international relations, teaching, business, diplomacy, and more.",
    },
    {
      question: "What if I miss a class?",
      answer:
        "Missing a class should not be a worry as you will have lifetime access to the recorded classes and can refer to them at your convenience.",
    },
    {
      question: "Will I be provided with study material?",
      answer:
        "Yes, you'll be provided with comprehensive free study material worth ₹10,000+ to supplement your learning and reinforce key concepts.",
    },
    {
      question: "How many students are accommodated in one batch?",
      answer:
        "Our batches are usually small in size, typically accommodating 5 students to ensure personalized attention.",
    },
    {
      question: "What is included in the curriculum?",
      answer:
        "The curriculum includes grammar, vocabulary, listening, speaking, reading, and writing exercises tailored to each proficiency level, along with cultural insights and practical applications.",
    },
    {
      question:
        "Are online degrees and certificates recognized by academic institutions?",
      answer:
        "Yes, our certificates hold ISO certification and are recognized pan India. However, achieving global recognition often requires candidates to take international proficiency exams and obtain corresponding certificates in respective languages. We also prepare for language proficiency exams, the certificates for which are recognized worldwide.",
    },
    {
      question:
        "How do instructors assess students' progress in proficiency exam training courses?",
      answer:
        "Instructors regularly assess students' progress through practice exams, speaking assessments, writing assignments, and other progress-based assessments.",
    },
    {
      question:
        "Is it necessary to learn a foreign language before moving overseas for your education?",
      answer:
        "While learning the language may not be mandatory, it significantly enhances your experience. It aids in adjustment, boosts interaction, opens doors to internships and jobs, and can even be advantageous for permanent residency applications.",
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

export default FaqsSudyAbroad;
