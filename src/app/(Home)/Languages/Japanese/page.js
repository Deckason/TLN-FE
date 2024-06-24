"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import adults from "../../../../Assets/Spanish/SpanishForAdults.png";
import kids from "../../../../Assets/Spanish/SpanishForKids.png";
import studyAbroad from "../../../../Assets/Spanish/SpanishForStudyAbroad.png";
import school from "../../../../Assets/FrenchPage/FrenchMain/school.png";
import college from "../../../../Assets/FrenchPage/FrenchMain/college.png";
import corporate from "../../../../Assets/FrenchPage/FrenchMain/corporate.png";
import dalf from "../../../../Assets/Japanese/jlpt.png";
import { useGetFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const JapanesePage = () => {
  const JapaneseLanguageData = {
    Banner: {
      title: "Online Japanese Classes",
      description:
        "Step into the world of our online Japanese classes! Step into the world of our online Japanese classes! Whether you're starting from scratch or polishing your already impressive Japanese skills, our tailored and interactive courses are crafted just for you. Bid farewell to traditional classroom setups and say hello to personalised instruction, flexible scheduling, and immersive learning experiences with our top-notch online Japanese courses. With our team of expert trainers by your side, you'll seamlessly navigate the intricacies of Japanese grammar, enhance your vocabulary, participate in dynamic conversations, and immerse yourself in the diverse culture of the Japanese-speaking world. Prepare to dive headfirst into the elegance of the Japanese language and experience the thrill of mastering Japanese at your own pace with our 1:1 or Group Online Japanese Classes.",
    },
    OnlineLanguageClass: {
      Language: "Japanese",
      CardData: [
        {
          title: "Japanese Classes for Kids",
          img: kids,
          description:
            "Dive into Japanese fun with interactive online classes designed to spark excitement and curiosity in young learners!",
          link: "/Languages/Japanese/ForKids",
        },
        {
          title: "Japanese Classes for Adults",
          img: adults,
          description:
            "Embark on a journey to Japanese fluency with dynamic online classes tailored to fit your busy lifestyle and ignite your passion for language learning!",
          link: "/Languages/Japanese/adults",
        },
        {
          title: "Japanese Classes for Study Abroad",
          img: studyAbroad,
          description:
            "Prepare for your Japanese adventure with immersive online classes that will equip you with the language skills and cultural insights needed to thrive abroad!",
          link: "/Languages/Japanese/StudyAbroad",
        },
      ],
    },
    ClassesForAnyGoal: {
      Language: "Japanese",
      CardData: [
        {
          title: "Japanese Classes for School",
          img: school,
          description:
            "Boost cognitive development and cultural awareness among students with our engaging Japanese language program tailored for schools.",
          link: "#",
        },
        {
          title: "Japanese Classes for College",
          img: college,
          description:
            "Equip college students with essential language skills for academic success and international career opportunities through our specialized Japanese course.",
          link: "#",
        },
        {
          title: "Japanese Classes for Corporate",
          img: corporate,
          description:
            "Elevate your career with Japanese training for corporates. Whether you're an individual seeking personal growth or a company fostering a global mindset, we're here to help you thrive!",
          link: "#",
        },
      ],
    },
    LanguageExams: {
      Language: "Japanese",
      CardData: [
        {
          title: "JLPT preparation classes          ",
          img: dalf,
          description:
            "Master the JLPT with our expert courses, the global benchmark for Japanese proficiency. We meticulously cover vocabulary, grammar, reading, and listening, ensuring your success in all exam sections.            ",
          link: "/Languages/Japanese/exam/jlpt",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "Japanese",
      CardData: [
        {
          title: "N5",
          level: "Beginner Classes ",
          description:
            "Begin your Japanese language journey with our beginner courses, specially designed to introduce you to the basics of Japanese grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Japanese, our courses will guide you through the fascinating world of three different Japanese scripts.            ",
          link: "/Languages/Japanese/LevelPage/BeginnerLevel(A1-A2)",
        },

        {
          title: "N4-N3          ",
          level: "Intermediate Classes          ",
          description:
            "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Japanese proficiency.            ",
          link: "/Languages/Japanese/LevelPage/IntermediateLevel(B1-B2)",
        },

        {
          title: "N2-N1    ",
          level: "Advanced Classes          ",
          description:
            "Elevate your Japanese proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts.            ",
          link: "/Languages/Japanese/LevelPage/AdvancedLevel(C1-C2)",
        },
      ],
    },
    WhyLearnLanguage: {
      Language: "Japanese",
      CardData1: {
        title: "Global communication",
        info: "Japanese is one of the world's top ten most commonly spoken languages, making it a valuable asset for international communication and cultural exchange.        ",
      },
      CardData2: {
        title: "Career Opportunities        ",
        info: "Japanese proficiency enhances job prospects, particularly in fields like technology, finance, hospitality, and international trade where connections with Japanese companies are prevalent.        ",
      },
      CardData3: {
        title: "Cultural Enrichment ",
        info: "Learning Japanese provides insights into a rich and diverse culture, offering opportunities to explore traditional arts, literature, cuisine, pop culture phenomena, and more.        ",
      },
      CardData4: {
        title: "Academic pursuits ",
        info: "Japanese is a key language in academia, providing access to prestigious universities, research opportunities, and scholarly publications, especially in fields like linguistics, Asian studies, and comparative literature.        ",
      },
      CardData5: {
        title: "Travel and exploration",
        info: "Learning Japanese enriches travel experiences, enabling deeper engagement with local communities, culture, and customs.        ",
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
          "What job opportunities will I get after completing my Japanese course?",
        answer:
          "Upon completing your Japanese course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
      },
      {
        question: "Is Japanese an easy language to learn?",
        answer:
          "According to the Foreign Service Institute, Japanese is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
      },
      {
        question: "Is Japanese useful in India?",
        answer:
          "Learning Japanese opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Japanese is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
      },
      {
        question: "How much time will it take to learn Japanese?",
        answer:
          "The time it takes to learn Japanese depends on the level you aim to achieve. It typically takes around 8 months to clear N5-N4 level, about 8 months to complete N3-N2 level and approximately 4 months to clear N1 level. Completing all levels up to N1 proficiency usually spans around 20 months.         ",
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
          "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Japanese language and teaching methodologies.",
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
      Language: "Japanese",
      CardData: [
        {
          question: "Why is it important to excel at Japanese exams?",
          answer:
            "Excelling in Japanese exams holds significant importance beyond simply obtaining good grades. Firstly, proficiency in Japanese significantly enhances communication skills. Japanese is spoken in numerous countries around the world and is one of the official languages of international organisations like the United Nations and the International Red Cross. Therefore, mastering Japanese provides individuals with the ability to communicate effectively with a diverse range of people, opening up opportunities for cultural exchange, collaboration, and friendship.\n\nMoreover, excelling in Japanese exams fosters a deeper understanding of different cultures. Language and culture are intricately connected, and by learning Japanese, individuals gain insight into the customs, traditions, and perspectives of Japanese-speaking communities. This cultural understanding promotes tolerance, empathy, and appreciation for diversity, qualities that are invaluable in today's interconnected world.\n\nFurthermore, proficiency in Japanese enhances global connectivity. In an increasingly globalised society, the ability to speak multiple languages, including Japanese, facilitates international cooperation, trade, and diplomacy. Whether in business, politics, or academia, individuals who excel in Japanese exams have a competitive edge in navigating global networks and building meaningful relationships across borders.\n\nAdditionally, mastering a second language like Japanese has cognitive benefits. Research has shown that learning a new language stimulates brain activity, improves memory retention, and enhances problem-solving skills. These cognitive benefits extend beyond language learning and can positively impact academic performance, career prospects, and overall cognitive function.",
        },
        {
          question: "How can kids do well in a Japanese exam?",
          answer:
            "To ace a Japanese exam, it's essential to prepare strategically and practice diligently. Kids should focus on mastering key language skills like reading, writing, listening, and speaking. Effective study methods include practicing regularly with fun materials like storybooks and online games. Kids can also improve by getting feedback from teachers or parents, participating in activities like storytelling or singing Japanese songs, and using special techniques for exams.\n\nTop tips for Japanese revision:\nFor effective revision, kids should mix repetition, practice, and focused improvement. Using tools like flashcards, quizzes and educational videos can help reinforce learning over time. Watching cartoons or playing language-learning games exposes kids to different Japanese contexts and makes learning more enjoyable. It's also helpful for kids to get feedback from tutors or friends to improve in specific areas, leading to better results in exams.",
        },
        {
          question: "Why does your child need Japanese tutoring?",
          answer:
            "Personalised Japanese tutoring offers tailored support and guidance, addressing individual learning needs and challenges. Tutors can provide targeted instruction, practice activities, and feedback to accelerate learning and boost confidence. Additionally, one-on-one tutoring allows for a deeper focus on exam preparation strategies, language skills development, and overcoming specific obstacles, ensuring optimal progress and success.",
        },
      ],
    },
    SayBonjur: "Say Kon'nichiwa to language learning with us!    ",
    LanguageLesson: [
      {
        title: "Popular classes we offer        ",
        list: [
          "Japanese Classes In Mumbai",
          " Japanese language course in delhi",
          " Japanese classes in pune",
          "Japanese language courses near me",
          "Japanese language classes near me",
        ],
      },
      {
        title: "Most Searched",
        list: [
          "Japanese Speaking Course",
          "Japanese Language Classes Online",
          "Japanese Speaking classes         ",
          "Japanese Speaking Course online          ",
        ],
      },
      {
        title: "Popular classes by target group ",
        list: [
          "Online Japanese Course          ",
          "Japanese classes online          ",
          "Japanese Speaking Course",
        ],
      },
      {
        title: "Japanese Classes for Focused Learning",
        list: [
          "Online Japanese classes for Beginner",
          "Online Japanese classes for Intermediate",
          "Online Japanese classes for Advanced",
          "Online Japanese classes for Kids ",
          "Online Japanese classes for adults",
          "Online Japanese classes to study abroad",
        ],
      },
    ],
  };
  const { data } = useGetFAQsQuery("");
  const [content, setContent] = useState(JapaneseLanguageData);
  useEffect(() => {
    if(!data) return;
    const faqData = data.filter(
      (item) => item.language === "Japanese"
    );
    setContent((prev) => ({...prev, FaqsData: faqData}));
}, [data]);
  return (
    <div>
      <SharedMainLanuagePage Data={content} />
    </div>
  );
};

export default JapanesePage;
