import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import kids1 from "../../../../../Assets/FrenchPage/FrenchForKids/kids (1).png";
import kids2 from "../../../../../Assets/FrenchPage/FrenchForKids/kids (2).png";
import kids3 from "../../../../../Assets/FrenchPage/FrenchForKids/kids (3).png";
import step1 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step1.png";
import step4 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step2.png";
import step2 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step3.png";
import step3 from "../../../../../Assets/FrenchPage/FrenchMain/step3.png";
import Cambridge_Assessment from "../../../../../Assets/English/Cambridge_Assessment.jpg";
const EnglishForKidsPage = () => {
  const data = {
    BannerData: {
      Language: "English",
      Description:
        "Welcome aboard our online English adventure for kids! Our classes are bursting with fun and excitement, specially designed to help children of all ages and levels learn how to speak, read, and write in English. Our personalised 1:1 classes cater to your child's unique learning pace.  With our team of experienced and enthusiastic tutors, your little ones will dive into the language in a lively and interactive way, with games, songs, and stories to keep them engaged. Whether your child is taking their first steps or already knows a bit of English, our online classes are the ultimate ticket to kick-start their language journey. Enroll today and get ready to witness your child's language skills take flight! ",
    },
    WhyKidsShouldLearn: {
      Title: "Why kids should learn English?",
      CardData: [
        {
          title: "Global Communication          ",
          description:
            "English has 1.5 billion speakers globally and fosters connections across English-speaking nations, enhancing global understanding and communication opportunities for children.",
          img: kids1,
        },
        {
          title: "Cultural Enrichment          ",
          description:
            "Learning English exposes children to diverse literature, music, films, and popular culture from English-speaking countries.          ",
          img: kids2,
        },
        {
          title: "Academic Advantages          ",
          description:
            "Mastery of English enhances access to educational resources, research, and opportunities for higher education.          ",
          img: kids3,
        },
        {
          title: "Career Opportunities  ",
          description:
            "Proficiency in English opens doors in various industries, including business, technology, and tourism, offering competitive advantages in the global job market.          ",
          img: kids1,
        },
        {
          title: "Travel and Exploration        ",
          description:
            "English proficiency enhances travel experiences and fosters deeper engagement with English-speaking regions, such as the United States, United Kingdom, Canada, Australia, and more.          ",
          img: kids2,
        },
        {
          title: "Personal Growth         ",
          description:
            "Mastery of English promotes cognitive development, critical thinking, and communication skills, preparing children for success in an increasingly interconnected world.          ",
          img: kids3,
        },
      ],
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
      Language: "English",
      CardData: [
        {
          title: "Cambridge Assessment          ",
          img: Cambridge_Assessment,
          description:
            "Prepare your child for success with our Cambridge Assessment Exam preparation courses! We prioritize a holistic approach, focusing on all aspects of learning- listening, speaking, reading, and writing. With our innovative preparation techniques, your child will build the skills they need to ace their exams while enjoying fun activities and engaging lessons.",
          link: "/Languages/English/exam/ielts",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "English",

      CardData: [
        {
          title: "A1 ₹35,000/",
          level: "Beginner Classes",
          description:
            "Discover the joy of learning French with our engaging beginner program tailored for kids. Through fun activities and interactive lessons, children will build a solid foundation in French vocabulary and grammar.",
          link: "/Languages/English/LevelPage/BeginnerLevel(A1-A2)",
        },

        {
          title: "A2 ₹42,000/",
          level: "Intermediate Classes",
          description:
            "Elevate your child's French skills with our elementary program, designed to deepen their understanding and fluency. Through interactive lessons and engaging activities, children will expand their vocabulary and improve their conversational abilities.",
          link: "/Languages/English/LevelPage/BeginnerLevel(A1-A2)",
        },

        {
          title: "B2 On Request",
          level: "Advanced Classes",
          description:
            "Boost your child's French skills at our intermediate program, helping them express fluently and understand complex texts confidently. Through engaging activities, they'll master familiar topics and enhance their language proficiency.",
          link: "/Languages/English/LevelPage/IntermediateLevel(B1-B2)",
        },
      ],
    },
    WhyLearnLanguage: {
      Language: "English",
      CardData1: {
        title: "Global Communication",
        info: "English has 1.5 billion speakers globally and fosters connections across English-speaking nations, enhancing global understanding and communication opportunities for children.",
      },
      CardData2: {
        title: "Academic Advantages",
        info: "Mastery of English enhances access to educational resources, research, and opportunities for higher education.",
      },
      CardData3: {
        title: "Career Opportunities",
        info: "Proficiency in English opens doors in various industries, including business, technology, and tourism, offering competitive advantages in the global job market.",
      },
      CardData4: {
        title: "Cultural Enrichment",
        info: "Learning English exposes children to diverse literature, music, films, and popular culture from English-speaking countries.",
      },
      CardData5: {
        title: "Travel and Exploration",
        info: "English proficiency enhances travel experiences and fosters deeper engagement with English-speaking regions, such as the United States, United Kingdom, Canada, Australia, and more.",
      },
    },
    Faqs: [
      {
        question: "Why learn with The Language Network?",
        answer:
          "Learn with The Language Network for personalised instruction, flexible scheduling, and immersive learning experiences tailored to your specific needs. Our expert tutors offer 1:1 and small group classes, ensuring personalised attention and effective learning. Additionally, we provide recordings of classes for your convenience and offer free study material worth ₹10,000+ to support your language learning journey.",
      },
      {
        question: "Will I get a certificate after completing each level?",
        answer:
          "Yes, you will receive a certificate upon completion of each level. We, as a language school, are ISO-certified and our certificates are PAN India recognised. We also prepare for language proficiency exams, the certificates for which are recognised worldwide.",
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
          "Yes, you'll be provided with comprehensive study material worth ₹10,000+ free of cost to supplement your learning and reinforce key concepts.",
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
    SayBonjur: "Learning made easy. Guaranteed!",
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
      <SharedKidsPage Data={data} />
    </div>
  );
};

export default EnglishForKidsPage;
