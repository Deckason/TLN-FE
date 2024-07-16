"use client";
import adults from "../../../../Assets/Spanish/SpanishForAdults.png";
import kids from "../../../../Assets/Spanish/SpanishForKids.png";
import studyAbroad from "../../../../Assets/Spanish/SpanishForStudyAbroad.png";
import school from "../../../../Assets/FrenchPage/FrenchMain/school.png";
import college from "../../../../Assets/FrenchPage/FrenchMain/college.png";
import corporate from "../../../../Assets/FrenchPage/FrenchMain/corporate.png";
import Goethe from "../../../../Assets/GermanMainPage/Gothe.svg";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { useGetFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const GermanPage = () => {
  const GermanLanguageData = {
    Banner: {
      title: "Online German Classes",
      description:
        "Step into the world of our online German classes! Whether you're starting from scratch or polishing your already impressive German skills, our tailored and interactive courses are crafted just for you. Bid farewell to traditional classroom setups and say hallo to personalised instruction, flexible scheduling, and immersive learning experiences with our top-notch online German courses. With our team of expert trainers by your side, you'll smoothly navigate the ins and outs of German grammar, expand your vocabulary, engage in lively conversations, and dive deep into the rich culture of the German-speaking world. Prepare to dive headfirst into the elegance of the German language and experience the thrill of mastering German at your own pace with our 1:1 or Group Online German Classes.",
    },
    OnlineLanguageClass: {
      Language: "German",
      CardData: [
        {
          title: "German Classes for Kids",
          img: kids,
          description:
            "Dive into German fun with interactive online classes designed to spark excitement and curiosity in young learners!",
          link: "/Languages/German/ForKids",
        },
        {
          title: "German Classes for Adults",
          img: adults,
          description:
            "Embark on a journey to German fluency with dynamic online classes tailored to fit your busy lifestyle and ignite your passion for language learning!",
          link: "/Languages/German/adults",
        },
        {
          title: "German Classes for Study Abroad",
          img: studyAbroad,
          description:
            "Prepare for your German adventure with immersive online classes that will equip you with the language skills and cultural insights needed to thrive abroad!",
          link: "/Languages/German/StudyAbroad",
        },
      ],
    },
    ClassesForAnyGoal: {
      Language: "German",
      CardData: [
        {
          title: "German Classes for School",
          img: school,
          description:
            "Boost cognitive development and cultural awareness among students with our engaging German language program tailored for schools.            .",
          link: "#",
        },
        {
          title: "German Classes for College",
          img: college,
          description:
            "Equip college students with essential language skills for academic success and international career opportunities through our specialized German course            ",
          link: "#",
        },
        {
          title: "German Classes for Corporate",
          img: corporate,
          description:
            "Elevate your career with German training for corporates. Whether you're an individual seeking personal growth or a company fostering a global mindset, we're here to help you thrive!        ",
          link: "#",
        },
      ],
    },
    LanguageExams: {
      Language: "German",
      CardData: [
        {
          title: "GOETHE preparation classes          ",
          img: Goethe,
          description:
            "The GOETHE exam assesses German language proficiency globally. Success demonstrates effective communication in German for various purposes. Our tailored course helps you master skills and confidently tackle each section of the exam.            ",
          link: "/Languages/German/exam/goethe",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "German",
      CardData: [
        {
          title: "A1-A2",
          level: "Beginner Classes          ",
          description:
            "Start your German language journey with our engaging online classes designed for beginners. Learn fundamental grammar, vocabulary, and practical conversation skills at your own pace with expert instructors' guidance.            ",
          link: "/Languages/German/LevelPage/BeginnerLevel(A1-A2)",
        },

        {
          title: "B1-B2          ",
          level: "Intermediate Classes          ",
          description:
            "Elevate your German proficiency with our online intermediate classes. Refine pronunciation, expand vocabulary, and master complex grammar structures to confidently engage in conversations and express yourself fluently.            ",
          link: "/Languages/German/LevelPage/IntermediateLevel(B1-B2)",
        },

        {
          title: "C1-C2          ",
          level: "Advanced Classes          ",
          description:
            "Take your German skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in German.            ",
          link: "/Languages/German/LevelPage/AdvancedLevel(C1-C2)",
        },
      ],
    },
    WhyLearnLanguage: {
      Language: "German",
      CardData1: {
        title: "Global communication",
        info: "German is spoken by 100 million people worldwide, making it a valuable asset for international communication and cultural exchange.        ",
      },
      CardData2: {
        title: "Cultural enrichment        ",
        info: "German language and culture offer rich insights into literature, philosophy, music, and cuisine, enriching cultural experiences.        ",
      },
      CardData3: {
        title: "Career opportunities        ",
        info: "German proficiency enhances job prospects, particularly in fields like engineering, automotive, manufacturing, finance, and international business.        ",
      },
      CardData4: {
        title: "Academic pursuits ",
        info: "German is spoken in numerous countries worldwide, making it invaluable for travel and exploration and enriching experiences abroad.        ",
      },
      CardData5: {
        title: "Travel and exploration",
        info: "German is a vital language in academia, granting access to prestigious universities, research opportunities, and academic publications.        ",
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
          "What job opportunities will I get after completing my German course?",
        answer:
          "After completing your German course, you'll gain access to job opportunities in various sectors such as international business, tourism, translation and interpretation, diplomacy, teaching, and multinational corporations with German operations. You may also find employment as a language specialist, cultural liaison, or customer service representative for German-speaking clients. Additionally, proficiency in German can enhance your prospects for roles in research, academia, and cultural exchange programs.",
      },
      {
        question: "Is German an easy language to learn?",
        answer:
          "About 40% of German and English vocabulary are very similar to each other, which makes German one of the easiest languages to learn for native English speakers. So, basically, if you already know English, it should be a piece of cake for you to learn German.",
      },
      {
        question: "Is German useful in India?",
        answer:
          "Learning German opens up numerous career opportunities in India, particularly in sectors such as engineering, power, education, IT, healthcare, and pharmaceuticals. Proficiency in German can lead to new professional avenues and enhance prospects for employment and advancement in these industries.",
      },
      {
        question: "How much time will it take to learn German?",
        answer:
          "The time it takes to learn German depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 5 months to complete B1-B2 level and approximately 12 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
          "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both German language and teaching methodologies.",
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
      Language: "German",
      CardData: [
        {
          question: "Why Is It Important To Excel In German Exams?",
          answer:
            "Excelling in German exams holds significant importance beyond simply obtaining good grades. Firstly, proficiency in German significantly enhances communication skills. German is spoken in several countries around the world and is one of the official languages of international organizations like the European Union and the Goethe-Institut. Therefore, mastering German provides individuals with the ability to communicate effectively with a diverse range of people, opening up opportunities for cultural exchange, collaboration, and friendship. Moreover, excelling in German exams fosters a deeper understanding of different cultures. Language and culture are intricately connected, and by learning German, individuals gain insight into the customs, traditions, and perspectives of German-speaking communities. This cultural understanding promotes tolerance, empathy, and appreciation for diversity, qualities that are invaluable in today's interconnected world. Furthermore, proficiency in German enhances global connectivity. In an increasingly globalized society, the ability to speak multiple languages, including German, facilitates international cooperation, trade, and diplomacy. Whether in business, politics, or academia, individuals who excel in German exams have a competitive edge in navigating global networks and building meaningful relationships across borders. Additionally, mastering a second language like German has cognitive benefits. Research has shown that learning a new language stimulates brain activity, improves memory retention, and enhances problem-solving skills. These cognitive benefits extend beyond language learning and can positively impact academic performance, career prospects, and overall cognitive function.",
        },
        {
          question: "Studying A German Course Sharpens The Mind:",
          answer:
            "Studying a German course offers more than just language acquisition; it serves as a robust mental exercise that positively impacts overall cognitive function. Much like physical exercise strengthens muscles, learning German challenges various cognitive functions and stimulates neural pathways in the brain. Firstly, mastering German involves memorizing vocabulary, grammar rules, and language structures. This process requires active engagement of memory systems, which enhances memory retention and recall abilities. Constantly recalling and applying new linguistic knowledge exercises the brain's memory centers, leading to improvements in both short-term and long-term memory. Additionally, learning German demands focused attention and concentration. Whether deciphering unfamiliar words in a text or constructing grammatically correct sentences, students must maintain a high level of concentration throughout their studies. This sustained mental effort strengthens attentional control and improves concentration skills, which can benefit other areas of life, such as work or academic pursuits. Moreover, studying German encourages critical thinking and problem-solving skills. Language learners often encounter challenges such as deciphering meaning from context, understanding complex grammar concepts, or expressing ideas coherently in speech or writing. Addressing these challenges requires analytical thinking, logical reasoning, and creative problem-solving strategies. As students navigate these linguistic puzzles, they develop more effective cognitive processing techniques that can be applied beyond language learning contexts. Furthermore, engaging with the cultural aspects of the German language, such as literature, art, and history, stimulates higher-order thinking skills. Analyzing German texts, discussing cultural nuances, and interpreting historical events foster intellectual curiosity and promote a deeper understanding of the world. This multidimensional approach to language learning enriches cognitive flexibility and promotes a broader perspective on diverse cultural experiences.",
        },
        {
          question: "Even Primary School German Makes Travelling Easier:",
          answer:
            "Basic proficiency in German can significantly enhance travel experiences in German-speaking countries. Whether ordering food in a café, asking for directions, or interacting with locals, knowing even a few phrases can make travel more enjoyable and immersive. Additionally, understanding the local language fosters cultural appreciation and facilitates deeper connections with people and places. As one of the most spoken languages in the world, German is spoken in several countries including Germany, Austria, Switzerland, Belgium, Luxembourg, Liechtenstein, Italy (Bolzano/Südtirol), France (Alsatian), Czech Republic, Hungary, Denmark, Poland (Silesia), Russia, Romania, Slovakia, and Vatican City.",
        },
        {
          question: "A German Course Helps With Employment Prospects:",
          answer:
            "In the contemporary job market, where globalization is the norm, proficiency in multiple languages, including German, is increasingly valued by employers across diverse industries. Here's how enrolling in a German course can significantly enhance one's employment prospects: International Opportunities: German is not only spoken in Germany but also in other countries such as Austria, Switzerland, and parts of Belgium and Italy. Acquiring proficiency in German expands job opportunities beyond one's home country, opening doors to international positions and global career paths. Sectors with High Demand: Many industries have a high demand for German-speaking professionals. For instance, in the field of diplomacy and international relations, knowing German can be a significant advantage, as it is one of the official languages of the European Union and widely used in international business settings. Similarly, the tourism industry often seeks employees who can communicate effectively with German-speaking tourists, enhancing customer satisfaction and promoting cultural exchange. International Business: With the increasing globalization of business operations, companies are expanding their reach to German-speaking markets. Proficiency in German can be particularly beneficial for roles involving international business development, marketing, sales, and customer service, as it enables effective communication and relationship-building with German-speaking clients, partners, and stakeholders. Translation and Interpretation Services: The demand for professional translators and interpreters is on the rise, driven by the need for multilingual communication in various domains. Fluency in German equips individuals with the skills to provide translation and interpretation services, facilitating cross-cultural communication and bridging language barriers. Soft Skills Development: Beyond linguistic proficiency, studying German cultivates valuable soft skills that are highly valued in today's workforce. Effective communication, cultural awareness, adaptability, and intercultural competence are essential attributes that employers seek in candidates. By immersing oneself in the German language and culture, individuals develop a deeper understanding of diverse perspectives and enhance their ability to collaborate and engage with people from different backgrounds.",
        },
        {
          question: "How to do well in a German Exam?",
          answer:
            "Achieving success in a German exam requires strategic preparation and diligent practice. Students should focus on mastering key language skills, including reading, writing, listening, and speaking. Effective study techniques include regular practice with diverse study materials, such as textbooks and online resources. Additionally, seeking feedback from teachers or tutors, engaging in immersive language activities, and utilizing exam-specific strategies can enhance exam performance. Top Tips For German Revision: Effective revision involves a combination of repetition, practice, and targeted improvement. Spaced repetition techniques help reinforce learning over time, while practicing with diverse materials exposes students to different language contexts and challenges. Immersive activities, such as watching German films or participating in language exchange programs, can enhance fluency and cultural understanding. Furthermore, seeking feedback from tutors or peers allows for targeted improvement in areas of weakness, ultimately leading to better exam outcomes.",
        },
        {
          question: "Why you need German tutoring?",
          answer:
            "Personalized German tutoring offers tailored support and guidance, addressing individual learning needs and challenges. Tutors can provide targeted instruction, practice activities, and feedback to accelerate learning and boost confidence. Additionally, one-on-one tutoring allows for a deeper focus on exam preparation strategies, language skills development, and overcoming specific obstacles, ensuring optimal progress and success.",
        },
        {
          question:
            "Improving German language skills through tutoring involves a multifaceted approach that addresses all aspects of language proficiency: reading, writing, listening, and speaking.",
          answer:
            "Comprehension: Tutors employ a range of reading materials, such as articles, short stories, and literary texts, suited to the student's level and interests. Through guided reading exercises, students learn to comprehend and analyze German texts, expanding their vocabulary and understanding of grammar structures. Tutors may also introduce reading strategies to improve comprehension and speed, fostering independent reading habits. Writing: Writing practice is essential for developing grammar proficiency, vocabulary expansion, and coherent expression in German. Tutors guide students through writing exercises, including essays, journal entries, and creative writing tasks. By providing constructive feedback on grammar, syntax, and style, tutors help students refine their writing skills and develop a distinct voice in German. Listening: Listening comprehension is honed through exposure to authentic audio materials, such as podcasts, interviews, and speeches, in German. Tutors incorporate listening activities into lessons, allowing students to practice discerning spoken German in various contexts and accents. By engaging with audio content, students improve their auditory processing skills, vocabulary recognition, and understanding of spoken grammar patterns. Tutors may also provide listening transcripts or comprehension questions to reinforce comprehension and facilitate active listening. Speaking: Oral communication skills are developed through structured speaking activities and conversation practice in German. Tutors facilitate interactive speaking exercises, role-plays, and discussions, encouraging students to express themselves fluently and confidently. Through regular speaking practice, students gain proficiency in pronunciation, intonation, and conversational fluency. Tutors offer corrective feedback on pronunciation errors, grammatical inaccuracies, and communication strategies, guiding students towards clearer and more effective oral communication. Additionally, tutors may introduce vocabulary-building exercises and idiomatic expressions to enrich students' spoken German repertoire.",
        },
      ],
    },
    SayBonjur: "Say Hallo to language learning with us!    ",
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
  const { data } = useGetFAQsQuery("");
  const [content, setContent] = useState(GermanLanguageData);
  useEffect(() => {
    if(!data) return;
    const faqData = data.filter(
      (item) => item.language === "German"  && item.category === "General"
    );
    const everyData = data.filter(
      (item) => item.language === "German" && item.category === "Everything you need to know"
    )
    setContent((prev) => ({...prev, FaqsData: faqData , EveryThingYouNeedToKnowAbout: {
        ...prev.EveryThingYouNeedToKnowAbout, // Spread the existing properties
        CardData: everyData, // Update CardData 
      } }))
}, [data]);
  return (
    <div>
      <SharedMainLanuagePage Data={content} language={"German"}/>
    </div>
  );
};

export default GermanPage;
