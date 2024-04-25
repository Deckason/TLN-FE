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
    title: "Online Korean Classes for Adults",
    para: "Learning a new language has no age limit! If you're ready to dive into the world of Korean, you're in luck! Our online Korean classes and courses for adults offer an engaging and hassle-free way to learn the most loved language by our Gen Z’s. Whether you're just starting out or already have a foundation, our expert instructors will be your guides through the maze of Korean grammar, vocabulary, and culture. With classes tailored to your schedule, you'll be speaking Korean from day one! Our top-notch Korean trainers are here to provide personalised support and lead you through an enriching learning experience, through 1:1 or group Online Korean classes for adults.",
    images: [img1, img2, img3],
  };
  const levelData = [
    {
      title: "TOPIK I Level 1 & 2",
      title2: "Beginner Classes",
      description:
        "Begin your Korean language journey with our beginner courses, specially designed to introduce you to the basics of Korean grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Korean",
      link: "",
    },
    {
      title: "TOPIK II Level 3 & 4",
      title2: "Intermediate Classes",
      description:
        "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Korean proficiency.",
      link: "",
    },
    {
      title: "TOPIK III Level 5 & 6",
      title2: "Advanced Classes",
      description:
        "Elevate your Korean proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts.",
      link: "",
    },
  ];
  const LearnData = `Learn from the finest!`;
  const PrepareData = [
    {
      title: "TOPIK preparation classes",
      img: dalf,
      description:
        "Get ready for the TOPIK proficiency exam with our expert courses. Our comprehensive curriculum covers all aspects of the exam, helping you excel in vocabulary, grammar, listening, and speaking. Join us and achieve your Korean language goals!",
      link: "",
    },
  ];
  const TestimonialData = [
    {
      para: "Korean I have done my French A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn French. Thank you The Language Network!!!“",
      img: "",
      name: "Komal Patil",
      Dept: "MBA in Marketing",
      Rating: "2",
    },
    {
      para: "Korean whenever it comes to language learning, TLN is the best place I must say. Earlier I was too skeptical to join online classes. But TLN  makes it a cakewalk   for you to learn  a foreign language. I'm looking forward for enthusiastic and communicative classes as it was before.”",
      img: "",
      name: "Pranjal Shinde",
      Dept: "Post Graduate Sudent",
      Rating: "3",
    },
    {
      para: "“Up to now, my experience with The Language Network has been exceptional. Prajakta, my French instructor, created a friendly and comfortable atmosphere in the classes, which made the learning process enjoyable and engaging for me.”",
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
      step: "Step 1",
      title: "Register with us",
      para: "Fill out our form with your details and your preferred language to learn with us.",
      img: step1,
    },
    {
      step: "Step 2",
      title: "Talk to our experts",
      para: "Connect with our Academic Counsellors for personalized guidance.",
      img: step2,
    },
    {
      step: "Step 3",
      title: "Get a free Demo",
      para: "Experience our platform firsthand with a complimentary demo.",
      img: step3,
    },
    {
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
