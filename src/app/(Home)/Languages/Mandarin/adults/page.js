import step1 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 477.png";
import step2 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 478.png";
import step3 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 479.png";
import step4 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 479-1.png";
import bannerImg from '../../../../../Assets/Japanese/JapaneseAdult/Adult Japan.jpg'

import hsk from '../../../../../Assets/Mandarin/HSK.jpg'
// import data from "../../../../../Utilities/data"

import React from "react";

import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";

const page = () => {
  const data = {
    BannerData: {
      Language: "Mandarin",
      Description:
        "Learning a new language has no age limit! If you're ready to dive into the world of Mandarin, you're in luck! Our online Mandarin classes and courses for adults offer an engaging and hassle-free way to learn one of the most popular languages in the world. Whether you're just starting out or already have a foundation, our expert instructors will be your guides through the maze of Mandarin grammar, vocabulary, and culture. With classes tailored to your schedule, you'll be speaking Mandarin from day one! Our top-notch Mandarin trainers are here to provide personalised support and lead you through an enriching learning experience, through 1:1 or group Online Mandarin classes for adults.",
      BannerImage:bannerImg
    },
    HowItWorksCardData: [
      {
        id: 1,
        title: "Register with us",
        description:
          "Fill out our form with your details and your preferred language to learn with us.",
        img: step1,
      },
      {
        id: 2,
        title: "Talk To Our Expert",
        description:
          "Connect with our Academic Counsellors for personalized guidance.",
        img: step2,
      },
      {
        id: 3,
        title: "Get A Free Demo",
        description:
          "Experience our platform firsthand with a complimentary demo.",
        img: step3,
      },
      {
        id: 4,
        title: "Get Started With Us",
        description:
          "Love our demo- now pick and choose batches according to your flexibility and get started on your learning adventure with us.",
        img: step4,
      },
    ],
    LanguageExams: {
      Language: "Mandarin",
      CardData: [
        {
          title: "HSK preparation classes",
          img: hsk,
          description:
            "Master the HSK exam, the gold standard in Mandarin proficiency. Our expert-led courses comprehensively cover vocabulary, grammar, reading, and listening, ensuring your success in this globally recognized assessment.",
          link: "",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "Mandarin",

      CardData: [
        {
          title: "HSK 1 & 2",
          level: "Beginner Classes",
          description:
            "Begin your Mandarin language journey with our beginner courses, specially designed to introduce you to the basics of Mandarin grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Mandarin.",
          price:"₹30,582",
          link: "https://rzp.io/l/3sIBt0a0tq",
        },
        {
          title: "HSK 3 & 4",
          level: "Intermediate Classes",
          description:
            "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Mandarin proficiency.",
          price:"₹43,182",
          link: "https://rzp.io/l/HqGnWzmPQH",
        },
        {
          title: "HSK 5 & 6",
          level: "Advanced Classes",
          description:
            "Elevate your Mandarin proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts",
          price:"On Request",
          link: "",
          enquire:true
        },
      ],
    },
    Faqs: [
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
    ],
    SayBonjur: "Learn from the finest!",
      LanguageLesson: [
      {
        title: "Popular classes we offer",
        list: [
         "Online French Classes",
         "Online Spanish Classes",
         "Online German Classes",
         "Online Mandarin Classes",
         "Online Japanese Classes",
         "Online Korean Classes",
         "Online English Classes",

        ],
      },
      {
        title: "Popular online classes",
        list: [
          "Online French Grammar Classes",
          "Online French Speaking Classes",
          "Online English Grammar Classes",
          "Online English Speaking Classes",
          "Online Spanish Grammar Classes",
          "Online English Speaking Classes",
        ],
      },
      {
        title: "Popular classes by target group",
        list: [
          "Online French Classes For Kids",
          "Online French Classes For Adults",
          "Online French Classes For Corporates",
          "Online English Classes For Kids",
          "Online English Classes For Adults",
          "Online English Classes For Corporates",
        ],
      },
      {
        title: "Popular online classes by level",
        list: [
          "Online English classes for Beginner",
          "Online English classes for Intermediate",
          "Online English classes for Advanced",
          "Online English classes for Kids ",
          "Online English classes for adults",
          "Online English classes to study abroad",
        ],
      },
    ],
  };
  return (
    <div className="">
     <SharedAdultsPage Data={data} language={"Mandarin"}/>
    </div>
  );
};

export default page;
