import step1 from "../../../Assets/Homepage/FluencyCarrerCulture/step1.png";
import step4 from "../../../Assets/Homepage/FluencyCarrerCulture/step2.png";
import step2 from "../../../Assets/Homepage/FluencyCarrerCulture/step3.png";
import step3 from "../../../Assets/FrenchPage/FrenchMain/step3.png";
import dalf from  "../../../Assets/Japanese/jlpt.png";
import bannerImg from '../../../Assets/Japanese/JapaneseStudyAbroad/Study Abroad Japan.jpg'
import experts from "../../../Assets/Homepage/whyShouldYouLearn/Expertrainers.webp";
import expertModal from "../../../Assets/Homepage/whyShouldYouLearn/ExpertModal.webp";
import interactiveModal from "../../../Assets/Homepage/whyShouldYouLearn/interactiveModal.webp";
import certificatedModal from "../../../Assets/Homepage/whyShouldYouLearn/CertificatedModal.webp";
import ReviewModal from "../../../Assets/Homepage/whyShouldYouLearn/ReviewModal.webp";
import BatchModal from "../../../Assets/Homepage/whyShouldYouLearn/BatchModal.webp";
import freeCourseModal from "../../../Assets/Homepage/whyShouldYouLearn/FreeStudyModal.webp";
import flexibleModal from "../../../Assets/Homepage/whyShouldYouLearn/FlexibleModal.webp";
import DemoModal from "../../../Assets/Homepage/whyShouldYouLearn/FreeDemoModal.webp";
import interactive from "../../../Assets/Homepage/whyShouldYouLearn/Interactivesessions.webp";
import courses from "../../../Assets/Homepage/whyShouldYouLearn/courses.webp";
import demo from "../../../Assets/Homepage/whyShouldYouLearn/demo.webp";
import material from "../../../Assets/Homepage/whyShouldYouLearn/material.webp";
import sessions from "../../../Assets/Homepage/whyShouldYouLearn/sessions.webp";
import flexible from "../../../Assets/Homepage/whyShouldYouLearn/flexible timings.webp";
import batch from "../../../Assets/Homepage/whyShouldYouLearn/batch.webp";

