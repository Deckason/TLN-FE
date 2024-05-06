import SharedMainLanuagePage from "@/Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import adults from "@/Assets/Spanish/SpanishForAdults.png";
import kids from "@/Assets/Spanish/SpanishForKids.png";
import studyAbroad from "@/Assets/Spanish/SpanishForStudyAbroad.png";
import school from "@/Assets/FrenchPage/FrenchMain/school.png";
import college from "@/Assets/FrenchPage/FrenchMain/college.png";
import corporate from "@/Assets/FrenchPage/FrenchMain/corporate.png";
import dalf from "@/Assets/Mandarin/HSK.jpg";

const MandarinPage = () => {
  const MandarinLanguageData = {
    Banner: {
      title: "Online Mandarin Classes",
      description:
        "Step into the world of our online Mandarin classes! Step into the world of our online Mandarin classes! Whether you're starting from scratch or polishing your already impressive Mandarin skills, our tailored and interactive courses are crafted just for you. Bid farewell to traditional classroom setups and say hello to personalised instruction, flexible scheduling, and immersive learning experiences with our top-notch online Mandarin courses. With our team of expert trainers by your side, you'll seamlessly navigate the intricacies of Mandarin grammar, enhance your vocabulary, participate in dynamic conversations, and immerse yourself in the diverse culture of the Mandarin-speaking world. Prepare to dive headfirst into the elegance of the Mandarin language and experience the thrill of mastering Mandarin at your own pace with our 1:1 or Group Online Mandarin Classes.",
    },
    OnlineLanguageClass: {
      Language: "Mandarin",
      CardData: [
        {
          title: "Mandarin Classes for Kids",
          img: kids,
          description:
            "Dive into Mandarin fun with interactive online classes designed to spark excitement and curiosity in young learners!",
          link: "/Languages/Mandarin/ForKids",
        },
        {
          title: "Mandarin Classes for Adults",
          img: adults,
          description:
            "Embark on a journey to Mandarin fluency with dynamic online classes tailored to fit your busy lifestyle and ignite your passion for language learning!",
          link: "/Languages/Mandarin/adults",
        },
        {
          title: "Mandarin Classes for Study Abroad",
          img: studyAbroad,
          description:
            "Prepare for your Mandarin adventure with immersive online classes that will equip you with the language skills and cultural insights needed to thrive abroad!",
          link: "/Languages/Mandarin/StudyAbroad",
        },
      ],
    },
    ClassesForAnyGoal: {
      Language: "Mandarin",
      CardData: [
        {
          title: "Mandarin Classes for School",
          img: school,
          description:
            "Boost cognitive development and cultural awareness among students with our engaging Mandarin language program tailored for schools.",
          link: "#",
        },
        {
          title: "Mandarin Classes for College",
          img: college,
          description:
            "Equip college students with essential language skills for academic success and international career opportunities through our specialized Mandarin course.",
          link: "#",
        },
        {
          title: "Mandarin Classes for Corporate",
          img: corporate,
          description:
            "Elevate your career with Mandarin training for corporates. Whether you're an individual seeking personal growth or a company fostering a global mindset, we're here to help you thrive!",
          link: "#",
        },
      ],
    },
    LanguageExams: {
      Language: "Mandarin",
      CardData: [
        {
          title: "HSK preparation classes          ",
          img: dalf,
          description:
            "Master the HSK exam, the gold standard in Mandarin proficiency. Our expert-led courses comprehensively cover vocabulary, grammar, reading, and listening, ensuring your success in this globally recognized assessment.            ",
          link: "/Languages/Mandarin/exam/hsk",
        },
      ],
    },
    ClassesForAnyLevel: {
      Language: "Mandarin",
      CardData: [
        {
          title: "HSK1-HSK2",
          level: "Beginner Classes ",
          description:
            "Begin your Mandarin language journey with our beginner courses, specially designed to introduce you to the basics of Mandarin grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Mandarin. ",
          link: "/Languages/Mandarin/LevelPage/BeginnerLevel(A1-A2)",
        },

        {
          title: "HSK3-HSK4          ",
          level: "Intermediate Classes          ",
          description:
            "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Mandarin proficiency.            ",
          link: "/Languages/Mandarin/LevelPage/IntermediateLevel(B1-B2)",
        },

        {
          title: "HSK5-HSK6          ",
          level: "Advanced Classes          ",
          description:
            "Elevate your Mandarin proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts.            ",
          link: "/Languages/Mandarin/LevelPage/AdvancedLevel(C1-C2)",
        },
      ],
    },
    WhyLearnLanguage: {
      Language: "Mandarin",
      CardData1: {
        title: "Global communication",
        info: "Mandarin Chinese is the most spoken language in the world, with over a billion native speakers, making it a valuable asset for international communication and cultural exchange.        ",
      },
      CardData2: {
        title: "Career Opportunities        ",
        info: "Mandarin proficiency enhances job prospects, particularly in fields such as business, diplomacy, education, translation, and tourism, enhancing career prospects across various sectors.        ",
      },
      CardData3: {
        title: "Cultural Enrichment ",
        info: "Learning Mandarin opens a gateway to one of the world's oldest and richest cultures by providing access to Chinese literature, history, philosophy, art, and traditions.        ",
      },
      CardData4: {
        title: "Academic pursuits ",
        info: "Mandarin is a key language in academia, offering access to prestigious universities, research opportunities, and academic publications.        ",
      },
      CardData5: {
        title: "Travel and exploration",
        info: "Learning Mandarin enables genuine interactions with native speakers, fostering authentic connections during travel and providing firsthand insights into their perspectives and way of life.",
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
          "What job opportunities will I get after completing my Mandarin course?",
        answer:
          "Upon completing your Mandarin course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
      },
      {
        question: "Is Mandarin an easy language to learn?",
        answer:
          "According to the Foreign Service Institute, Mandarin is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
      },
      {
        question: "Is Mandarin useful in India?",
        answer:
          "Learning Mandarin opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. Mandarin is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
      },
      {
        question: "How much time will it take to learn Mandarin?",
        answer:
          "The time it takes to learn Mandarin depends on the level you aim to achieve. It typically takes around 3 months to clear HSK 1 & 2, about 4 months to complete HSK 3 & 4 and approximately 6 months to clear HSK 5 & 6 . Completing all levels up to HSK 6 proficiency usually spans around 11 months.        ",
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
          "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both Mandarin language and teaching methodologies.",
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
      Language: "Mandarin",
      CardData: [
        {
          question: "Why is it important to excel at Mandarin exams?",
          answer:
            "Excelling in Mandarin exams holds significant importance beyond simply obtaining good grades. Firstly, proficiency in Mandarin significantly enhances communication skills. Mandarin is spoken in numerous countries around the world and is one of the official languages of international organisations like the United Nations and the International Red Cross. Therefore, mastering Mandarin provides individuals with the ability to communicate effectively with a diverse range of people, opening up opportunities for cultural exchange, collaboration, and friendship.\n\nMoreover, excelling in Mandarin exams fosters a deeper understanding of different cultures. Language and culture are intricately connected, and by learning Mandarin, individuals gain insight into the customs, traditions, and perspectives of Mandarin-speaking communities. This cultural understanding promotes tolerance, empathy, and appreciation for diversity, qualities that are invaluable in today's interconnected world.\n\nFurthermore, proficiency in Mandarin enhances global connectivity. In an increasingly globalised society, the ability to speak multiple languages, including Mandarin, facilitates international cooperation, trade, and diplomacy. Whether in business, politics, or academia, individuals who excel in Mandarin exams have a competitive edge in navigating global networks and building meaningful relationships across borders.\n\nAdditionally, mastering a second language like Mandarin has cognitive benefits. Research has shown that learning a new language stimulates brain activity, improves memory retention, and enhances problem-solving skills. These cognitive benefits extend beyond language learning and can positively impact academic performance, career prospects, and overall cognitive function.",
        },
        {
          question: "How can kids do well in a Mandarin exam?",
          answer:
            "To ace a Mandarin exam, it's essential to prepare strategically and practice diligently. Kids should focus on mastering key language skills like reading, writing, listening, and speaking. Effective study methods include practicing regularly with fun materials like storybooks and online games. Kids can also improve by getting feedback from teachers or parents, participating in activities like storytelling or singing Mandarin songs, and using special techniques for exams.\n\nTop tips for Mandarin revision:\nFor effective revision, kids should mix repetition, practice, and focused improvement. Using tools like flashcards, quizzes and educational videos can help reinforce learning over time. Watching cartoons or playing language-learning games exposes kids to different Mandarin contexts and makes learning more enjoyable. It's also helpful for kids to get feedback from tutors or friends to improve in specific areas, leading to better results in exams.",
        },
        {
          question: "Why does your child need Mandarin tutoring?",
          answer:
            "Personalised Mandarin tutoring offers tailored support and guidance, addressing individual learning needs and challenges. Tutors can provide targeted instruction, practice activities, and feedback to accelerate learning and boost confidence. Additionally, one-on-one tutoring allows for a deeper focus on exam preparation strategies, language skills development, and overcoming specific obstacles, ensuring optimal progress and success.",
        },
      ],
    },
    SayBonjur: "Say Nǐ hǎo to language learning with us!    ",
    LanguageLesson: [
      {
        title: "Popular classes we offer        ",
        list: [
          "Mandarin Classes In Mumbai",
          " Mandarin language course in delhi",
          " Mandarin classes in pune",
          "Mandarin language courses near me",
          "Mandarin language classes near me",
        ],
      },
      {
        title: "Most Searched",
        list: [
          "Mandarin Speaking Course",
          "Mandarin Language Classes Online",
          "Mandarin Speaking classes         ",
          "Mandarin Speaking Course online          ",
        ],
      },
      {
        title: "Popular classes by target group ",
        list: [
          "Online Mandarin Course          ",
          "Mandarin classes online          ",
          "Mandarin Speaking Course",
        ],
      },
      {
        title: "Mandarin Classes for Focused Learning",
        list: [
          "Online Mandarin classes for Beginner",
          "Online Mandarin classes for Intermediate",
          "Online Mandarin classes for Advanced",
          "Online Mandarin classes for Kids ",
          "Online Mandarin classes for adults",
          "Online Mandarin classes to study abroad",
        ],
      },
    ],
  };
  return (
    <div>
      <SharedMainLanuagePage Data={MandarinLanguageData} />
    </div>
  );
};

export default MandarinPage;
