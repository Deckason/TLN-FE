import SubscribeToOur from "@/Shared/SubscribeToOur";
import EverythingYouNeedToKnowAboutSpanish from "./Components/EverythingYouNeedToKnowAboutSpanish/EverythingYouNeedToKnowAboutSpanish";
import FaqsSpanish from "./Components/FaqsSpanish/FaqsSpanish";
import SpanishClassesForAnyGoal from "./Components/SpanishClassesForAnyGoal/SpanishClassesForAnyGoal";
import SpanishClassesForAnyLevel from "./Components/SpanishClassesForAnyLevel/SpanishClassesForAnyLevel";
import OnlineSpanishClass from "./Components/OnlineSpanishClass/OnlineSpanishClass";
import PreapareForSpanishExam from "./Components/PreapareForSpanishExam/PreapareForSpanishExam";
import SayHola from "./Components/SayHola/SayHola";
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
