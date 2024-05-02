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
    title: "Online Spanish Classes for Adults",
    para: "Learning a new language has no age limit! If you're ready to dive into the world of Spanish, you're in luck! Our online Spanish classes and courses for adults offer an engaging and hassle-free way to learn the 2nd most spoken language in the world. Whether you're just starting out or already have a foundation, our expert instructors will be your guides through the maze of Spanish grammar, vocabulary, and culture. With classes tailored to your schedule, you'll be speaking Spanish from day one! Our top-notch Spanish trainers are here to provide personalised support and lead you through an enriching learning experience, through 1:1 or group Online Spanish classes for adults.",
    images: [img1, img2, img3],
  };
  const levelData = [
    {
      title: "A1-A2",
      title2: "Beginner Classes",
      description:
        "Start your Spanish language journey with our engaging online classes designed for beginners. Learn fundamental grammar, vocabulary, and practical conversation skills at your own pace with our expert instructors' guidance.",
      link: "",
    },
    {
      title: "B1-B2",
      title2: "Intermediate Classes",
      description:
        "Elevate your Spanish proficiency with our online intermediate classes. Refine pronunciation, expand vocabulary, and master complex grammar structures to confidently engage in conversations and express yourself fluently.",
      link: "",
    },
    {
      title: "C1-C2",
      title2: "Advanced Classes",
      description:
        "Advance your Spanish skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in Spanish.",
      link: "",
    },
  ];
  const LearnData = `Learn from the finest!`;
  const PrepareData = [
    {
      title: "DELE preparation classes",
      img: delf,
      description:
        " Achieve Spanish language proficiency with our DELE exam preparation courses. These diplomas are internationally recognized and validate your Spanish skills for academic, professional, or personal purposes.",
      link: "",
    },
    {
      title: "SIELE preparation classes",
      img: dalf,
      description:
        "Prepare for the SIELE exam, a globally recognized certification of Spanish language proficiency. Whether for academic or professional advancement, our courses are tailored to help you succeed.",
      link: "",
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
        "What job opportunities will I get after completing my Spanish course?",
      answer:
        "Upon completing your Spanish course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
    },

    {
      question: "Is Spanish an easy language to learn?",
      answer:
        "Spanish is considered one of the easiest languages to learn due to its phonetic pronunciation, cognates with other languages, consistent verb conjugation patterns, abundant resources, and welcoming language community.",
    },

    {
      question: "Is Spanish useful in India?",
      answer:
        "Learning Spanish can be highly useful in India, especially in sectors like tourism, hospitality, international business, and cultural exchange programs. Additionally, proficiency in Spanish can open up opportunities for collaborations with Spanish-speaking countries and enhance one's global competitiveness.",
    },

    {
      question: "How much time will it take to learn Spanish?",
      answer:
        "The time it takes to learn Spanish depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 8 months to complete B1-B2 level and approximately 10-12 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
        "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Spanish language and teaching methodologies.",
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
