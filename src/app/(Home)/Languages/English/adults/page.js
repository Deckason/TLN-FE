import step1 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 477.png";
import step2 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 478.png";
import step3 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 479.png";
import step4 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 479-1.png";

import dalf from "../../../../../Assets/Homepage/ProficiencyExam/logo6.png";
import telf from "../../../../../Assets/English/toefl.webp";
import React from "react";
import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";

const page = () => {
  const data = {
    BannerData: {
      Language: "English",
      Description:
        "Learning a new language has no age limit! If you're ready to dive into the world of English, you're in luck! Our online English classes and courses for adults offer an engaging and hassle-free way to learn one of the most popular languages in the world. Whether you're just starting out or already have a foundation, our expert instructors will be your guides through the maze of English grammar, vocabulary, and culture. With classes tailored to your schedule, you'll be speaking English from day one! Our top-notch English trainers are here to provide personalised support and lead you through an enriching learning experience, through 1:1 or group Online English classes for adults.",
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
      Language: "English",
      CardData: [
        {
          title: "IELTS preparation classes",
          img: dalf,
          description:
            "Take your English skills to new heights with our IELTS preparation course. Designed to help you excel in all four components - reading, writing, listening, and speaking - our expert instructors will guide you towards success in this globally recognized English proficiency exam.",
          link: "",
        },
        {
          title: "TOEFL preparation classes",
          img: telf,
          description:
            "Open doors to international opportunities with our TOEFL preparation course. From mastering academic English to excelling in listening, speaking, reading, and writing, our comprehensive training ensures you're fully prepared to ace this crucial exam.",
          link: "",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "English",

      CardData: [
        {
          title: "A1-A2",
          level: "Beginner Classes",
          description:
            "Start your English language journey with our engaging online classes designed for beginners. Learn fundamental grammar, vocabulary, and practical conversation skills at your own pace with our expert instructors' guidance.",
          link: "",
        },
        {
          title: "B1-B2",
          level: "Intermediate Classes",
          description:
            "Elevate your English proficiency with our online intermediate classes. Refine pronunciation, expand vocabulary, and master complex grammar structures to confidently engage in conversations and express yourself fluently.",
          link: "",
        },
        {
          title: "C1-C2",
          level: "Advanced Classes",
          description:
            "Advance your English skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in English.",
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
          "What job opportunities will I get after completing my French course?",
        answer:
          "Upon completing your English course you’ll gain access to job opportunities in teaching, translation, content creation, communication, international business, tourism, education, media, technical writing, human resources, and more.",
      },

      {
        question: "Is English an easy language to learn?",
        answer:
          "According to the Foreign Service Institute (FSI), English is classified as a Category I language, meaning it is relatively easy for speakers of other languages to learn. It has a straightforward alphabet, simple grammar rules , and a wealth of resources available for learners.",
      },

      {
        question: "Is English useful in India?",
        answer:
          "Yes, English is highly useful in India. It is widely spoken and serves as an official language alongside Hindi in many states and territories. English proficiency is essential for communication in business, education, government, media, and various other sectors. It also provides access to a vast array of global resources, opportunities, and networks.",
      },

      {
        question: "How much time will it take to learn English?",
        answer:
          "The time it takes to learn English varies depending on your specific goal, such as achieving proficiency in exams like IELTS or TOEFL. It requires dedicated study and practice to reach your desired level.",
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
      <SharedAdultsPage Data={data} language={"English"}/>
    </div>
  );
};

export default page;
