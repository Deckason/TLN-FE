import SharedMainLanuagePage from "@/Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import school from "@/Assets/FrenchPage/FrenchMain/school.png";
import college from "@/Assets/FrenchPage/FrenchMain/college.png";
import corporate from "@/Assets/FrenchPage/FrenchMain/corporate.png";
import dalf from "@/Assets/KoreanPage/Topik.svg";

const KoreanPage = () => {
  const KoreanLanguageData = {
    Banner: {
      title: "Online Korean Classes",
      description:
        "Step into the world of our online Korean classes! Step into the world of our online Korean classes! Whether you're starting from scratch or polishing your already impressive Korean skills, our tailored and interactive courses are crafted just for you. Bid farewell to traditional classroom setups and say hello to personalised instruction, flexible scheduling, and immersive learning experiences with our top-notch online Korean courses. With our team of expert trainers by your side, you'll seamlessly navigate the intricacies of Korean grammar, enhance your vocabulary, participate in dynamic conversations, and immerse yourself in the diverse culture of the Korean-speaking world. Prepare to dive headfirst into the elegance of the Korean language and experience the thrill of mastering Korean at your own pace with our 1:1 or Group Online Korean Classes.",
    },
    OnlineLanguageClass: {
      Language: "Korean",
      CardData: [
        {
          title: "Korean Classes for Kids",
          img: kids,
          description:
            "Dive into Korean fun with interactive online classes designed to spark excitement and curiosity in young learners!",
          link: "/Languages/Korean/ForKids",
        },
        {
          title: "Korean Classes for Adults",
          img: adults,
          description:
            "Embark on a journey to Korean fluency with dynamic online classes tailored to fit your busy lifestyle and ignite your passion for language learning!",
          link: "/Languages/Korean/adults",
        },
        {
          title: "Korean Classes for Study Abroad",
          img: studyAbroad,
          description:
            "Prepare for your Korean adventure with immersive online classes that will equip you with the language skills and cultural insights needed to thrive abroad!",
          link: "/Languages/Korean/StudyAbroad",
        },
      ],
    },
    ClassesForAnyGoal: {
      Language: "Korean",
      CardData: [
        {
          title: "Korean Classes for School",
          img: school,
          description:
            "Boost cognitive development and cultural awareness among students with our engaging Korean language program tailored for schools.",
          link: "#",
        },
        {
          title: "Korean Classes for College",
          img: college,
          description:
            "Equip college students with essential language skills for academic success and international career opportunities through our specialized Korean course.",
          link: "#",
        },
        {
          title: "Korean Classes for Corporate",
          img: corporate,
          description:
            "Elevate your career with Korean training for corporates. Whether you're an individual seeking personal growth or a company fostering a global mindset, we're here to help you thrive!",
          link: "#",
        },
      ],
    },
    LanguageExams: {
      Language: "Korean",
      CardData: [
        {
          title: "TOPIK preparation classes          ",
          img: dalf,
          description:
            "Get ready for the TOPIK proficiency exam with our expert courses. Our comprehensive curriculum covers all aspects of the exam, helping you excel in vocabulary, grammar, listening, and speaking. Join us and achieve your Korean language goals!           ",
          link: "#",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "Korean",
      CardData: [
        {
          title: "TOPIK I-Level 1 & 2          ",
          level: "Beginner Classes ",
          description:
            "Begin your Korean language journey with our beginner courses, specially designed to introduce you to the basics of Korean grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Korean, our courses will guide you through the fascinating world of three different Korean scripts.            ",
          link: "/Languages/Korean/LevelPage/BeginnerLevel(A1-A2)",
        },

        {
          title: "TOPIK II-Level 3 & 4   ",
          level: "Intermediate Classes          ",
          description:
            "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Korean proficiency.            ",
          link: "/Languages/Korean/LevelPage/IntermediateLevel(B1-B2)",
        },

        {
          title: "TOPIK II-Level 5 & 6          ",
          level: "Advanced Classes          ",
          description:
            "Elevate your Korean proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts.            ",
          link: "/Languages/Korean/LevelPage/AdvancedLevel(C1-C2)",
        },
      ],
    },
    WhyLearnLanguage: {
      Language: "Korean",
      CardData1: {
        title: "Global communication",
        info: "Korean is spoken by 80 million people worldwide, serving as a valuable asset for international communication and cultural exchange.        ",
      },
      CardData2: {
        title: "Career Opportunities        ",
        info: "Korean proficiency enhances job prospects, particularly in fields such as diplomacy, business, journalism, translation, and education.        ",
      },
      CardData3: {
        title: "Cultural Enrichment ",
        info: "Korea's rich cultural heritage, including traditions, music, art, cuisine, and literature, is amplified by the global surge in popularity of Korean culture, known as the Korean Wave or Hallyu.        ",
      },
      CardData4: {
        title: "Academic pursuits ",
        info: "Korean is a significant language in academia, offering access to prestigious universities, research opportunities, and academic publications.        ",
      },
      CardData5: {
        title: "Travel and exploration",
        info: "Korea is a popular tourist destination known for its stunning landscapes, historical sites, vibrant cities, and delicious cuisine.        ",
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
          "What job opportunities will I get after completing my Korean course?",
        answer:
          "Upon completing your Korean course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
      },
      {
        question: "Is Korean an easy language to learn?",
        answer:
          "According to the Foreign Service Institute, Korean is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
      },
      {
        question: "Is Korean useful in India?",
        answer:
          "Yes, Korean can be quite useful in India, especially in sectors like technology, manufacturing, entertainment, and tourism, where there are increasing business and cultural ties with South Korea. Proficiency in Korean can open up job opportunities in multinational corporations with Korean operations, as well as in translation, interpretation, and language teaching roles. Additionally, knowledge of Korean can facilitate cultural exchange programs and collaborations between Indian and South Korean organisations.        ",
      },
      {
        question: "How much time will it take to learn Korean?",
        answer:
          "The time it takes to learn Korean depends on the level you aim to achieve. It typically takes around 4 months to clear TOPIK I - Level 1 & 2, about 5 months to complete  TOPIK II - Level 3 & 4  and approximately 6 months to clear  TOPIK II - Level 5 & 6.  Completing all levels up to TOPIK II Level 6 proficiency usually spans around 15 months.         ",
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
      {
        question: "What is included in the curriculum?",
        answer:
          "The curriculum includes grammar, vocabulary, listening, speaking, reading, and writing exercises tailored to each proficiency level, along with cultural insights and practical applications.",
      },
    ],
    EveryThingYouNeedToKnowAbout: {
      Language: "Korean",
      CardData: [
        {
          question: "Why is it important to excel at Korean exams?",
          answer:
            "Excelling in Korean exams holds significant importance beyond simply obtaining good grades. Firstly, proficiency in Korean significantly enhances communication skills. Korean is spoken in numerous countries around the world and is one of the official languages of international organisations like the United Nations and the International Red Cross. Therefore, mastering Korean provides individuals with the ability to communicate effectively with a diverse range of people, opening up opportunities for cultural exchange, collaboration, and friendship.\n\nMoreover, excelling in Korean exams fosters a deeper understanding of different cultures. Language and culture are intricately connected, and by learning Korean, individuals gain insight into the customs, traditions, and perspectives of Korean-speaking communities. This cultural understanding promotes tolerance, empathy, and appreciation for diversity, qualities that are invaluable in today's interconnected world.\n\nFurthermore, proficiency in Korean enhances global connectivity. In an increasingly globalised society, the ability to speak multiple languages, including Korean, facilitates international cooperation, trade, and diplomacy. Whether in business, politics, or academia, individuals who excel in Korean exams have a competitive edge in navigating global networks and building meaningful relationships across borders.\n\nAdditionally, mastering a second language like Korean has cognitive benefits. Research has shown that learning a new language stimulates brain activity, improves memory retention, and enhances problem-solving skills. These cognitive benefits extend beyond language learning and can positively impact academic performance, career prospects, and overall cognitive function.",
        },
        {
          question: "How can kids do well in a Korean exam?",
          answer:
            "To ace a Korean exam, it's essential to prepare strategically and practice diligently. Kids should focus on mastering key language skills like reading, writing, listening, and speaking. Effective study methods include practicing regularly with fun materials like storybooks and online games. Kids can also improve by getting feedback from teachers or parents, participating in activities like storytelling or singing Korean songs, and using special techniques for exams.\n\nTop tips for Korean revision:\nFor effective revision, kids should mix repetition, practice, and focused improvement. Using tools like flashcards, quizzes and educational videos can help reinforce learning over time. Watching cartoons or playing language-learning games exposes kids to different Korean contexts and makes learning more enjoyable. It's also helpful for kids to get feedback from tutors or friends to improve in specific areas, leading to better results in exams.",
        },
        {
          question: "Why does your child need Korean tutoring?",
          answer:
            "Personalised Korean tutoring offers tailored support and guidance, addressing individual learning needs and challenges. Tutors can provide targeted instruction, practice activities, and feedback to accelerate learning and boost confidence. Additionally, one-on-one tutoring allows for a deeper focus on exam preparation strategies, language skills development, and overcoming specific obstacles, ensuring optimal progress and success.",
        },
      ],
    },
    SayBonjur: "Say Annyeonghaseyo to language learning with us!    ",
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
    <div>
      <SharedMainLanuagePage Data={KoreanLanguageData} />
    </div>
  );
};

export default KoreanPage;
