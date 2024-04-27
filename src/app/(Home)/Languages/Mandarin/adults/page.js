import PaymentBar from "@/Components/HomeComp/PaymentBar";
import PageMainBanner from "@/Shared/FrenchAdultReusableComponents/PageMainBanner";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import img1 from "@/Assets/FrenchPage/FrenchAdult/Rectangle 514.png";
import img2 from "@/Assets/FrenchPage/FrenchAdult/Rectangle 515.png";
import img3 from "@/Assets/FrenchPage/FrenchAdult/Rectangle 516.png";
import step1 from "@/Assets/FrenchPage/FrenchAdult/Rectangle 477.png";
import step2 from "@/Assets/FrenchPage/FrenchAdult/Rectangle 478.png";
import step3 from "@/Assets/FrenchPage/FrenchAdult/Rectangle 479.png";
import step4 from "@/Assets/FrenchPage/FrenchAdult/Rectangle 479-1.png";

import dalf from "@/Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "@/Assets/FrenchPage/FrenchMain/delf.png";
import telf from "@/Assets/FrenchPage/FrenchMain/telf.png";
import React from "react";
import WhyShould from "@/Components/HomeComp/WhyShould";
import UpcomingBatches from "@/Shared/UpcomingBatches";
import ClassesForAnyLevel from "@/Shared/FrenchAdultReusableComponents/ClassesForAnyLevel/ClassesForAnyLevel";
import Learn from "@/Shared/FrenchAdultReusableComponents/Learn/Learn";
import PreapareForExam from "@/Shared/FrenchAdultReusableComponents/PreapareForExam/PreapareForExam";
import StudentsTestomony from "@/Shared/FrenchAdultReusableComponents/StudentsTestomony";
import Faqs from "@/Shared/FrenchAdultReusableComponents/Faqs/Faqs";
import LanguageLessons from "@/Shared/FrenchAdultReusableComponents/Languagelessons/LanguageLessons";
import { list } from "postcss";
import HowItWorks from "@/Shared/FrenchAdultReusableComponents/HowItWorks/HowItWorks";

