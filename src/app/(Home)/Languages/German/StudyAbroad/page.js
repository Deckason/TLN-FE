"use client";
import step1 from "@/Assets/Homepage/FluencyCarrerCulture/step1.png";
import step4 from "@/Assets/Homepage/FluencyCarrerCulture/step2.png";
import step2 from "@/Assets/Homepage/FluencyCarrerCulture/step3.png";
import step3 from "@/Assets/FrenchPage/FrenchMain/step3.png";
import ielts from "@/Assets/GermanMainPage/Gothe.svg";
import SharedStudyAbroad from "@/Shared/SharedStudyAbroad";

const page = () => {
  const data = {
    BannerData: {
      Language: "German",
      Description:
        "German proficiency isn't just for admission—it's your key to maximising your study abroad adventure! With fluency in German, you’ll seamlessly blend into your surroundings like a local, savouring the cultural flavours and enhancing every moment of your study abroad experience. The benefits don’t just end there. Being savvy in German will open the floodgates to exciting internships during your studies and lucrative job opportunities post-graduation or masters. Also, don't overlook the visa and PR perks—mastering German might just fast-track your way to official residency status! Gear up for the ultimate academic adventure with German as your ally! Start today!",
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
      Language: "German",
      CardData: [
        {
          title: "GOETHE",
          img: ielts, // Assuming ielts is the variable holding the image URL for IELTS
          description:
            "The GOETHE exam assesses Spanish language proficiency globally. Success demonstrates effective communication in Spanish for various purposes. Our tailored courses help you master skills and confidently tackle each section.        ",
          link: "", // You can insert the link here
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "German",

      CardData: [
        {
          title: "A1 & A2 ₹11,990-₹14,390",
          title2: "Beginner Classes (A1 & A2)",
          description:
            "Start your Spanish language journey with our engaging online classes designed for beginners. Learn fundamental grammar, vocabulary, and practical conversation skills at your own pace with expert instructors' guidance.",
          link: "", // You can insert the link here
        },
        {
          title: "B1 & B2 ₹16,790-₹19,190",
          title2: "Intermediate Classes (B1 & B2)",
          description:
            "Elevate your Spanish proficiency with our online intermediate classes. Refine pronunciation, expand vocabulary, and master complex grammar structures to confidently engage in conversations and express yourself fluently.",
          link: "", // You can insert the link here
        },
        {
          title: "C1 & C2 On Request",
          title2: "Advanced Classes (C1 & C2)",
          description:
            "Take your Spanish skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in Spanish.",
          link: "", // You can insert the link here
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
        title: "Popular classes we offer        ",
        list: [
          "German Classes In Mumbai",
          " German language course in delhi",
          " German classes in pune",
          "German language courses near me",
          "German language classes near me",
        ],
      },
      {
        title: "Most Searched",
        list: [
          "German Speaking Course",
          "German Language Classes Online",
          "German Speaking classes         ",
          "German Speaking Course online          ",
        ],
      },
      {
        title: "Popular classes by target group ",
        list: [
          "Online German Course          ",
          "German classes online          ",
          "German Speaking Course",
        ],
      },
      {
        title: "German Classes for Focused Learning",
        list: [
          "Online German classes for Beginner",
          "Online German classes for Intermediate",
          "Online German classes for Advanced",
          "Online German classes for Kids ",
          "Online German classes for adults",
          "Online German classes to study abroad",
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