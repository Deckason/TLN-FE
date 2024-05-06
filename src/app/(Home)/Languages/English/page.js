import SharedMainLanuagePage from "@/Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import school from "@/Assets/FrenchPage/FrenchMain/school.png";
import college from "@/Assets/FrenchPage/FrenchMain/college.png";
import corporate from "@/Assets/FrenchPage/FrenchMain/corporate.png";
import dalf from "@/Assets/Homepage/ProficiencyExam/logo6.png";
import telf from "@/Assets/English/toefl.webp";
const EnglishPage = () => {
  const EnglishLanguageData = {
    Banner: {
      title: "Online English Classes",
      description:
        "Step into the world of our online English classes! Step into the world of our online English classes! Whether you're starting from scratch or polishing your already impressive English skills, our tailored and interactive courses are crafted just for you. Bid farewell to traditional classroom setups and say hello to personalised instruction, flexible scheduling, and immersive learning experiences with our top-notch online English courses. With our team of expert trainers by your side, you'll seamlessly navigate the intricacies of English grammar, enhance your vocabulary, participate in dynamic conversations, and immerse yourself in the diverse culture of the English-speaking world. Prepare to dive headfirst into the elegance of the English language and experience the thrill of mastering English at your own pace with our 1:1 or Group Online English Classes.",
    },
    OnlineLanguageClass: {
      Language: "English",
      CardData: [
        {
          title: "English Classes for Kids",
          img: kids,
          description:
            "Dive into English fun with interactive online classes designed to spark excitement and curiosity in young learners!",
          link: "/Languages/English/ForKids",
        },
        {
          title: "English Classes for Adults",
          img: adults,
          description:
            "Embark on a journey to English fluency with dynamic online classes tailored to fit your busy lifestyle and ignite your passion for language learning!",
          link: "/Languages/English/adults",
        },
        {
          title: "English Classes for Study Abroad",
          img: studyAbroad,
          description:
            "Prepare for your English adventure with immersive online classes that will equip you with the language skills and cultural insights needed to thrive abroad!",
          link: "/Languages/English/StudyAbroad",
        },
      ],
    },
    ClassesForAnyGoal: {
      Language: "English",
      CardData: [
        {
          title: "English Classes for School",
          img: school,
          description:
            "Boost cognitive development and cultural awareness among students with our engaging English language program tailored for schools.",
          link: "#",
        },
        {
          title: "English Classes for College",
          img: college,
          description:
            "Equip college students with essential language skills for academic success and international career opportunities through our specialized English course.",
          link: "#",
        },
        {
          title: "English Classes for Corporate",
          img: corporate,
          description:
            "Elevate your career with English training for corporates. Whether you're an individual seeking personal growth or a company fostering a global mindset, we're here to help you thrive!",
          link: "#",
        },
      ],
    },
    LanguageExams: {
      Language: "English",
      CardData: [
        {
          title: "IELTS preparation classes",
          img: dalf,
          description:
            "Take your English skills to new heights with our IELTS preparation courses. Designed to help you excel in all four components - reading, writing, listening, and speaking - our expert instructors will guide you towards success in this globally recognized English proficiency exam.",
          link: "/Languages/English/exam/ielts",
        },
        {
          title: "TOEFL preparation classes",
          img: telf,
          description:
            "Open doors to international opportunities with our TOEFL preparation courses. From mastering academic English to excelling in listening, speaking, reading, and writing, our comprehensive training ensures you're fully prepared to ace this crucial exam.",
          link: "/Languages/English/exam/toelf",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "English",
      // CardData: [
      //   {
      //     title: "Reading",
      //     level: "",
      //     description:
      //       "Start your English language journey with our engaging online classes designed for beginners. Learn fundamental grammar, vocabulary, and practical conversation skills at your own pace with our expert instructors' guidance.",
      //     link: "#",
      //   },

      //   {
      //     title: "Writing          ",
      //     level: "",
      //     description:
      //       "Elevate your English proficiency with our online intermediate classes. Refine pronunciation, expand vocabulary, and master complex grammar structures to confidently engage in conversations and express yourself fluently.",
      //     link: "#",
      //   },

      //   {
      //     title: "Listening",
      //     level: "",
      //     description:
      //       "Advance your English skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in English.",
      //     link: "#",
      //   },
      //   {
      //     title: "Speaking",
      //     level: "",
      //     description:
      //       "Advance your English skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in English.",
      //     link: "#",
      //   },
      // ],
      CardData: [
        {
          title: "A1-A2",
          level: "Beginner Classes",
          description:
            "Start your English language journey with our engaging online classes designed for beginners. Learn fundamental grammar, vocabulary, and practical conversation skills at your own pace with our expert instructors' guidance.",
          link: "/Languages/English/LevelPage/BeginnerLevel(A1-A2)",
        },

        {
          title: "B1-B2",
          level: "Intermediate Classes",
          description:
            "Elevate your English proficiency with our online intermediate classes. Refine pronunciation, expand vocabulary, and master complex grammar structures to confidently engage in conversations and express yourself fluently.",
          link: "/Languages/English/LevelPage/IntermediateLevel(B1-B2)",
        },

        {
          title: "C1-C2",
          level: "Advanced Classes",
          description:
            "Advance your English skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in English.",
          link: "/Languages/English/LevelPage/AdvancedLevel(C1-C2)",
        },
      ],
    },
    WhyLearnLanguage: {
      Language: "English",
      CardData1: {
        title: "Global communication",
        info: "English is one of the most widely spoken languages in the world, making it the primary language of international communication in business, diplomacy, science, and tourism.        ",
      },
      CardData2: {
        title: "Career Opportunities        ",
        info: "English fluency enhances job prospects across industries, as multinational companies often require English-speaking employees. This proficiency can lead to better job opportunities, higher salaries, and career advancement.",
      },
      CardData3: {
        title: "Cultural Enrichment ",
        info: "English is the language of global culture, including literature, music, film, and the internet. Learning English allows for a deeper understanding and appreciation of diverse cultures and perspectives worldwide.        ",
      },
      CardData4: {
        title: "Academic pursuits ",
        info: "English is the dominant language of academia and research and is crucial for accessing educational resources, journals, and conferences, facilitating higher education and academic opportunities abroad.      ",
      },
      CardData5: {
        title: "Travel and exploration",
        info: "English proficiency facilitates travel and communication with people from different countries and cultures, making it easier to navigate airports, hotels, restaurants, and tourist attractions.",
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
          "What job opportunities will I get after completing my English course?",
        answer:
          "Upon completing your English course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
      },
      {
        question: "Is English an easy language to learn?",
        answer:
          "According to the Foreign Service Institute, English is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
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
          "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both English language and teaching methodologies.",
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
      Language: "English",
      CardData: [
        {
          question: "Why is it important to excel at English exams?",
          answer:
            "Excelling in English exams holds significant importance beyond simply obtaining good grades. Firstly, proficiency in English significantly enhances communication skills. English is spoken in numerous countries around the world and is one of the official languages of international organisations like the United Nations and the International Red Cross. Therefore, mastering English provides individuals with the ability to communicate effectively with a diverse range of people, opening up opportunities for cultural exchange, collaboration, and friendship. Moreover, excelling in English exams fosters a deeper understanding of different cultures. Language and culture are intricately connected, and by learning English, individuals gain insight into the customs, traditions, and perspectives of English-speaking communities. This cultural understanding promotes tolerance, empathy, and appreciation for diversity, qualities that are invaluable in today's interconnected world. Furthermore, proficiency in English enhances global connectivity. In an increasingly globalised society, the ability to speak multiple languages, including English, facilitates international cooperation, trade, and diplomacy. Whether in business, politics, or academia, individuals who excel in English exams have a competitive edge in navigating global networks and building meaningful relationships across borders. Additionally, mastering a second language like English has cognitive benefits. Research has shown that learning a new language stimulates brain activity, improves memory retention, and enhances problem-solving skills. These cognitive benefits extend beyond language learning and can positively impact academic performance, career prospects, and overall cognitive function.",
        },
        {
          question: "How can kids do well in a English exam?",
          answer:
            "To ace a English exam, it's essential to prepare strategically and practice diligently. Kids should focus on mastering key language skills like reading, writing, listening, and speaking. Effective study methods include practicing regularly with fun materials like storybooks and online games. Kids can also improve by getting feedback from teachers or parents, participating in activities like storytelling or singing English songs, and using special techniques for exams.\n\nTop tips for English revision:\nFor effective revision, kids should mix repetition, practice, and focused improvement. Using tools like flashcards, quizzes and educational videos can help reinforce learning over time. Watching cartoons or playing language-learning games exposes kids to different English contexts and makes learning more enjoyable. It's also helpful for kids to get feedback from tutors or friends to improve in specific areas, leading to better results in exams.",
        },
        {
          question: "Why does your child need English tutoring?",
          answer:
            "Personalised English tutoring offers tailored support and guidance, addressing individual learning needs and challenges. Tutors can provide targeted instruction, practice activities, and feedback to accelerate learning and boost confidence. Additionally, one-on-one tutoring allows for a deeper focus on exam preparation strategies, language skills development, and overcoming specific obstacles, ensuring optimal progress and success.",
        },
      ],
    },
    SayBonjur: "Say Annyeonghaseyo to language learning with us!    ",
    LanguageLesson: [
      {
        title: "Popular classes we offer        ",
        list: [
          "English Classes In Mumbai",
          " English language course in delhi",
          " English classes in pune",
          "English language courses near me",
          "English language classes near me",
        ],
      },
      {
        title: "Most Searched",
        list: [
          "English Speaking Course",
          "English Language Classes Online",
          "English Speaking classes         ",
          "English Speaking Course online          ",
        ],
      },
      {
        title: "Popular classes by target group ",
        list: [
          "Online English Course          ",
          "English classes online          ",
          "English Speaking Course",
        ],
      },
      {
        title: "English Classes for Focused Learning",
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
      <SharedMainLanuagePage Data={EnglishLanguageData} />
    </div>
  );
};

export default EnglishPage;
