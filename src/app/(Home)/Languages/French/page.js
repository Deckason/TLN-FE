import SharedMainLanuagePage from "@/Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import school from "@/Assets/FrenchPage/FrenchMain/school.png";
import college from "@/Assets/FrenchPage/FrenchMain/college.png";
import corporate from "@/Assets/FrenchPage/FrenchMain/corporate.png";
import dalf from "@/Assets/FrenchPage/FrenchMain/dalf.png";
import delf from "@/Assets/FrenchPage/FrenchMain/delf.png";
import telf from "@/Assets/FrenchPage/FrenchMain/telf.png";
const FrenchPage = () => {
  const FrenchLanguageData = {
    Banner: {
      title: "Online French Classes",
      description:
        "Step into the world of our online French classes! Whether you're starting from scratch or polishing your already impressive French skills, our tailored and interactive courses are crafted just for you. Bid farewell to traditional classroom setups and say bonjour to personalised instruction, flexible scheduling, and immersive learning experiences with our top-notch online French courses. With our team of expert trainers by your side, you'll smoothly navigate the ins and outs of French grammar, expand your vocabulary, engage in lively conversations, and dive deep into the rich culture of the Francophone world. Prepare to dive headfirst into the elegance of the French language and experience the thrill of mastering French at your own pace with our 1:1 or Group Online French Classes.",
    },
    OnlineLanguageClass: {
      Language: "French",
      CardData: [
        {
          title: "French Classes for Kids",
          img: kids,
          description:
            "Dive into French fun with interactive online classes designed to spark excitement and curiosity in young learners!",
          link: "/Languages/French/ForKids",
        },
        {
          title: "French Classes for Adults",
          img: adults,
          description:
            "Embark on a journey to French fluency with dynamic online classes tailored to fit your busy lifestyle and ignite your passion for language learning!",
          link: "/Languages/French/adults",
        },
        {
          title: "French Classes for Study Abroad",
          img: studyAbroad,
          description:
            "Prepare for your French adventure with immersive online classes that will equip you with the language skills and cultural insights needed to thrive abroad!",
          link: "/Languages/French/StudyAbroad",
        },
      ],
    },
    ClassesForAnyGoal: {
      Language: "French",
      CardData: [
        {
          title: "French Classes for School",
          img: school,
          description:
            "Spark excitement with our online French classes for kids! Whether it's curriculum-based or as a hobby, we make learning engaging and enjoyable.",
          link: "#",
        },
        {
          title: "French Classes for College",
          img: college,
          description:
            "Dive into French fluency with our flexible online classes tailored to fit your college schedule. Explore the language, culture, and opportunities that await!",
          link: "#",
        },
        {
          title: "French Classes for Corporate",
          img: corporate,
          description:
            "Elevate your French skills with our customized online classes. Whether you're an individual seeking personal growth or a company fostering a global mindset, we're here to help you thrive!",
          link: "#",
        },
      ],
    },
    LanguageExams: {
      Language: "French",
      CardData: [
        {
          title: "DALF preparation classes",
          img: dalf,
          description:
            "DALF is an advanced-level French language proficiency exam, suitable for individuals aiming to demonstrate high-level competency in French. It is recognized globally by academic institutions, employers, and immigration authorities.",
          link: "#",
        },
        {
          title: "DELF preparation classes",
          img: delf,
          description:
            "The DELF exam assesses French language proficiency for non-native speakers. It is designed for individuals seeking certification for academic or professional purposes, and for those planning to immigrate to French-speaking countries.",
          link: "#",
        },
        {
          title: "TEL preparation classes",
          img: telf,
          description:
            "The TEF exam is an internationally recognized French language proficiency test for individuals seeking to assess their French language abilities. It is widely accepted by academic institutions, employers, and immigration authorities worldwide.",
          link: "#",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "French",
      CardData: [
        {
          title: "A1-A2",
          level: "Beginner Classes",
          description:
            "Start your French language journey with our engaging online classes designed for beginners. Learn fundamental grammar, vocabulary, and practical conversation skills at your own pace with our expert instructors' guidance.",
          link: "#",
        },

        {
          title: "B1-B2",
          level: "Intermediate Classes",
          description:
            "Elevate your French proficiency with our online intermediate classes. Refine pronunciation, expand vocabulary, and master complex grammar structures to confidently engage in conversations and express yourself fluently.",
          link: "#",
        },

        {
          title: "C1-C2",
          level: "Advanced Classes",
          description:
            "Advance your French skills to the highest level with our online advanced classes. Enhance your conversational abilities, master complex grammar, and increase career prospects with fluent proficiency in French.",
          link: "#",
        },
      ],
    },
    WhyLearnLanguage: {
      Language: "French",
      CardData1: {
        title: "Global communication",
        info: "French, with 275 million speakers globally, fosters connections across French-speaking nations, enhancing global understanding and communication opportunities for children.",
      },
      CardData2: {
        title: "Cultural enrichment",
        info: "Learning French exposes children to diverse cultures, literature, cinema, and art. It is also tthe official language of global bodies like the United Nations, UNESCO, and the International Red Cross.",
      },
      CardData3: {
        title: "Career opportunities",
        info: "French proficiency is essential in global careers like business, diplomacy, tourism, and hospitality, given the significance of multilingual skills in today's world.",
      },
      CardData4: {
        title: "Educational advantages",
        info: "Learning French boosts cognitive skills like problem-solving, critical thinking, multitasking, and memory. Improved linguistic abilities benefit academic performance across subjects.",
      },
      CardData5: {
        title: "Personal growth",
        info: "French, with 275 million speakers globally, fosters connections across French-speaking nations, enhancing global understanding and communication opportunities for children.",
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
          "What job opportunities will I get after completing my French course?",
        answer:
          "Upon completing your French course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
      },
      {
        question: "Is French an easy language to learn?",
        answer:
          "According to the Foreign Service Institute, French is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
      },
      {
        question: "Is French useful in India?",
        answer:
          "Learning French opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. French is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
      },
      {
        question: "How much time will it take to learn French?",
        answer:
          "The time it takes to learn French depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 8 months to complete B1-B2 level and approximately 11 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months.",
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
          "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both French language and teaching methodologies.",
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
    SayBonjur: "Say Bonjour to language learning with us!",
    LanguageLesson: [
      {
        title: "French Classes Near Me",
        list: [
          "French Classes In Mumbai",
          " French language course in delhi",
          " French classes in pune",
          "French language courses near me",
          "French language classes near me",
        ],
      },
      {
        title: "Most Searched",
        list: [
          "Online French Speaking Course",
          "French Language Classes Online",
          "Learn French Online With Certificate",
          "French course near me",
          "French courses online",
        ],
      },
      {
        title: "Online French Classes",
        list: [
          "learn french online course",
          "online french language course",
          "french courses online",
          "french classes near me",
          "learn french online",
          "online french lessons",
        ],
      },
      {
        title: "French Classes for Focused Learning",
        list: [
          "Online french classes for Beginner",
          "Online french classes for Intermediate",
          "Online french classes for Advanced",
          "Online french classes for Kids ",
          "Online french classes for adults",
          "Online french classes to study abroad",
        ],
      },
    ],
  };
  return (
    <div>
      <SharedMainLanuagePage Data={FrenchLanguageData} />
    </div>
  );
};

export default FrenchPage;