const page = () => {
  const bannerData = {
    title: "Online Mandarin Classes for Adults",
    para: "Learning a new language has no age limit! If you're ready to dive into the world of Mandarin, you're in luck! Our online Mandarin classes and courses for adults offer an engaging and hassle-free way to learn the world's most spoken language. Whether you're just starting out or already have a foundation, our expert instructors will be your guides through the maze of Mandarin grammar, vocabulary, and culture. With classes tailored to your schedule, you'll be speaking Mandarin from day one! Our top-notch Mandarin trainers are here to provide personalised support and lead you through an enriching learning experience, through 1:1 Online Mandarin classes for adults.",
    images: [img1, img2, img3],
  };
  const levelData = [
    {
      title: "HSK 1 & 2",
      title2: "Beginner Classes",
      description:
        "Begin your Mandarin language journey with our beginner courses, specially designed to introduce you to the basics of Mandarin grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Mandarin.",
      link: "",
    },
    {
      title: "HSK 3 & 4",
      title2: "Intermediate Classes",
      description:
        "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Mandarin proficiency.",
      link: "",
    },
    {
      title: "HSK 5 & 6",
      title2: "Advanced Classes",
      description:
        "Elevate your Mandarin proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts.",
      link: "",
    },
  ];
  const LearnData = `Learn from the finest!`;
  const PrepareData = [
    {
      title: "HSK preparation classes",
      img: dalf,
      description:
        "Master the HSK exam, the gold standard in Mandarin proficiency. Our expert-led courses comprehensively cover vocabulary, grammar, reading, and listening, ensuring your success in this globally recognized assessment.",
      link: "",
    },
  ];
  const TestimonialData = [
    {
      para: "“Mandarin I have done my Mandarin A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Mandarin. Thank you The Language Network!!!“",
      img: "",
      name: "Komal Patil",
      Dept: "MBA in Marketing",
      Rating: "2",
    },
    {
      para: "“Mandarin whenever it comes to language learning, TLN is the best place I must say. Earlier I was too skeptical to join online classes. But TLN  makes it a cakewalk   for you to learn  a foreign language. I'm looking forward for enthusiastic and communicative classes as it was before.”",
      img: "",
      name: "Pranjal Shinde",
      Dept: "Post Graduate Sudent",
      Rating: "3",
    },
    {
      para: "“Up to now, my experience with The Language Network has been exceptional. Prajakta, my Mandarin instructor, created a friendly and comfortable atmosphere in the classes, which made the learning process enjoyable and engaging for me.”",
      img: "",
      name: "Rithika Kumari",
      Dept: "Student",
      Rating: "4.5",
    },
    {
      para: "“The classes are conducted on time. And its basically 3 or 4 students per batch, so everything is understood  and doubts are solved instantly. I'm very happy that I found out about The Language Network, its really great.”",
      img: "",
      name: "Arti Darekar",
      Dept: "Student",
      Rating: "3",
    },
    {
      para: "“Initially, I was very nervous about how to go about learning a new language but Samihan made it extremely comfortable for all of us. He used unique and fun techniques to make sure we understand. I am so glad to have chosen TLN for this wonderful experience.”",
      img: "",
      name: "Komal Patil",
      Dept: "MBA in Marketing",
      Rating: "5",
    },
  ];

  const Faq = [
    {
      question: "Why learn with The Language Network?",
      answer:
        "Learn with us for personalised instruction, flexible scheduling, and immersive learning experiences tailored to your specific needs. Our expert tutors offer 1:1 and small group classes, ensuring personalised attention and effective learning. Additionally, we provide recordings of classes for your convenience and offer free study material worth ₹10,000+ to support your language learning journey.",
    },

    {
      question: "Will I get a certificate after completing each level?",
      answer:
        "Yes, you will receive a certificate upon completion of each level. We, as a language school are ISO-certified and our certificates are PAN India recognised. We also prepare for language proficiency exams, the certificates for which are recognised worldwide. ",
    },
    {
      question:
        "What job opportunities will I get after completing my Mandarin course?",
      answer:
        "Upon completion of your Mandarin course, you will gain access to job opportunities in international business, diplomacy, education, translation, tourism, and customer service. You could work as a language instructor, translator, interpreter, or in marketing, sales, or management for companies in Mandarin-speaking regions, enhancing career prospects and global networking.",
    },

    {
      question: "Is Mandarin an easy language to learn?",
      answer:
        "Yes, Mandarin is an accessible language to learn, especially with consistent practice and the right resources. Its grammar is relatively straightforward, and its writing system, while complex, can be mastered with patience. With dedication, many learners find Mandarin to be a rewarding and manageable language to study.",
    },

    {
      question: "Is Mandarin useful in India?",
      answer:
        "Completing a Mandarin course can lead to job opportunities in international business, diplomacy, education, translation, tourism, and more. Roles may include language instructor, translator, customer service, or marketing in Mandarin-speaking regions, offering potential for career advancement and global networking.",
    },

    {
      question: "How much time will it take to learn Mandarin?",
      answer:
        "The time it takes to learn Mandarin depends on the level you aim to achieve. It typically takes around 3 months to clear HSK 1 & 2, about 4 months to complete HSK 3 & 4 and approximately 3 months to clear HSK 5 . Completing all levels up to HSK 5 proficiency usually spans around 10 months.",
    },

    {
      question: "What if I miss a class?",
      answer:
        "Missing a class should not be a worry as you will have lifetime access to the recorded classes and can refer to them at your convenience.",
    },

    {
      question: "Will I be provided with study material?",
      answer:
        "Yes, you'll be provided with comprehensive study material worth ₹10,000 + free of cost to supplement your learning and reinforce key concepts.",
    },

    {
      question: "Who will be teaching me?",
      answer:
        "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Mandarin language and teaching methodologies.",
    },

    {
      question: "How many students are accommodated in one batch?",
      answer:
        "Our batches are usually small in size, typically accommodating 5 students to ensure personalised attention.",
    },
  ];
  const lessonData = [
    {
      title: "Popular classes We Offer",
      list: [
        "Online French Classes",
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
        "Online French Grammar Classes",
        "Online French Speaking Classes",
        "Online English Grammar Classes",
        "Online English Speaking Classes",
        "Online Spanish Grammar Classes",
        "Online Spanish Speaking Classes",
      ],
    },
    {
      title: "Popular classes by target group",
      list: [
        "Online French Classes for kids",
        "Online French Classes for adults",
        "Online French Classes for corporates",
        "Online English Classes for kids",
        "Online English Classes for adults",
        "Online English Classes for corporates",
      ],
    },
    {
      title: "Popular online classes by level",
      list: [
        "Online French Classes for Beginners",
        "Online French Classes for Intermediate",
        "Online French Classes for Advance",
        "Online English Classes for Beginners",
        "Online English Classes for Intermediate",
        "Online English Classes for Advance",
      ],
    },
  ];
  const howData = [
    {
      index: 1,
      step: "Step 1",
      title: "Register with us",
      para: "Fill out our form with your details and your preferred language to learn with us.",
      img: step1,
    },
    {
      index: 2,
      step: "Step 2",
      title: "Talk to our experts",
      para: "Connect with our Academic Counsellors for personalized guidance.",
      img: step2,
    },
    {
      index: 3,
      step: "Step 3",
      title: "Get a free Demo",
      para: "Experience our platform firsthand with a complimentary demo.",
      img: step3,
    },
    {
      index: 4,
      step: "Step 4",
      title: "Get Started With us",
      para: "Love our demo- now pick and choose batches according to your flexibility and get started on your learning adventure with us.",
      img: step4,
    },
  ];
  return (
    <div className="">
      <PageMainBanner bannerData={bannerData} />
      <HowItWorks data={howData} />
      <WhyShould />
      <UpcomingBatches />
      <ClassesForAnyLevel levelData={levelData} />
      <PreapareForExam data={PrepareData} />
      <StudentsTestomony data={TestimonialData} />
      <Faqs data={Faq} />
      <Learn data={LearnData} />
      <LanguageLessons data={lessonData} />
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default page;
