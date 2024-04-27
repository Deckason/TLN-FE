import WhyShould from "@/Components/HomeComp/WhyShould";
import HowItWorks from "./Components/HowItWorks";
import UpcomingBathches from "./Components/UpcomingBathches";

import StudentsTestomony from "@/Shared/StudentsTestomony";
import LanguageLessons from "../Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";
import EverythingYouNeedToKnowAboutGerman from "../Components/EverythingYouNeedToKnowAboutGerman/EverythingYouNeedToKnowAboutGerman.jsx";
import GermanForKidsBanner from "./Components/GermanForKidsBanner";
import WhyKidsShouldLearnGerman from "./Components/WhyKidsShouldLearnGerman";
import PreapareForGermanExam from "./Components/PreapareForGermanExam";
import GermanClassesForAnyLevel from "./Components/GermanClassesForAnyLevel";
import FaqsForGermanKids from "./Components/FaqsForGermanKids";

const GermanForKidsPage = () => {
  return (
    <div>
      <GermanForKidsBanner />
      <WhyKidsShouldLearnGerman />

      <HowItWorks />
      <WhyShould />
      <UpcomingBathches />
      <PreapareForGermanExam />
      <GermanClassesForAnyLevel />
      <StudentsTestomony />
      <FaqsForGermanKids />
      <EverythingYouNeedToKnowAboutGerman />
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

export default GermanForKidsPage;
