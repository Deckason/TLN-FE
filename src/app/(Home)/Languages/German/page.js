import UpcomingBatches from "@/Shared/UpcomingBatches";
import FrenchPageMainBanner from "./Components/GermanPageMainBanner";
import StudentsTestomony from "@/Shared/StudentsTestomony";
import WhyLearnFrench from "./Components/WhyLearnGerman";
import FrenchClassesForAnyLevel from "./Components/GermanClassesForAnyLevel/GermanClassesForAnyLevel";
import PreapareForFrenchExam from "./Components/PreapareForGermanExam/PreapareForGermanExam";
import FrenchClassesForAnyGoal from "./Components/GermanClassesForAnyGoal/GermanClassesForAnyGoal";
import OnlineFrenchClass from "./Components/OnlineGermanClass/OnlineGermanClass";
import FaqsFrench from "./Components/FaqsGerman/FaqsGerman";
import EverythingYouNeedToKnowAboutFrench from "./Components/EverythingYouNeedToKnowAboutGerman/EverythingYouNeedToKnowAboutGerman";
import SayBonjur from "./Components/SayBonjur/SayBonjur";
import LanguageLessons from "./Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";
import HomeFooter from "@/Components/HomeComp/HomeFooter";
import GermanPageMainBanner from "./Components/GermanPageMainBanner";
import OnlineGermanClass from "./Components/OnlineGermanClass/OnlineGermanClass";
import GermanClassesForAnyGoal from "./Components/GermanClassesForAnyGoal/GermanClassesForAnyGoal";
import PreapareForGermanExam from "./Components/PreapareForGermanExam/PreapareForGermanExam";
import GermanClassesForAnyLevel from "./Components/GermanClassesForAnyLevel/GermanClassesForAnyLevel";
import WhyLearnGerman from "./Components/WhyLearnGerman";
import FaqsGerman from "./Components/FaqsGerman/FaqsGerman";
import EverythingYouNeedToKnowAboutGerman from "./Components/EverythingYouNeedToKnowAboutGerman/EverythingYouNeedToKnowAboutGerman";

const GermanPage = () => {
  return (
    <div>
      <GermanPageMainBanner />
      <OnlineGermanClass />
      <GermanClassesForAnyGoal />
      <PreapareForGermanExam />
      <GermanClassesForAnyLevel />
      <WhyLearnGerman />
      <UpcomingBatches />
      <StudentsTestomony />
      <FaqsGerman />
      <EverythingYouNeedToKnowAboutGerman />
      <SayBonjur />
      <LanguageLessons />
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default GermanPage;
