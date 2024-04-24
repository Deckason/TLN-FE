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
  return (
    <div>
      <EnglishPageMainBanner />
      <OnlineEnglishClass />
      <EnglishClassesForAnyGoal />
      <PreapareForEnglishExam />
      <EnglishClassesForAnyLevel />
      <WhyLearnEnglish />
      <UpcomingBatches />
      <StudentsTestomony />
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
