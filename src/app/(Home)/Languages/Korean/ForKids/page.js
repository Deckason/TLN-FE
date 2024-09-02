import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import kids3 from "../../../../../Assets/FrenchPage/FrenchForKids/kids (1).png";
import kids1 from "../../../../../Assets/FrenchPage/FrenchForKids/kids (2).png";
import kids2 from "../../../../../Assets/FrenchPage/FrenchForKids/kids (3).png";
import bannerImage from "../../../../../Assets/KoreanPage/KoreanForKids/banner.webp";
import step1 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step1.png";
import step4 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step2.png";
import step2 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step3.png";
import step3 from "../../../../../Assets/FrenchPage/FrenchMain/step3.png";
import delf from "../../../../../Assets/KoreanPage/Topik.svg";
const KoreanForKidsPage = () => {
  const data = {
    BannerData: {
      Language: "Korean",
      BannerImage: bannerImage,
      Description:
        "Welcome aboard our online Korean adventure for kids! Our classes are bursting with fun and excitement, specially designed to help children of all ages and levels learn how to speak, read, and write in Korean. Our personalised 1:1 classes cater to your child's unique learning pace.  With our team of experienced and enthusiastic tutors, your little ones will dive into the language in a lively and interactive way, with games, songs, and stories to keep them engaged. Whether your child is taking their first steps or already knows a bit of Korean, our online classes are the ultimate ticket to kick-start their language journey. Enroll today and get ready to witness your child's language skills take flight! ",
    },
    WhyKidsShouldLearn: {
      Title: "Why kids should learn Korean?",
      CardData: [
        {
          title: "Global Communication",
          img: kids1,
          description:
            "Korean is spoken by over 80 million people worldwide, offering opportunities for cultural exchange, enhanced global understanding, and communication opportunities for children.",
          link: "",
        },
        {
          title: "Educational Advantages",
          img: kids2,
          description:
            "Enhances cognitive skills, including memory and problem-solving, and opens doors to understanding one of the world's most innovative economies.",
          link: "",
        },
        {
          title: "Career Opportunities",
          img: kids3,
          description:
            "Proficiency in Korean provides a competitive edge in fields such as technology, entertainment, and international relations.",
          link: "",
        },
        {
          title: "Cultural Enrichment",
          img: kids1,
          description:
            "Learning Korean exposes children to rich traditions, pop culture phenomena like K-pop, and a vibrant culinary scene.",
          link: "",
        },
        {
          title: "Travel and Exploration",
          img: kids2,
          description:
            "Enables deeper immersion and understanding while exploring South Korea's history, landmarks, and natural beauty.",
          link: "",
        },
        {
          title: "Personal Growth",
          img: kids3,
          description:
            "Fosters appreciation for linguistic diversity, cultural empathy, and adaptability in an increasingly interconnected world.",
          link: "",
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
      Language: "Korean",
      CardData: [
        {
          title: "The TOPIK Exam",
          img: delf,
          description:
            "Equip your child for success with our tailored exam course designed for kids. Our comprehensive preparation covers Korean grammar, vocabulary, reading, writing, and listening skills. With engaging lessons, interactive materials, and mock exams, we provide the perfect platform for kids to excel in the TOPIK exam.         ",
          link: "",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "Korean",

      CardData: [
        {
          title: "TOPIK 1-Level 1 & 2",
          price: "₹28,000-₹28,000/-*",
          level: "Beginner Level",
          description:
            "Start your child's Korean journey with our beginner course, introducing them to Korean basics like grammar, vocabulary, and pronunciation, perfect for kids who are new to the language.",
          link: "https://rzp.io/l/V9cVKm542",
        },
      ],
    },

    Faqs: [
      {
        question: "Why your child should study with The Language Network?",
        answer:
          "The Language Network offers personalised instruction, flexible scheduling, and immersive learning experiences tailored to your child's specific needs. Our expert tutors offer 1:1 classes for children, ensuring personalised attention and effective learning. Additionally, we provide recordings of classes for their convenience and offer free study material worth ₹5,000+ to support their language learning journey.",
      },
      {
        question: "Why is learning Korean beneficial for children?",
        answer:
          "Learning Korean at a young age offers numerous advantages, including cognitive development, academic success, and cultural enrichment.",
      },
      {
        question: "At what age should children start learning Korean?",
        answer:
          "Children can start learning Korean as early as primary school age to benefit from enhanced cognitive abilities and language acquisition skills.",
      },
      {
        question:
          "What resources are available to help children learn Korean effectively?",
        answer:
          "Your child will be provided with comprehensive study material worth ₹5,000+ free of cost to supplement their learning and reinforce key concepts.",
      },
      {
        question: "What levels are assessed in the TOPIK exams for children?",
        answer:
          "The TOPIK exam is a standard test across age groups and evaluates proficiency in the Korean language across six levels: Levels 1 and 2 for beginners, Levels 3 and 4 for intermediate learners, and Levels 5 and 6 for advanced learners. These levels assess listening, reading, writing, and speaking skills, with the difficulty progressively increasing from Level 1 to Level 6. Each level targets specific language competencies, allowing test-takers to demonstrate their proficiency accurately.",
      },
      {
        question:
          "How can parents ensure their child's success in learning Korean?",
        answer:
          "Parents can monitor their child's progress by screening their weekly assessments and performance. Additionally, Parents can facilitate their child's proficiency in Korean by establishing a nurturing environment at home and promoting consistent language practice through diverse activities.",
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
      <SharedKidsPage Data={data} language={"Korean"}/>
    </div>
  );
};

export default KoreanForKidsPage;
