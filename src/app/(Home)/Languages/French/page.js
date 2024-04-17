import UpcomingBatches from "@/Shared/UpcomingBatches";
import FrenchPageMainBanner from "./Components/FrenchPageMainBanner";
import StudentsTestomony from "@/Shared/StudentsTestomony";
import WhyLearnFrench from "./Components/WhyLearnFrench";
import FrenchClassesForAnyLevel from "./Components/FrenchClassesForAnyLevel/FrenchClassesForAnyLevel";
import PreapareForFrenchExam from "./Components/PreapareForFrenchExam/PreapareForFrenchExam";
import FrenchClassesForAnyGoal from "./Components/FrenchClassesForAnyGoal/FrenchClassesForAnyGoal";
import OnlineFrenchClass from "./Components/OnlineFrenchClass/OnlineFrenchClass";
import FaqsFrench from "./Components/FaqsFrench/FaqsFrench";
import EverythingYouNeedToKnowAboutFrench from "./Components/EverythingYouNeedToKnowAboutFrench/EverythingYouNeedToKnowAboutFrench";
import SayBonjur from "./Components/SayBonjur/SayBonjur";
import LanguageLessons from "./Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";

const FrenchPage = () => {
  return (
    <div>
      <FrenchPageMainBanner />
      <OnlineFrenchClass />
      <FrenchClassesForAnyGoal />
      <PreapareForFrenchExam />
      <FrenchClassesForAnyLevel />
      <WhyLearnFrench />
      <UpcomingBatches />
      <StudentsTestomony />
      <FaqsFrench />
      <EverythingYouNeedToKnowAboutFrench />
      <SayBonjur />
      <LanguageLessons />
      <SubscribeToOur />
    </div>
  );
};

export default FrenchPage;
