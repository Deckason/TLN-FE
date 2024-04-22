import SubscribeToOur from "@/Shared/SubscribeToOur";
import EverythingYouNeedToKnowAboutSpanish from "./Components/EverythingYouNeedToKnowAboutFrench/EverythingYouNeedToKnowAboutSpanish";
import FaqsSpanish from "./Components/FaqsFrench/FaqsSpanish";
import SpanishClassesForAnyGoal from "./Components/FrenchClassesForAnyGoal/SpanishClassesForAnyGoal";
import SpanishClassesForAnyLevel from "./Components/FrenchClassesForAnyLevel/SpanishClassesForAnyLevel";
import OnlineSpanishClass from "./Components/OnlineFrenchClass/OnlineSpanishClass";
import PreapareForSpanishExam from "./Components/PreapareForFrenchExam/PreapareForSpanishExam";
import SayHola from "./Components/SayBonjur/SayHola";
import SpanishPageMainBanner from "./Components/SpanishPageMainBanner";
import WhyLearnSpanish from "./Components/WhyLearnSpanish";
import LanguageLessons from "./Components/Languagelessons/LanguageLessons";
import UpcomingBatches from "@/Shared/UpcomingBatches";
import StudentsTestomony from "@/Shared/StudentsTestomony";
import PaymentBar from "@/Components/HomeComp/PaymentBar";

const SpanishPage = () => {
  return (
    <div>
      <SpanishPageMainBanner />
      <OnlineSpanishClass />
      <SpanishClassesForAnyGoal />
      <PreapareForSpanishExam />
      <SpanishClassesForAnyLevel />
      <WhyLearnSpanish />
      <UpcomingBatches />
      <StudentsTestomony />
      <FaqsSpanish />
      <EverythingYouNeedToKnowAboutSpanish />
      <SayHola />
      <LanguageLessons />
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default SpanishPage;