export const data = {
    BannerData: {
      Language: "Japanese",
      Description:
        "Japanese proficiency isn't just for admission—it's your key to maximising your study abroad adventure! With fluency in Japanese, you’ll seamlessly blend into your surroundings like a local, savouring the cultural flavours and enhancing every moment of your study abroad experience. The benefits don’t just end there. Being savvy in Japanese will open the floodgates to exciting internships during your studies and lucrative job opportunities post-graduation or masters. Also, don't overlook the visa and PR perks—mastering Japanese might just fast-track your way to official residency status! Gear up for the ultimate academic adventure with Japanese as your ally! Start today!",
        BannerImage:bannerImg
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
          level: "Beginner Classes",
          description:
            "Begin your Japanese language journey with our beginner courses, specially designed to introduce you to the basics of Japanese grammar, vocabulary, and pronunciation. Perfect for those with little to no prior experience in Japanese.",
          price: "₹17,982",
          link: "https://rzp.io/l/EGBnxv7w",
        },
        {
          title: "N4,N3",
          level: "Intermediate Classes",
          description:
            "Our intermediate courses will help you build upon your existing knowledge and enhance your fluency. Dive deeper into complex grammar structures, expand your vocabulary, and engage in meaningful conversations to strengthen your Japanese proficiency",
          price: "₹48,582",
          link: "https://rzp.io/l/heYbWM89",
        },
        {
          title: "N2,N1",
          level: "Advanced Classes",
          description:
            "Elevate your Japanese proficiency with our advanced courses. Tailored for learners with a solid grasp of the language, these courses refine nuanced language skills, tackle advanced grammar, and foster professional-level communication. Perfect for those aiming for fluency in academic or professional contexts",
          link: "",
          price:"On Request"
        },
      ],
    },
    Faqs: [
      {
        question:
          "What advantages does studying a language with The Language Network offer for individuals planning to pursue education abroad?",
        answer:
          "Studying a language with The Language Network offers a dynamic, immersive experience, nurturing language proficiency and cultural understanding essential for studying abroad. It promotes personal growth, enhances inter-cultural communication skills, and broadens global perspectives. Additionally, students receive valuable support services, including counselling and free study materials worth ₹10,000+, ensuring they are well-equipped for success in their educational endeavors overseas.",
      },
      {
        question:
          "What job opportunities will I get after completing my Spanish course?",
        answer:
          "Upon completing your Spanish course, you'll gain access to job opportunities in fields like translation, tourism, international relations, teaching, business, diplomacy, and more.",
      },
      {
        question: "What if I miss a class?",
        answer:
          "Missing a class should not be a worry as you will have lifetime access to the recorded classes and can refer to them at your convenience.",
      },
      {
        question: "Will I be provided with study material?",
        answer:
          "Yes, you'll be provided with comprehensive free study material worth ₹10,000+ to supplement your learning and reinforce key concepts.",
      },
      {
        question: "How many students are accommodated in one batch?",
        answer:
          "Our batches are usually small in size, typically accommodating 5 students to ensure personalized attention.",
      },
      {
        question: "What is included in the curriculum?",
        answer:
          "The curriculum includes grammar, vocabulary, listening, speaking, reading, and writing exercises tailored to each proficiency level, along with cultural insights and practical applications.",
      },
      {
        question:
          "Are online degrees and certificates recognized by academic institutions?",
        answer:
          "Yes, our certificates hold ISO certification and are recognized pan India. However, achieving global recognition often requires candidates to take international proficiency exams and obtain corresponding certificates in respective languages. We also prepare for language proficiency exams, the certificates for which are recognized worldwide.",
      },
      {
        question:
          "How do instructors assess students' progress in proficiency exam training courses?",
        answer:
          "Instructors regularly assess students' progress through practice exams, speaking assessments, writing assignments, and other progress-based assessments.",
      },
      {
        question:
          "Is it necessary to learn a foreign language before moving overseas for your education?",
        answer:
          "While learning the language may not be mandatory, it significantly enhances your experience. It aids in adjustment, boosts interaction, opens doors to internships and jobs, and can even be advantageous for permanent residency applications.",
      },
    ],
    SayBonjur: "Your pathway to studying abroad!",
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
    whyTLN :[
      {
        "modal": false,
        "modalClose": "certificated",
        "imgAvatar": certificatedModal,
        "img": courses,
        "modalTitle": "Certified Course",
        "modalDesc": "Achieve recognition and validation through our language learning programs, which are both ISO-certified and accredited",
      },
      {
        "modal": false,
        "modalClose": "expert",
        "imgAvatar": expertModal,
        "img": experts,
        "modalTitle": "Expert Trainers",
        "modalDesc": "Learn from internationally certified trainers with extensive expertise in language instruction.",
      },
      {
        "modal": false,
        "modalClose": "freeStudy",
        "imgAvatar": freeCourseModal,
        "img": material,
        "modalTitle": "Free Study Material",
        "modalDesc": "Get an access to free study material worth ₹10,000+ to support your learning journey.",
      },
      {
        "modal": false,
        "modalClose": "interactive",
        "imgAvatar": interactiveModal,
        "img": interactive,
        "modalTitle": "Interactive Sessions",
        "modalDesc": "Engage in dynamic classes that enhance comprehension and retention through active participation.",
      },
      {
        "modal": false,
        "modalClose": "review",
        "imgAvatar": ReviewModal,
        "img": sessions,
        "modalTitle": "Instant Review",
        "modalDesc": "Access instant class recordings after each session for convenient revision and reinforcement of learning, ensuring optimal understanding and progress in language acquisition.",
      },
      
      {
        "modal": false,
        "modalClose": "freeCourse",
        "imgAvatar": DemoModal,
        "img": demo,
        "modalTitle": "Small Batches",
        "modalDesc": "Benefit from focused instruction and a conducive learning environment with limited class sizes.",
      },
      
      
      {
        "modal": false,
        "modalClose": "flexible",
        "imgAvatar": flexibleModal,
        "img": flexible,
        "modalTitle": "Exam Preparation",
        "modalDesc": "Prepare for your exams and pave the way for your dreams of studying abroad with our comprehensive exam preparation services.",
      },
      {
        "modal": false,
        "modalClose": "batch",
        "imgAvatar": BatchModal,
        "img": batch,
        "modalTitle": "Career Counselling",
        "modalDesc": "Receive expert guidance on career prospects and opportunities, helping you make informed decisions about your professional journey.",
      }
    ]
  };