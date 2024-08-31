"use client";
import { TopBar } from "../../../../../../Shared/ReusableExamPage/top-bar";
import UpcomingBatches from "../../../../../../Shared/UpcomingBatches";
import studentPic from "../../../../../../Assets/Homepage/Testomony/testomony.png";
import React from "react";
import StudentsTestomony from "../../../../../../Shared/ReusableExamPage/studentTestmony";
import Say from "../../../../../../Shared/ReusableExamPage/Say";
import Faqs from "../../../../../../Shared/ReusableExamPage/Faq";
import LanguageLessons from "../../../../../../Shared/FrenchAdultReusableComponents/Languagelessons/LanguageLessons";
import SubscribeToOur from "../../../../../../Shared/SubscribeToOur";
import PaymentBar from "../../../../../../Components/HomeComp/PaymentBar";
import ExamHelp from "../../../../../../Shared/ReusableExamPage/Exam-Help";
import AboutDelf from "../../../../../../Shared/ReusableExamPage/About-Delf";
import SIELE from "../../../../../../Assets/Spanish/Siele.png";

//components
import Banner from "../../../../../../Shared/ReusableExamPage/Banner";
import FaqsExam from "../../../../../../Shared/ReusableExamPage/FaqsExam";

const page = () => {
  const StudentTestimonialsData = {
    title: "What our Spanish students say",
    testimonial: [
      {
        id: 1,
        text: "Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!",
        studentName: "Komal Patil",
        studentImage: studentPic, // assuming studentPic is the URL of the image
        course: "MBA in Marketing",
        rating: 4.5,
      },
      {
        id: 2,
        text: "Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!",
        studentName: "Komal Patil",
        studentImage: studentPic, // assuming studentPic is the URL of the image
        course: "MBA in Marketing",
        rating: 4.5,
      },
      {
        id: 3,
        text: "Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!",
        studentName: "Komal Patil",
        studentImage: studentPic, // assuming studentPic is the URL of the image
        course: "MBA in Marketing",
        rating: 4.5,
      },
      {
        id: 4,
        text: "Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!",
        studentName: "Komal Patil",
        studentImage: studentPic, // assuming studentPic is the URL of the image
        course: "MBA in Marketing",
        rating: 4.5,
      },
      {
        id: 1,
        text: "Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!",
        studentName: "Komal Patil",
        studentImage: studentPic, // assuming studentPic is the URL of the image
        course: "MBA in Marketing",
        rating: 4.5,
      },
      // Add more testimonial objects as needed
    ],
  };
  const FaqsData = [
    {
      question: "Why should I give the SIELE exam?",
      answer:
        "You should give the SIELE exam to obtain a recognized certification of your Spanish-language proficiency, which can enhance your career opportunities, academic pursuits, and personal development.",
    },
    {
      question: "What are the different levels of the SIELE exam?",
      answer:
        "The SIELE exam consists of four levels: A1, A2, B1, and B2, representing increasing proficiency from beginner to intermediate levels.",
    },
    {
      question: "What are the sections of the SIELE exam?",
      answer:
        "The SIELE exam typically includes four sections: listening, reading, writing, and speaking.",
    },
    {
      question: "How can I prepare for the SIELE exam?",
      answer:
        "You can prepare for the SIELE exam through study materials, practice tests, and advanced language courses tailored to each level.",
    },
    {
      question: "When is the SIELE exam conducted?",
      answer:
        "The SIELE exam is conducted year-round, with multiple testing sessions available, allowing candidates to choose a convenient date based on their schedule and availability.",
    },
    {
      question: "Can I retake the SIELE exam if I don't pass?",
      answer:
        "Yes, you can retake the SIELE exam if you do not pass on your first attempt.",
    },
    {
      question: "Are there any age restrictions for taking the SIELE exam?",
      answer: "No, there are no age restrictions for taking the SIELE exam.",
    },
    {
      question:
        "What job opportunities will I get after giving the SIELE exam?",
      answer:
        "Upon passing the SIELE exam, you can pursue careers in advanced language teaching, translation, international relations, research, and academia, among others.",
    },
  ];

  const say = "Say Hola to language learning with us!";

  const lessonData = [
    {
      title: "Popular classes We Offer",
      list: [
        "Online Japanese Classes",
        "Online Spanish Classes",
        "Online German Classes",
        "Online Mandarin Classes",
        "Online Japanese Classes ",
        "Online Korean Classes",
        "Online English Classes",
      ],
    },
    {
      title: "Popular Online classes",
      list: [
        "Online Japanese Grammar Classes",
        "Online Japanese Speaking Classes",
        "Online English Grammar Classes",
        "Online English Speaking Classes",
        "Online Spanish Grammar Classes",
        "Online Spanish Speaking Classes",
      ],
    },
    {
      title: "Popular classes by target group",
      list: [
        "Online Japanese Classes for kids",
        "Online Japanese Classes for adults",
        "Online Japanese Classes for corporates",
        "Online English Classes for kids",
        "Online English Classes for adults",
        "Online English Classes for corporates",
      ],
    },
    {
      title: "Popular online classes by level",
      list: [
        "Online Japanese Classes for Beginners",
        "Online Japanese Classes for Intermediate",
        "Online Japanese Classes for Advance",
        "Online English Classes for Beginners",
        "Online English Classes for Intermediate",
        "Online English Classes for Advance",
      ],
    },
  ];
  // marati
  const aboutExam = {
    title: "Know more about SIELE exam",
    image: SIELE,
    paraTitle: "SIELE Exam",
    para: "The SIELE exam is a standardized test that evaluates Mandarin language proficiency for non-native speakers. It's crucial to take this exam as it demonstrates competency in listening, reading, and writing, opening doors to educational and career opportunities in Chinese-speaking regions. Many institutions and employers in China require SIELE certification, and it's internationally recognized, facilitating communication and engagement in Mandarin-speaking communities worldwide.",
  };

  const examHelpData = {
    title: "How we help you clear your SIELE exam",
    data: [
      {
        title: "Assessment and Readiness Tools",
        description:
          "Mock exams provide simulated tests, while audio files and textual materials aid listening and reading comprehension respectively.",
      },
      {
        title: "Interactive Skill Development",
        description:
          "Group discussions enhance speaking skills, while situational writing activities focus on practical writing within specific contexts.",
      },
      {
        title: "Exam Preparation Emphasis",
        description:
          "Maintaining an exam approach since day one ensures consistent readiness strategies throughout the learning process.",
      },
      {
        title: "Holistic Language Instruction",
        description:
          "Comprehensive instruction covers listening, reading, writing, and speaking skills to provide a well-rounded language learning experience.",
      },
      {
        title: "Learning Support Resources",
        description:
          "Class recordings serve as valuable archives for review and reinforcement of lessons.",
      },
    ],
  };

  const TopBarData = {
    title: "SIELE Proficiency exam",
    para: "Acing your SIELE exam is one click away with The Language Network. Our online exam preparation courses are designed to accommodate your schedule, offering flexibility and convenience. Led by top-notch trainers, we provide insider tips, strategies, and essential study materials to excel in the exam. Whether you're starting from scratch or aiming for advanced proficiency, our comprehensive approach will arm you with the skills and confidence required to thrive. Join us at The Language Network and pave the way for your success in the SIELE exam.",
  };

  return (
    <div>
      <div className="2xl:w-[1280px] 3xl:w-[1530px] 4xl:w-[1680px] lg:mx-10 mx-auto 2xl:mx-auto  relative  flex justify-center items-center flex-col mb-[112px]">
        <Banner BannerData={TopBarData} />
      </div>
      {/* <TopBar data={TopBarData} /> */}
      <AboutDelf data={aboutExam} />
      <ExamHelp data={examHelpData} />
      {/* <div className="-mt-[100px] -mb-[50px] lg:-mt-[50px] lg:-mb-[90px]">
        <UpcomingBatches language={"Spanish"} />
      </div> */}

      <StudentsTestomony data={StudentTestimonialsData} />

      <div className="mb-9">
        <FaqsExam FaqsData={FaqsData} />
      </div>
      {/* <Faqs data={FaqsData} /> */}
      {/* <Say say={say} /> */}
      {/* <div className="mb-10">
      <LanguageLessons LanguageLesson={lessonData} />
      </div> */}

      {/* //added this because of commenting the above sections */}
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default page;
