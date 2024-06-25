import step1 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 477.png";
import step2 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 478.png";
import step3 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 479.png";
import step4 from "../../../../../Assets/FrenchPage/FrenchAdult/Rectangle 479-1.png";

import dalf from "../../../../../Assets/FrenchPage/FrenchMain/dalf.png";

import React from "react";

import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";

const page = () => {
  const data = {
    BannerData: {
      Language: "Korean",
      Description:
        "Learning a new language has no age limit! If you're ready to dive into the world of Korean, you're in luck! Our online Korean classes and courses for adults offer an engaging and hassle-free way to learn one of the most popular languages in the world. Whether you're just starting out or already have a foundation, our expert instructors will be your guides through the maze of Korean grammar, vocabulary, and culture. With classes tailored to your schedule, you'll be speaking Korean from day one! Our top-notch Korean trainers are here to provide personalised support and lead you through an enriching learning experience, through 1:1 or group Online Korean classes for adults.",
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
      Language: "Korean",
      CardData: [
        {
          title: "TOPIK preparation classes",
          img: dalf,
          description:
            "Get ready for the TOPIK proficiency exam with our expert courses. Our comprehensive curriculum covers all aspects of the exam, helping you excel in vocabulary, grammar, listening, and speaking. Join us and achieve your Korean language goals!",
          link: "",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "Korean",

      CardData: [
        {
          title: "A1-A2",
          level: "Beginner Classes",
          description:
            "Start your Korean language journey with our engaging online classes designed for beginners. Learn fundamental grammar, vocabulary, and practical conversation skills at your own pace with our expert instructors' guidance.",
          link: "",
        },
        {
          title: "B1-B2",
          level: "Intermediate Classes",
          description:
            "Elevate your Korean proficiency with our online intermediate classes. Refine pronunciation, expand vocabulary, and master complex grammar structures to confidently engage in conversations and express yourself fluently.",
          link: "",
        },
        {
          title: "C1-C2",
          level: "Advanced Classes",
          description:
            "Advance your Korean skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in French.",
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
          "What job opportunities will I get after completing my Korean course?",
        answer:
          "Upon completing your Korean course, you'll have opportunities in translation, international business, tourism, education, and cultural exchange programs, particularly with ties to South Korea. Proficiency in Korean can lead to roles in multinational corporations and as a language specialist or cultural liaison.",
      },

      {
        question: "Is Korean an easy language to learn?",
        answer:
          "Korean is much easier to learn than other East Asian languages. Unlike tonal languages, Korean does not rely on tone variations to convey meaning. This means that regardless of your accent or pronunciation, one tone equals one meaning in Korean.",
      },

      {
        question: "Is Korean useful in India?",
        answer:
          "Yes, Korean can be quite useful in India, especially in sectors like technology, manufacturing, entertainment, and tourism, where there are increasing business and cultural ties with South Korea. Proficiency in Korean can open up job opportunities in multinational corporations with Korean operations, as well as in translation, interpretation, and language teaching roles. Additionally, knowledge of Korean can facilitate cultural exchange programs and collaborations between Indian and South Korean organisations.",
      },

      {
        question: "How much time will it take to learn Korean?",
        answer:
          "The time it takes to learn Korean depends on the level you aim to achieve. It typically takes around 4 months to clear TOPIK I - Level 1 & 2, about 5 months to complete  TOPIK II - Level 3 & 4  and approximately 6 months to clear  TOPIK II - Level 5 & 6.  Completing all levels up to TOPIK II Level 6 proficiency usually spans around 15 months.",
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
          "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Korean language and teaching methodologies.",
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
        title: "Popular classes we offer        ",
        list: [
          "Korean Classes In Mumbai",
          " Korean language course in delhi",
          " Korean classes in pune",
          "Korean language courses near me",
          "Korean language classes near me",
        ],
      },
      {
        title: "Most Searched",
        list: [
          "Korean Speaking Course",
          "Korean Language Classes Online",
          "Korean Speaking classes         ",
          "Korean Speaking Course online          ",
        ],
      },
      {
        title: "Popular classes by target group ",
        list: [
          "Online Korean Course          ",
          "Korean classes online          ",
          "Korean Speaking Course",
        ],
      },
      {
        title: "Korean Classes for Focused Learning",
        list: [
          "Online Korean classes for Beginner",
          "Online Korean classes for Intermediate",
          "Online Korean classes for Advanced",
          "Online Korean classes for Kids ",
          "Online Korean classes for adults",
          "Online Korean classes to study abroad",
        ],
      },
    ],
  };
  return (
    <div className="">
      <SharedAdultsPage Data={data} />
    </div>
  );
};

export default page;
