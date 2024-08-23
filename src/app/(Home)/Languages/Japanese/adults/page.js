import step1 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 477.png";
import step2 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 478.png";
import step3 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 479.png";
import step4 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 479-1.png";
import bannerImg from '../../../../../Assets/Japanese/JapaneseAdult/Adult Japan.jpg';

import jlpt from "../../../../../Assets/Japanese/jlpt.png";
import React from "react";

import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";

const page = () => {
  const data = {
    BannerData: {
      Language: "Japanese",
      Description:
        "Learning a new language has no age limit! If you're ready to dive into the world of Japanese, you're in luck! Our online Japanese classes and courses for adults offer an engaging and hassle-free way to learn one of the most popular languages in the world. Whether you're just starting out or already have a foundation, our expert instructors will be your guides through the maze of Japanese grammar, vocabulary, and culture. With classes tailored to your schedule, you'll be speaking Japanese from day one! Our top-notch Japanese trainers are here to provide personalised support and lead you through an enriching learning experience, through 1:1 or group Online Japanese classes for adults.",
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
      Language: "Japanese",
      CardData: [
        {
          title: "JLPT preparation classes",
          img: jlpt,
          description:
            "Master the JLPT with our expert courses, the global benchmark for Japanese proficiency. We meticulously cover vocabulary, grammar, reading, and listening, ensuring your success in all exam sections.",
          link: "",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "Japanese",

      CardData: [
        {
          title: "N5",
          level: "Beginner Classes",
          description:
            "Begin your Japanese language journey with our beginner courses, specially designed to introduce you to the basics of Japanese grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Japanese",
            price: "₹9,990",
            link: "https://rzp.io/l/EGBnxv7w",
        },
        {
          title: "N4,N3",
          level: "Intermediate Classes",
          description:
            "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Japanese proficiency",
            price: "₹23,990-₹29,990",
            link: "https://rzp.io/l/heYbWM89",
        },
        {
          title: "N2,N1",
          level: "Advanced Classes",
          description:
            "Elevate your Japanese proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts",
          price: "On Request",
            link: "",
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
          "What job opportunities will I get after completing my Japanese course?",
        answer:
          "Upon completing your Japanese course, you'll gain access to job opportunities in fields such as technology, finance, hospitality, international trade, tourism, interpretation, translation, and diplomacy.",
      },

      {
        question: "Is Japanese an easy language to learn?",
        answer:
          "Japanese can be challenging due to its unique writing systems and grammar structure, but with dedication and practice, it can be mastered effectively with The Language Network.",
      },

      {
        question: "Is Japanese useful in India?",
        answer:
          "Learning Japanese can be highly beneficial in India, especially in industries like technology, manufacturing, automotive, and trade, where communication and collaboration with Japanese counterparts are crucial for career advancement and business opportunities.",
      },

      {
        question: "How much time will it take to learn Japanese?",
        answer:
          "The time it takes to learn Japanese depends on the level you aim to achieve. It typically takes around 8 months to clear N5-N4 level, about 8 months to complete N3-N2 level and approximately 4 months to clear N1 level. Completing all levels up to N1 proficiency usually spans around 20 months.",
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
          "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both French language and teaching methodologies.",
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
     <SharedAdultsPage Data={data} language={"Japanese"}/>
    </div>
  );
};

export default page;
