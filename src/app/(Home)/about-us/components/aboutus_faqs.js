"use client";
import FaqsCard from "../../../../Shared/FaqsCard";
import frenchFlag from "../../../../Assets/FrenchPage/FrenchMain/FaqImg.svg";
import Image from "next/image";
import { useState } from "react";

const Faqscbus = () => {
  const datas = [
    {
      question: "What is The Language Network?",
      answer:
        "The Language Network is a platform dedicated to revolutionizing language learning. We offer a diverse range of courses in foreign languages, designed to make learning accessible, engaging, and impactful for learners of all levels. Our community comprises passionate language enthusiasts and experienced trainers, united by a shared commitment to fostering cultural understanding and linguistic proficiency. At The Language Network, we believe in the power of language to connect people and open doors to new opportunities.",
    },
    {
      question: "Which languages does The Language Network teach?",
      answer:
        "The Language Network teaches 7 foreign language courses which are French, Spanish, German, English, Mandarin, Japanese, and Korean. ",
    },
    {
      question:
        "Why learn with The Language Network?",
      answer:
        "Learn with The Language Network for personalised instruction, flexible scheduling, and immersive learning experiences tailored to your specific needs. Our expert tutors offer 1:1 and small group classes, ensuring personalised attention and effective learning. Additionally, we provide recordings of classes for your convenience and offer free study material worth ₹10,000+ to support your language learning journey.",
    },
    {
      question: "Are there specific prerequisites for becoming a collaboration partner with The Language Network?",
      answer:
        "The Language Network welcomes collaboration partners who are committed to language learning. While specific requirements may vary for each collaborator we value diversity and a shared dedication to our goals. We're happy to discuss potential partnerships and tailor them to suit your needs.",
    },
    {
      question: "What makes The Language Network different from other language training schools?",
      answer:
        "At The Language Network, we distinguish ourselves from traditional language training schools by offering a holistic approach to learning. Beyond exam preparation, we delve into the cultural nuances and historical context of each language, fostering experiential learning. Our classes are engaging and interactive, tailored to learners of all ages. Led by internationally certified trainers, we provide a supportive environment for language enthusiasts to thrive, all from the comfort of their own homes.",
    },
    {
      question: "Where will the classes be conducted?",
      answer:
        "The classes are conducted online on Microsoft Teams.",
    },
    {
      question: "What is the duration of each class?",
      answer:
        "A typical class lasts for 2 hours, either on weekdays or on weekends depending on your choice of batch. The classes are designed to suit each age group and any goal.",
    },
    {
      question: "Can the classes be downloaded?",
      answer:
        "Certainly! Upon the conclusion of each class, the recorded session is promptly sent to the student, enabling them to access it at any time. Additionally, students have lifetime access to these recorded sessions, ensuring they can review the material at their own pace whenever they need to.",
    },
    {
      question: "Will I get a certificate after completing each level?",
      answer:
        "Yes, you will receive a certificate upon completion of each level. We, as a language school are ISO-certified and our certificates are PAN India recognised. We also prepare for language proficiency exams, the certificates for which are recognised worldwide.",
    },
    {
      question: " Will I be provided with study material?",
      answer:
        "Yes, you'll be provided with comprehensive study material worth ₹10,000+ free of cost to supplement your learning and reinforce key concepts.",
    },
    {
      question: " Who will be teaching me?",
      answer:
        "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both your target language and teaching methodologies.",
    },
    {
      question: "How many students are accommodated in one batch?",
      answer:
        "Our batches are usually small in size, typically accommodating 5 students to ensure personalised attention. ",
    },
    {
      question: "What is included in the curriculum?",
      answer:
        "The curriculum includes grammar, vocabulary, listening, speaking, reading, and writing exercises tailored to each proficiency level, along with cultural insights and practical applications. ",
    },
  ];
  const [splicing, setsplicing] = useState(true);
  return (
    <div className="flex justify-center bg-[#F6F3F3] pb-[112px]">
      <div className="max-w-[1463px] flex-col justify-center w-full mx-auto items-start gap-7 flex">
        <div className="flex-col justify-start items-center gap-12 flex">
          <div className="text-black md:text-5xl text-2xl font-bold pt-5">FAQs</div>
          <div className="justify-center mx-4 h-full items-center max-xl:gap-4 order-2  grid lg:grid-cols-2 max-xl:flex-col-reverse">
            <div className="w-full lg:order-2 order-1 flex justify-center">
              <Image
                alt="frenchFlag"
                className="max-w-[562px] w-full object-contain  max-h-[508px] rounded-2xl"
                src={frenchFlag}
              />
            </div>
            <div className="flex-col md:w-full mx-auto lg:order-1 order-2 gap-y-2 gap-x-2">
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
            className="h-[48px] sm:h-[58px] px-4 sm:px-8 py-2 sm:py-3.5 rounded-lg border border-teal-600 justify-center items-start gap-2.5 inline-flex ml-4"
            >
            <div className="text-center text-teal-600 text-lg sm:2xl font-medium">
                {!splicing ? "Read less FAQs" : "Read all FAQs"}
            </div>
        </button>
      </div>
    </div>
  );
};

export default Faqscbus;
