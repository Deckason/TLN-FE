import SharedKidsPage from "@/Shared/SharedKidsPage";
import kids1 from "@/Assets/FrenchPage/FrenchForKids/kids (1).png";
import kids2 from "@/Assets/FrenchPage/FrenchForKids/kids (2).png";
import kids3 from "@/Assets/FrenchPage/FrenchForKids/kids (3).png";
import step1 from "@/Assets/Homepage/FluencyCarrerCulture/step1.png";
import step4 from "@/Assets/Homepage/FluencyCarrerCulture/step2.png";
import step2 from "@/Assets/Homepage/FluencyCarrerCulture/step3.png";
import step3 from "@/Assets/FrenchPage/FrenchMain/step3.png";
import delf from "@/Assets/Spanish/DELE.png";
const SpanishForKidsPage = () => {
  const data = {
    BannerData: {
      Language: "Spanish",
      Description:
        "Welcome aboard our online Spanish adventure for kids! Our classes are bursting with fun and excitement, specially designed to help children of all ages and levels learn how to speak, read, and write in Spanish. Our personalised 1:1 classes cater to your child's unique learning pace.  With our team of experienced and enthusiastic tutors, your little ones will dive into the language in a lively and interactive way, with games, songs, and stories to keep them engaged. Whether your child is taking their first steps or already knows a bit of Spanish, our online classes are the ultimate ticket to kick-start their language journey. Enroll today and get ready to witness your child's language skills take flight! ",
    },
    WhyKidsShouldLearn: {
      Title: "Why kids should learn Spanish?",
      CardData: [
        {
          title: "Global Communication",
          img: kids1,
          description:
            "Spanish has 580 million speakers globally and fosters connections across Spanish-speaking nations, enhancing global understanding and communication opportunities for children.",
          link: "",
        },
        {
          title: "Educational Advantages",
          img: kids2,
          description:
            "Learning Spanish boosts cognitive skills like problem-solving, critical thinking, multitasking, and memory. Improved linguistic abilities benefit academic performance across subjects.",
          link: "",
        },
        {
          title: "Career Opportunities",
          img: kids3,
          description:
            "Spanish proficiency is essential in global careers like business, diplomacy, tourism, and hospitality, given the significance of multilingual skills in today's world.",
          link: "",
        },
        {
          title: "Cultural Enrichment",
          img: kids1,
          description:
            "Learning Spanish exposes children to diverse cultures, literature, cinema, and art. It is also the official language of global bodies like the United Nations, UNESCO, and the International Red Cross.",
          link: "",
        },
        {
          title: "Personal Growth",
          img: kids2,
          description:
            "Learning a new language cultivates empathy, cultural sensitivity, and self-confidence, fostering personal growth and appreciation for diversity.",
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
      Language: "Spanish",
      CardData: [
        {
          title: "DELE Junior",
          img: delf,
          description:
            "We specialize in DELE Junior exam training for young learners, providing tailored courses for kids to excel. With experienced instructors, personalized attention, and engaging activities, we empower children for success.   ",
          link: "",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "Spanish",

      CardData: [
        {
          title: "A1",
          description:
            "Discover the joy of learning Spanish with our engaging beginner program tailored for kids. Through fun activities and interactive lessons, children will build a solid foundation in Spanish vocabulary and grammar.",
          level: "₹35,000/-",
          link: "",
        },
        {
          title: "A2",
          description:
            "Elevate your child's Spanish skills with our elementary program, designed to deepen their understanding and fluency. Through interactive lessons and engaging activities, children will expand their vocabulary and improve their conversational abilities.",
          level: "₹42,000/-",
          link: "",
        },
        {
          title: "B1",
          description:
            "Boost your child's Spanish skills at our intermediate program, helping them express fluently and understand complex texts confidently. Through engaging activities, they'll master familiar topics and enhance their language proficiency.",
          level: "On Request",
          link: "",
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
        question: "Why is learning Spanish beneficial for children?",
        answer:
          "Learning Spanish at a young age offers numerous advantages, including cognitive development, academic success, and cultural enrichment.",
      },
      {
        question: "At what age should children start learning Spanish?",
        answer:
          "Children can start learning Spanish as early as primary school age to benefit from enhanced cognitive abilities and language acquisition skills.",
      },
      {
        question:
          "What resources are available to help children learn Spanish effectively?",
        answer:
          "Your child will be provided with comprehensive study material worth ₹5,000+ free of cost to supplement their learning and reinforce key concepts.",
      },
      {
        question: "What levels are assessed in the DELE for children?",
        answer:
          "The DELE exams assess language proficiency at different levels corresponding to the Common European Framework of Reference for Languages (CEFR): A1, A2, B1, and B2.",
      },
      {
        question:
          "How can parents ensure their child's success in learning Spanish?",
        answer:
          "Parents can monitor their child's progress by screening their weekly assessments and performance. Additionally, Parents can facilitate their child's proficiency in Spanish by establishing a nurturing environment at home and promoting consistent language practice through diverse activities.",
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
    SayBonjur: "Learning made easy. Guaranteed!",
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
  return (
    <div>
      <SharedKidsPage Data={data} />
    </div>
  );
};

export default SpanishForKidsPage;
