import UpcomingBatches from "@/Shared/UpcomingBatches";
import JapaneseClassesForAnyGoal from "./Components/JapaneseClassesForAnyGoal/JapaneseClassesForAnyGoal";
import JapaneseClassesForAnyLevel from "./Components/JapaneseClassesForAnyLevel/JapaneseClassesForAnyLevel";
import JapanesePageMainBanner from "./Components/JapanesePageMainBanner";
import OnlineJapaneseClass from "./Components/OnlineJapaneseClass/OnlineJapaneseClass";
import PreapareForJapaneseExam from "./Components/PreapareForJapaneseExam/PreapareForJapaneseExam";
import WhyLearnJapanese from "./Components/WhyLearnJapanese";
import StudentsTestomony from "@/Shared/StudentsTestomony";
import FaqsJapanese from "./Components/FaqsJapanese/FaqsJapanese";
import EverythingYouNeedToKnowAboutJapanese from "./Components/EverythingYouNeedToKnowAboutJapanese/EverythingYouNeedToKnowAboutJapanese";
import SayKonnichiwa from "./Components/SayKon'nichiwa/SayKon'nichiwa";
import LanguageLessons from "./Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";

const JapanesePage = () => {
  return (
    <div>
      <JapanesePageMainBanner />
      <OnlineJapaneseClass />
      <JapaneseClassesForAnyGoal />
      <PreapareForJapaneseExam />
      <JapaneseClassesForAnyLevel />
      <WhyLearnJapanese />
      <UpcomingBatches />
      <StudentsTestomony />
      <FaqsJapanese />
      <EverythingYouNeedToKnowAboutJapanese />
      <SayKonnichiwa />
      <LanguageLessons />
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default JapanesePage;
