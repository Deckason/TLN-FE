import WhyShould from "@/Components/HomeComp/WhyShould";
import HowItWorks from "./Components/HowItWorks";
import UpcomingBathches from "./Components/UpcomingBathches";

import StudentsTestomony from "@/Shared/StudentsTestomony";
import LanguageLessons from "../Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";
import EverythingYouNeedToKnowAboutJapanese from "../Components/EverythingYouNeedToKnowAboutJapanese/EverythingYouNeedToKnowAboutJapanese";
import JapaneseForKidsBanner from "./Components/JapaneseForKidsBanner";
import WhyKidsShouldLearnJapanese from "./Components/WhyKidsShouldLearnJapanese";
import PreapareForJapaneseExam from "./Components/PreapareForJapaneseExam";
import JapaneseClassesForAnyLevel from "./Components/JapaneseClassesForAnyLevel";
import FaqsForJapaneseKids from "./Components/FaqsForJapaneseKids";

const JapaneseForKidsPage = () => {
  return (
    <div>
      <JapaneseForKidsBanner />
      <WhyKidsShouldLearnJapanese />

      <HowItWorks />
      <WhyShould />
      <UpcomingBathches />
      <PreapareForJapaneseExam />
      <JapaneseClassesForAnyLevel />
      <StudentsTestomony />
      <FaqsForJapaneseKids />
      <EverythingYouNeedToKnowAboutJapanese />
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

export default JapaneseForKidsPage;
