"use client";
import WhyShould from "@/Components/HomeComp/WhyShould";
import HowItWorks from "../../../../../Shared/StudyAbroadComponents/HowItWorks";

import StudentsTestomony from "@/Shared/StudentsTestomony";
import ClassesForAnyLevel from "../../../../../Shared/StudyAbroadComponents/ClassesForAnyLevel";

import LanguageLessons from "../Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";

import FaqsSudyAbroad from "../../../../../Shared/StudyAbroadComponents/FaqsSudyAbroad";
import StudyAbroad from "../../../../../Shared/StudyAbroadComponents/StudyAbroad";

import step1 from "@/Assets/Homepage/FluencyCarrerCulture/step1.png";
import step4 from "@/Assets/Homepage/FluencyCarrerCulture/step2.png";
import step2 from "@/Assets/Homepage/FluencyCarrerCulture/step3.png";
import step3 from "@/Assets/FrenchPage/FrenchMain/step3.png";
import UpcomingBathches from "@/Shared/StudyAbroadComponents/UpcomingBathches";
import telf from "@/Assets/English/toefl.webp";
import goethe from "@/Assets/GermanMainPage/Gothe.svg";
import PreapareForExam from "@/Shared/StudyAbroadComponents/PreapareForExam";
import EverythingYouNeedToKnowAbout from "@/Shared/FrenchAdultReusableComponents/EverythingYouNeedToKnowAbout/EverythingYouNeedToKnowAbout";

