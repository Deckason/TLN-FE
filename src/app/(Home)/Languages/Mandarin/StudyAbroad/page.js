"use client";

import step1 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step1.png";
import step4 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step2.png";
import step2 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step3.png";
import step3 from "../../../../../Assets/FrenchPage/FrenchMain/step3.png";

import SharedStudyAbroad from "../../../../../Shared/SharedStudyAbroad";
import dalf from "../../../../../Assets/Mandarin/HSK.jpg";
const page = () => {
  const data = {
    BannerData: {
      Language: "Mandarin",
      Description:
        "Mandarin proficiency isn't just for admission—it's your key to maximising your study abroad adventure! With fluency in Mandarin, you’ll seamlessly blend into your surroundings like a local, savouring the cultural flavours and enhancing every moment of your study abroad experience. The benefits don’t just end there. Being savvy in Mandarin will open the floodgates to exciting internships during your studies and lucrative job opportunities post-graduation or masters. Also, don't overlook the visa and PR perks—mastering Mandarin might just fast-track your way to official residency status! Gear up for the ultimate academic adventure with Mandarin as your ally! Start today!",
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
          title: "HSK preparation classes          ",
          img: dalf,
          description:
            "Master the HSK exam, the gold standard in Mandarin proficiency. Our expert-led courses comprehensively cover vocabulary, grammar, reading, and listening, ensuring your success in this globally recognized assessment.            ",
          link: "/Languages/Mandarin/exam/hsk",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "Mandarin",
      CardData: [
        {
          title: "HSK1-HSK2",
          level: "Beginner Classes ",
          description:
            "Begin your Mandarin language journey with our beginner courses, specially designed to introduce you to the basics of Mandarin grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Mandarin. ",
          link: "/Languages/Mandarin/LevelPage/BeginnerLevel(A1-A2)",
        },

        {
          title: "HSK3-HSK4          ",
          level: "Intermediate Classes          ",
          description:
            "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Mandarin proficiency.            ",
          link: "/Languages/Mandarin/LevelPage/IntermediateLevel(B1-B2)",
        },

        {
          title: "HSK5-HSK6          ",
          level: "Advanced Classes          ",
          description:
            "Elevate your Mandarin proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts.            ",
          link: "/Languages/Mandarin/LevelPage/AdvancedLevel(C1-C2)",
        },
      ],
    },
    Faqs: [
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
    ],
    SayBonjur: "Your pathway to studying abroad!",
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
    <div>
      <SharedStudyAbroad Data={data} />
    </div>
  );
};

export default page;
