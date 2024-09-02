import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import kids3 from "../../../../../Assets/FrenchPage/FrenchForKids/kids (1).png";
import kids1 from "../../../../../Assets/FrenchPage/FrenchForKids/kids (2).png";
import kids2 from "../../../../../Assets/FrenchPage/FrenchForKids/kids (3).png";
import bannerImage from "../../../../../Assets/FrenchPage/FrenchForKids/banner.webp";
import step1 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step1.png";
import step4 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step2.png";
import step2 from "../../../../../Assets/Homepage/FluencyCarrerCulture/step3.png";
import step3 from "../../../../../Assets/FrenchPage/FrenchMain/step3.png";
import dalf from "../../../../../Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "../../../../../Assets/FrenchPage/FrenchMain/delf.png";
import telf from "../../../../../Assets/FrenchPage/FrenchMain/telf.png";
const FrenchForKidsPage = () => {
  const data = {
    BannerData: {
      Language: "French",
      BannerImage: bannerImage,
      Description:
        "Welcome aboard our online French adventure for kids! Our classes are bursting with fun and excitement, specially designed to help children of all ages and levels learn how to speak, read, and write in French. Our personalised 1:1 classes cater to your child's unique learning pace.  With our team of experienced and enthusiastic tutors, your little ones will dive into the language in a lively and interactive way, with games, songs, and stories to keep them engaged. Whether your child is taking their first steps or already knows a bit of French, our online classes are the ultimate ticket to kick-start their language journey. Enroll today and get ready to witness your child's language skills take flight! ",
    },
    WhyKidsShouldLearn: {
      Title: "Why kids should learn French?",
      CardData: [
        {
          title: "Global Communication",
          img: kids1,
          description:
            "French, with 275 million speakers globally, fosters connections across French-speaking nations, enhancing global understanding and communication opportunities for children.",
          link: "",
        },
        {
          title: "Cultural Enrichment",
          img: kids2,
          description:
            "French, with 275 million speakers globally, fosters connections across French-speaking nations, enhancing global understanding and communication opportunities for children.",
          link: "",
        },
        {
          title: "Educational Advantages",
          img: kids3,
          description:
            "Learning French boosts cognitive skills like problem-solving, critical thinking, multitasking, and memory. Improved linguistic abilities benefit academic performance across subjects.",
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
      Language: "French",
      CardData: [
        {
          title: "DELF",
          img: delf, // Assuming ielts is the variable holding the image URL for IELTS
          description:
            "The DELF exam assesses French language proficiency for non-native speakers.It is designed for individuals seeking certification for academic or professional purposes, and for those planning to immigrate to French-speaking countries. ",
          link: "/Languages/French/exam/delf", // You can insert the link here
        },
        {
          title: "DALF",
          img: dalf, // Assuming ielts is the variable holding the image URL for IELTS
          description:
            "DALF is an advanced-level French language proficiency exam, suitable for individualsaiming to demonstrate high-level competency in French. It is recognized globally by academicinstitutions, employers, and immigration authorities.",
          link: "/Languages/French/exam/delf", // You can insert the link here
        },
        {
          title: "TEF",
          img: telf, // Assuming ielts is the variable holding the image URL for IELTS
          description:
            "The TEF exam is an internationally recognized French language proficiency test forindividuals seeking to assess their French language abilities. It is widely accepted by academicinstitutions, employers, and immigration authorities worldwide.",
          link: "/Languages/French/exam/delf", // You can insert the link here
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "French",

      CardData: [
        {
          title: "A1",
          price: "₹35,000/",
          level: "Beginner Classes",
          description:
            "Discover the joy of learning French with our engaging beginner program tailored for kids. Through fun activities and interactive lessons, children will build a solid foundation in French vocabulary and grammar.",
          link: "https://rzp.io/l/4eZEohQ",
        },
        {
          title: "A2",
          price: "₹42,000/",
          level: "Elementary Classes",
          description:
            "Elevate your child's French skills with our elementary program, designed to deepen their understanding and fluency. Through interactive lessons and engaging activities, children will expand their vocabulary and improve their conversational abilities.",
          link: "https://rzp.io/l/L5Ay2KNtN",
        },
        {
          title: "B2",
          price: "On Request",
          level: "Intermediate Classes",
          description:
            "Boost your child's French skills at our intermediate program, helping them express fluently and understand complex texts confidently. Through engaging activities, they'll master familiar topics and enhance their language proficiency",
          link: "",
        },
      ],
    },
    WhyLearnLanguage: {
      Language: "French",
      CardData1: {
        title: "Global Communication",
        info: "French has 1.5 billion speakers globally and fosters connections across French-speaking nations, enhancing global understanding and communication opportunities for children.",
      },
      CardData2: {
        title: "Academic Advantages",
        info: "Mastery of French enhances access to educational resources, research, and opportunities for higher education.",
      },
      CardData3: {
        title: "Career Opportunities",
        info: "Proficiency in French opens doors in various industries, including business, technology, and tourism, offering competitive advantages in the global job market.",
      },
      CardData4: {
        title: "Cultural Enrichment",
        info: "Learning French exposes children to diverse literature, music, films, and popular culture from French-speaking countries.",
      },
      CardData5: {
        title: "Travel and Exploration",
        info: "French proficiency enhances travel experiences and fosters deeper engagement with French-speaking regions, such as the United States, United Kingdom, Canada, Australia, and more.",
      },
    },
    Faqs: [
      {
        question: "Why your child should study with The Language Network?",
        answer:
          "We offer personalised instruction, flexible scheduling, and immersive learning experiences tailored to your child's specific needs. Our expert tutors offer 1:1 classes for children, ensuring personalised attention and effective learning. Additionally, we provide recordings of classes for their convenience and offer free study material worth ₹5,000+ to support their language learning journey.",
      },
      {
        question: "Why is learning French beneficial for children?",
        answer:
          "Learning French at a young age offers numerous advantages, including cognitive development, academic success, and cultural enrichment.",
      },
      {
        question: "At what age should children start learning French?",
        answer:
          "Children can start learning French as early as primary school age to benefit from enhanced cognitive abilities and language acquisition skills.",
      },
      {
        question:
          "What resources are available to help children learn French effectively?",
        answer:
          "Your child will be provided with comprehensive study material worth ₹5,000+ free of cost to supplement their learning and reinforce key concepts.",
      },
      {
        question:
          "What levels are assessed in the DELF Junior & DELF Prim exams for children?",
        answer:
          "The DELF Junior & DELF Prim exams assess language proficiency at different levels corresponding to the Common European Framework of Reference for Languages (CEFR): A1, A2, B1, and B2.",
      },
      {
        question:
          "How can parents ensure their child's success in learning French?",
        answer:
          "Parents can monitor their child's progress by screening their weekly assessments and performance. Additionally, parents can facilitate their child's proficiency in French by establishing a nurturing environment at home and promoting consistent language practice through diverse activities.",
      },
    ],
    EveryThingYouNeedToKnowAbout: {
      Language: "French",
      CardData: [
        {
          question: "Why is it important to excel at French exams?",
          answer:
            "Excelling in French exams holds significant importance beyond simply obtaining good grades. Firstly, proficiency in French significantly enhances communication skills. French is spoken in numerous countries around the world and is one of the official languages of international organisations like the United Nations and the International Red Cross. Therefore, mastering French provides individuals with the ability to communicate effectively with a diverse range of people, opening up opportunities for cultural exchange, collaboration, and friendship.\n\nMoreover, excelling in French exams fosters a deeper understanding of different cultures. Language and culture are intricately connected, and by learning French, individuals gain insight into the customs, traditions, and perspectives of French-speaking communities. This cultural understanding promotes tolerance, empathy, and appreciation for diversity, qualities that are invaluable in today's interconnected world.\n\nFurthermore, proficiency in French enhances global connectivity. In an increasingly globalised society, the ability to speak multiple languages, including French, facilitates international cooperation, trade, and diplomacy. Whether in business, politics, or academia, individuals who excel in French exams have a competitive edge in navigating global networks and building meaningful relationships across borders.\n\nAdditionally, mastering a second language like French has cognitive benefits. Research has shown that learning a new language stimulates brain activity, improves memory retention, and enhances problem-solving skills. These cognitive benefits extend beyond language learning and can positively impact academic performance, career prospects, and overall cognitive function.",
        },
        {
          question: "How can kids do well in a French exam?",
          answer:
            "To ace a French exam, it's essential to prepare strategically and practice diligently. Kids should focus on mastering key language skills like reading, writing, listening, and speaking. Effective study methods include practicing regularly with fun materials like storybooks and online games. Kids can also improve by getting feedback from teachers or parents, participating in activities like storytelling or singing French songs, and using special techniques for exams.\n\nTop tips for French revision:\nFor effective revision, kids should mix repetition, practice, and focused improvement. Using tools like flashcards, quizzes and educational videos can help reinforce learning over time. Watching cartoons or playing language-learning games exposes kids to different French contexts and makes learning more enjoyable. It's also helpful for kids to get feedback from tutors or friends to improve in specific areas, leading to better results in exams.",
        },
        {
          question: "Why does your child need French tutoring?",
          answer:
            "Personalised French tutoring offers tailored support and guidance, addressing individual learning needs and challenges. Tutors can provide targeted instruction, practice activities, and feedback to accelerate learning and boost confidence. Additionally, one-on-one tutoring allows for a deeper focus on exam preparation strategies, language skills development, and overcoming specific obstacles, ensuring optimal progress and success.",
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
      <SharedKidsPage Data={data} language={"French"}/>
    </div>
  );
};

export default FrenchForKidsPage;
