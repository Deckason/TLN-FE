"use client";
import SharedMainLanuagePage from "@/Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import school from "@/Assets/FrenchPage/FrenchMain/school.png";
import college from "@/Assets/FrenchPage/FrenchMain/college.png";
import corporate from "@/Assets/FrenchPage/FrenchMain/corporate.png";
import dalf from "@/Assets/Spanish/DELE.png";
import telf from "@/Assets/Spanish/Siele.png";
import { useGetFAQsQuery } from "@/store/apiSlice";
import { useEffect, useState } from "react";

const SpanishPage = () => {
  const SpanishLanguageData = {
    Banner: {
      title: "Online Spanish Classes",
      description:
        "Step into the world of our online Spanish classes! Step into the world of our online Spanish classes! Whether you're starting from scratch or refining your existing Spanish skills, our customised and interactive courses are designed specifically for you. Say adiós to traditional classroom setups and hola to personalised instruction, flexible scheduling, and immersive learning experiences with our top-quality online Spanish courses. With our team of expert instructors guiding you, you'll effortlessly navigate Spanish grammar, expand your vocabulary, engage in dynamic conversations, and immerse yourself in the vibrant culture of the Spanish-speaking world. Get ready to plunge into the beauty of the Spanish language and enjoy the excitement of mastering Spanish at your own pace with our 1:1 or Group Online Classes.",
    },
    OnlineLanguageClass: {
      Language: "Spanish",
      CardData: [
        {
          title: "Spanish Classes for Kids",
          img: kids,
          description:
            "Dive into Spanish fun with interactive online classes designed to spark excitement and curiosity in young learners!",
          link: "/Languages/Spanish/ForKids",
        },
        {
          title: "Spanish Classes for Adults",
          img: adults,
          description:
            "Embark on a journey to Spanish fluency with dynamic online classes tailored to fit your busy lifestyle and ignite your passion for language learning!",
          link: "/Languages/Spanish/adults",
        },
        {
          title: "Spanish Classes for Study Abroad",
          img: studyAbroad,
          description:
            "Prepare for your Spanish adventure with immersive online classes that will equip you with the language skills and cultural insights needed to thrive abroad!",
          link: "/Languages/Spanish/StudyAbroad",
        },
      ],
    },
    ClassesForAnyGoal: {
      Language: "Spanish",
      CardData: [
        {
          title: "Spanish Classes for School",
          img: school,
          description:
            "Spark excitement with our online Spanish classes for kids! Whether it's curriculum-based or as a hobby, we make learning engaging and enjoyable            .",
          link: "#",
        },
        {
          title: "Spanish Classes for College",
          img: college,
          description:
            "Dive into Spanish fluency with our flexible online classes tailored to fit your college schedule. Explore the language, culture, and opportunities that await!            ",
          link: "#",
        },
        {
          title: "Spanish Classes for Corporate",
          img: corporate,
          description:
            "Elevate your Spanish skills with our customized online classes. Whether you're an individual seeking personal growth or a company fostering a global mindset, we're here to help you thrive!            ",
          link: "#",
        },
      ],
    },
    LanguageExams: {
      Language: "Spanish",
      CardData: [
        {
          title: "DELE preparation classes          ",
          img: dalf,
          description:
            "Achieve Spanish language proficiency with our DELE exam preparation courses. These diplomas are internationally recognised and validate your Spanish skills for academic, professional, or personal purposes.            ",
          link: "/Languages/Spanish/exam/dele",
        },
        {
          title: "SIELE preparation classes          ",
          img: telf,
          description:
            "Prepare for the SIELE exam, a globally recognized certification of Spanish language proficiency. Whether for academic or professional advancement, our courses are tailored to help you succeed.            ",
          link: "/Languages/Spanish/exam/siele",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "Spanish",
      CardData: [
        {
          title: "A1-A2",
          level: "Beginner Classes          ",
          description:
            "Start your Spanish language journey with our engaging online classes designed for beginners. Learn fundamental grammar, vocabulary, and practical conversation skills at your own pace with our expert instructors' guidance.            ",
          link: "/Languages/Spanish/LevelPage/BeginnerLevel(A1-A2)",
        },

        {
          title: "B1-B2          ",
          level: "Intermediate Classes          ",
          description:
            "Elevate your Spanish proficiency with our online intermediate classes. Refine pronunciation, expand vocabulary, and master complex grammar structures to confidently engage in conversations and express yourself fluently.            ",
          link: "/Languages/Spanish/LevelPage/IntermediateLevel(B1-B2)",
        },

        {
          title: "C1-C2          ",
          level: "Advanced Classes          ",
          description:
            "Advance your Spanish skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in Spanish.            ",
          link: "/Languages/Spanish/LevelPage/AdvancedLevel(C1-C2)",
        },
      ],
    },
    WhyLearnLanguage: {
      Language: "Spanish",
      CardData1: {
        title: "Global communication",
        info: "Spanish is the second most spoken language in the world with over 580 million speakers, making it a valuable asset for international communication and cultural exchange.      ",
      },
      CardData2: {
        title: "CCultural enrichment        ",
        info: "Learning Spanish reveals rich cultures from Spain and Latin America, offering insights into literature, art, music, cuisine, and traditions.        ",
      },
      CardData3: {
        title: "Career opportunities        ",
        info: "Proficiency in Spanish enhances job prospects, particularly in fields such as tourism, business, healthcare, education, and translation services.        ",
      },
      CardData4: {
        title: "Academic pursuits ",
        info: "Spanish is widely used in academia, offering access to prestigious universities, research opportunities, and publications.      ",
      },
      CardData5: {
        title: "Travel and exploration",
        info: "With Spanish language skills, you can confidently navigate Spanish-speaking countries and immerse yourself in local communities during travel.        ",
      },
    },
    FaqsData: [
      {
        question: "Why learn with The Language Network?",
        answer:
          "Learn with The Language Network for personalised instruction, flexible scheduling, and immersive learning experiences tailored to your specific needs. Our expert tutors offer 1:1 and small group classes, ensuring personalised attention and effective learning. Additionally, we provide recordings of classes for your convenience and offer free study material worth ₹10,000+ to support your language learning journey.",
      },
      {
        question: "Will I get a certificate after completing each level?",
        answer:
          "Yes, you will receive a certificate upon completion of each level. We, as a language school are ISO-certified and our certificates are PAN India recognised. We also prepare for language proficiency exams, the certificates for which are recognised worldwide.",
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
          "According to the Foreign Service Institute, Spanish is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
      },
      {
        question: "Is Spanish useful in India?",
        answer:
          "Learning Spanish opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Spanish is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
      },
      {
        question: "How much time will it take to learn Spanish?",
        answer:
          "The time it takes to learn Spanish depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 8 months to complete B1-B2 level and approximately 11 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
      {
        question: "What is included in the curriculum?",
        answer:
          "The curriculum includes grammar, vocabulary, listening, speaking, reading, and writing exercises tailored to each proficiency level, along with cultural insights and practical applications.",
      },
    ],
    EveryThingYouNeedToKnowAbout: {
      Language: "Spanish",
      CardData: [
        {
          question: "Why is it important to excel at Spanish exams?",
          answer:
            "Excelling in Spanish exams holds significant importance beyond simply obtaining good grades. Firstly, proficiency in Spanish significantly enhances communication skills. Spanish is spoken in numerous countries around the world and is one of the official languages of international organisations like the United Nations and the International Red Cross. Therefore, mastering Spanish provides individuals with the ability to communicate effectively with a diverse range of people, opening up opportunities for cultural exchange, collaboration, and friendship. Moreover, excelling in Spanish exams fosters a deeper understanding of different cultures. Language and culture are intricately connected, and by learning Spanish, individuals gain insight into the customs, traditions, and perspectives of Spanish-speaking communities. This cultural understanding promotes tolerance, empathy, and appreciation for diversity, qualities that are invaluable in today's interconnected world. Furthermore, proficiency in Spanish enhances global connectivity. In an increasingly globalised society, the ability to speak multiple languages, including Spanish, facilitates international cooperation, trade, and diplomacy. Whether in business, politics, or academia, individuals who excel in Spanish exams have a competitive edge in navigating global networks and building meaningful relationships across borders. Additionally, mastering a second language like Spanish has cognitive benefits. Research has shown that learning a new language stimulates brain activity, improves memory retention, and enhances problem-solving skills. These cognitive benefits extend beyond language learning and can positively impact academic performance, career prospects, and overall cognitive function.",
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
      ],
    },
    SayBonjur: "Say Hola to language learning with us!    ",
    LanguageLesson: [
      {
        title: "Popular classes we offer        ",
        list: [
          "Spanish Classes In Mumbai",
          " Spanish language course in delhi",
          " Spanish classes in pune",
          "Spanish language courses near me",
          "Spanish language classes near me",
        ],
      },
      {
        title: "Most Searched",
        list: [
          "Spanish Speaking Course",
          "Spanish Language Classes Online",
          "Spanish Speaking classes         ",
          "Spanish Speaking Course online          ",
        ],
      },
      {
        title: "Popular classes by target group ",
        list: [
          "Online Spanish Course          ",
          "Spanish classes online          ",
          "Spanish Speaking Course",
        ],
      },
      {
        title: "Spanish Classes for Focused Learning",
        list: [
          "Online Spanish classes for Beginner",
          "Online Spanish classes for Intermediate",
          "Online Spanish classes for Advanced",
          "Online Spanish classes for Kids ",
          "Online Spanish classes for adults",
          "Online Spanish classes to study abroad",
        ],
      },
    ],
  };
  const { data } = useGetFAQsQuery("");
  const [content, setContent] = useState(SpanishLanguageData);
  useEffect(() => {
    if(!data) return;
    const faqData = data.filter(
      (item) => item.language === "Spanish"
    );
    setContent((prev) => ({...prev, FaqsData: faqData}));
}, [data]);
  return (
    <div>
      <SharedMainLanuagePage Data={content} />
    </div>
  );
};

export default SpanishPage;