const page = () => {
  const bannerData = {
    title: "Online English Classes for Study Abroad",
    para: "English proficiency isn't just for admission—it's your key to maximising your study abroad adventure! With fluency in English, you’ll seamlessly blend into your surroundings like a local, savouring the cultural flavours and enhancing every moment of your study abroad experience. The benefits don’t just end there. Being savvy in English will open the floodgates to exciting internships during your studies and lucrative job opportunities post-graduation or masters. Also, don't overlook the visa and PR perks—mastering English might just fast-track your way to official residency status! Gear up for the ultimate academic adventure with English as your ally! Start today!",
    images: [],
  };
  const levelData = [
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
  ];
  const PrepareData = [
    {
      title: "IELTS",
      img: goethe, // Assuming ielts is the variable holding the image URL for IELTS
      description:
        " Take your English skills to new heights with our IELTS preparation course. Designed to help you excel in all four components - reading, writing, listening, and speaking - our expert instructors will guide you towards success in this globally recognized English proficiency exam.",
      link: "", // You can insert the link here
    },
    {
      title: "TOEFL",
      img: telf, // Assuming ielts is the variable holding the image URL for IELTS
      description:
        " Open doors to international opportunities with our TOEFL preparation course. From mastering academic English to excelling in listening, speaking, reading, and writing, our comprehensive training ensures you're fully prepared to ace this crucial exam.",
      link: "", // You can insert the link here
    },
  ];
  const TestimonialData = [
    {
      para: "“Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!“",
      img: "",
      name: "Komal Patil",
      Dept: "MBA in Marketing",
      Rating: "2",
    },
    {
      para: "“Spanish whenever it comes to language learning, TLN is the best place I must say. Earlier I was too skeptical to join online classes. But TLN  makes it a cakewalk   for you to learn  a foreign language. I'm looking forward for enthusiastic and communicative classes as it was before.”",
      img: "",
      name: "Pranjal Shinde",
      Dept: "Post Graduate Sudent",
      Rating: "3",
    },
    {
      para: "“Up to now, my experience with The Language Network has been exceptional. Prajakta, my Spanish instructor, created a friendly and comfortable atmosphere in the classes, which made the learning process enjoyable and engaging for me.”",
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
        "Online French Classes for Study Abroad",
        "Online French Classes for corporates",
        "Online English Classes for kids",
        "Online English Classes for Study Abroad",
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
      id: 1,
      title: "Register With Us",
      description:
        "Fill out our form with your details and your preferred language to learn with us.",
      img: step1, // assuming step1 is the variable holding the image URL for Step 1
    },
    {
      id: 2,
      title: "Talk To Our Expert",
      description:
        "Connect with our Academic Counsellors for personalized guidance.",
      img: step2, // assuming step2 is the variable holding the image URL for Step 2
    },
    {
      id: 3,
      title: "Get A Free Demo",
      description:
        "Experience our platform firsthand with a complimentary demo.",
      img: step3, // assuming step3 is the variable holding the image URL for Step 3
    },
    {
      id: 4,
      title: "Get Started With Us",
      description:
        "Love our demo- now pick and choose batches according to your flexibility and get started on your learning adventure with us.",
      img: step4, // assuming step4 is the variable holding the image URL for Step 4
    },
  ];
  const needToKnow = [
    {
      question: "Why is it important to excel at Spanish exams?",
      answer:
        "Excelling in Spanish exams holds significant importance beyond simply obtaining good grades. Firstly, proficiency in Spanish significantly enhances communication skills. Spanish is spoken in numerous countries around the world and is one of the official languages of international organisations like the United Nations and the International Red Cross. Therefore, mastering Spanish provides individuals with the ability to communicate effectively with a diverse range of people, opening up opportunities for cultural exchange, collaboration, and friendship.\n\nMoreover, excelling in Spanish exams fosters a deeper understanding of different cultures. Language and culture are intricately connected, and by learning Spanish, individuals gain insight into the customs, traditions, and perspectives of Spanish-speaking communities. This cultural understanding promotes tolerance, empathy, and appreciation for diversity, qualities that are invaluable in today's interconnected world.\n\nFurthermore, proficiency in Spanish enhances global connectivity. In an increasingly globalised society, the ability to speak multiple languages, including Spanish, facilitates international cooperation, trade, and diplomacy. Whether in business, politics, or academia, individuals who excel in Spanish exams have a competitive edge in navigating global networks and building meaningful relationships across borders.\n\nAdditionally, mastering a second language like Spanish has cognitive benefits. Research has shown that learning a new language stimulates brain activity, improves memory retention, and enhances problem-solving skills. These cognitive benefits extend beyond language learning and can positively impact academic performance, career prospects, and overall cognitive function.",
    },
    {
      question: "How can kids do well in a Spanish exam?",
      answer:
        "To ace a Spanish exam, it's essential to prepare strategically and practice diligently. Kids should focus on mastering key language skills like reading, writing, listening, and speaking. Effective study methods include practicing regularly with fun materials like storybooks and online games. Kids can also improve by getting feedback from teachers or parents, participating in activities like storytelling or singing Spanish songs, and using special techniques for exams.\n\nTop tips for Spanish revision:\nFor effective revision, kids should mix repetition, practice, and focused improvement. Using tools like flashcards, quizzes and educational videos can help reinforce learning over time. Watching cartoons or playing language-learning games exposes kids to different Spanish contexts and makes learning more enjoyable. It's also helpful for kids to get feedback from tutors or friends to improve in specific areas, leading to better results in exams.",
    },
    {
      question: "Why does your child need Spanish tutoring?",
      answer:
        "Personalised Spanish tutoring offers tailored support and guidance, addressing individual learning needs and challenges. Tutors can provide targeted instruction, practice activities, and feedback to accelerate learning and boost confidence. Additionally, one-on-one tutoring allows for a deeper focus on exam preparation strategies, language skills development, and overcoming specific obstacles, ensuring optimal progress and success.",
    },
  ];
  return (
    <div>
      <StudyAbroad data={bannerData} />

      <HowItWorks data={howData} />
      <WhyShould />
      <UpcomingBathches />
      <PreapareForExam data={PrepareData} />
      <ClassesForAnyLevel data={levelData} />
      <StudentsTestomony />
      <FaqsSudyAbroad data={Faq} />
      <EverythingYouNeedToKnowAbout data={needToKnow} />
      <div>
        <div className="w-full bg-primary-color max-sm:h-[200px] h-[380px] relative">
          <div className=" h-full flex items-center text-center text-white text-5xl max-sm:text-2xl max-lg:text-4xl font-bold justify-center">
            Your pathway to studying abroad!
          </div>
        </div>
      </div>
      <LanguageLessons />
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default page;
