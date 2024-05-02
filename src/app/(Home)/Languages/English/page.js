import UpcomingBatches from "@/Shared/UpcomingBatches";
import EnglishClassesForAnyGoal from "./Components/EnglishClassesForAnyGoal/EnglishClassesForAnyGoal";
import EnglishClassesForAnyLevel from "./Components/EnglishClassesForAnyLevel/EnglishClassesForAnyLevel";
import EnglishPageMainBanner from "./Components/EnglishPageMainBanner";
import OnlineEnglishClass from "./Components/OnlineEnglishClass/OnlineEnglishClass";
import PreapareForEnglishExam from "./Components/PreapareForEnglishExam/PreapareForEnglishExam";
import WhyLearnEnglish from "./Components/WhyLearnEnglish";
import StudentsTestomony from "@/Shared/StudentsTestomony";
import FaqsEnglish from "./Components/FaqsEnglish/FaqsEnglish";
import EverythingYouNeedToKnowAboutEnglish from "./Components/EverythingYouNeedToKnowAboutEnglish/EverythingYouNeedToKnowAboutEnglish";
import SayAnnyeonghaseyo from "../Korean/Components/SayAnnyeonghaseyo/SayAnnyeonghaseyo";
import LanguageLessons from "./Components/Languagelessons/LanguageLessons";
import PaymentBar from "@/Components/HomeComp/PaymentBar";
import SubscribeToOur from "@/Shared/SubscribeToOur";

const EnglishPage = () => {
  const TestimonialData = [
    {
      para: "“Spanish I have done my Spanish A1 & A2 from The Language Network. I have an amazing experience with the teachers. They teach from the deep down of their soul. Anytime they are ready to help. Specially Amrita Iyer is very very helpful to learn Spanish. Thank you The Language Network!!!“",
      img: "",
      name: "Komal Patil",
      Dept: "MBA in Marketing",
      Rating: "2",
    },
    {
      para: "“Spanish whenever it comes to language learning, TLN is the best place I must say. Earlier I was too skeptical to join online classes. But TLN  makes it a cakewalk   for you to learn  a foreign language. I'm looking forward for enthusiastic and communicative classes as it was before.”",
      img: "",
      name: "Pranjal Shinde",
      Dept: "Post Graduate Sudent",
      Rating: "3",
    },
    {
      para: "“Up to now, my experience with The Language Network has been exceptional. Prajakta, my Spanish instructor, created a friendly and comfortable atmosphere in the classes, which made the learning process enjoyable and engaging for me.”",
      img: "",
      name: "Rithika Kumari",
      Dept: "Student",
      Rating: "4.5",
    },
    {
      para: "“The classes are conducted on time. And its basically 3 or 4 students per batch, so everything is understood  and doubts are solved instantly. I'm very happy that I found out about The Language Network, its really great.”",
      img: "",
      name: "Arti Darekar",
      Dept: "Student",
      Rating: "3",
    },
    {
      para: "“Initially, I was very nervous about how to go about learning a new language but Samihan made it extremely comfortable for all of us. He used unique and fun techniques to make sure we understand. I am so glad to have chosen TLN for this wonderful experience.”",
      img: "",
      name: "Komal Patil",
      Dept: "MBA in Marketing",
      Rating: "5",
    },
  ];
  return (
    <div>
      <EnglishPageMainBanner />
      <OnlineEnglishClass />
      <EnglishClassesForAnyGoal />
      <PreapareForEnglishExam />
      <EnglishClassesForAnyLevel />
      <WhyLearnEnglish />
      <UpcomingBatches />
      <StudentsTestomony data={TestimonialData} />
      <FaqsEnglish />
      <EverythingYouNeedToKnowAboutEnglish />
      <SayAnnyeonghaseyo />
      <LanguageLessons />
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default EnglishPage;
