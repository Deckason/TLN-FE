import WhyShould from "@/Components/HomeComp/WhyShould";
import HowItWorks from "./Components/HowItWorks";
import UpcomingBathches from "./Components/UpcomingBathches";

import StudentsTestomony from "@/Shared/StudentsTestomony";
import LanguageLessons from "../Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";
import EverythingYouNeedToKnowAboutSpanish from "../Components/EverythingYouNeedToKnowAboutSpanish/EverythingYouNeedToKnowAboutSpanish";
import SpanishForKidsBanner from "./Components/SpanishForKidsBanner";
import WhyKidsShouldLearnSpanish from "./Components/WhyKidsShouldLearnSpanish";
import PreapareForSpanishExam from "./Components/PreapareForSpanishExam";
import SpanishClassesForAnyLevel from "./Components/SpanishClassesForAnyLevel";
import FaqsForSpanishKids from "./Components/FaqsForSpanishKids";

const SpanishForKidsPage = () => {
  return (
    <div>
      <SpanishForKidsBanner />
      <WhyKidsShouldLearnSpanish />

      <HowItWorks />
      <WhyShould />
      <UpcomingBathches />
      <PreapareForSpanishExam />
      <SpanishClassesForAnyLevel />
      <StudentsTestomony />
      <FaqsForSpanishKids />
      <EverythingYouNeedToKnowAboutSpanish />
      <div>
        <div className="w-full bg-primary-color max-sm:h-[200px] h-[380px] relative">
          <div className=" h-full flex items-center text-center text-white text-5xl max-sm:text-2xl max-lg:text-4xl font-bold justify-center">
            Learning made easy. Guaranteed!
          </div>
        </div>
      </div>
      <LanguageLessons />
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default SpanishForKidsPage;
