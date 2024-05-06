import WhyShould from "@/Components/HomeComp/WhyShould";
import HowItWorks from "./Components/HowItWorks";
import UpcomingBathches from "./Components/UpcomingBathches";

import StudentsTestomony from "@/Shared/StudentsTestomony";
import FrenchClassesForAnyLevel from "./Components/FrenchClassesForAnyLevel";
import PreapareForFrenchExam from "./Components/PreapareForFrenchExam";
import EverythingYouNeedToKnowAboutFrench from "./Components/EverythingYouNeedToKnowAboutFrench";
import LanguageLessons from "../Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";
import FrenchForKidsBanner from "./Components/FrenchForKidsBanner";
import WhyKidsShouldLearnFrench from "./Components/WhyKidsShouldLearnFrench";
import FaqsForFrenchKids from "./Components/FaqsForFrenchKids";

const FrenchForKidsPage = () => {
  return (
    <div>
      <FrenchForKidsBanner />
      <WhyKidsShouldLearnFrench />

      <HowItWorks />
      <WhyShould />
      <UpcomingBathches />
      <PreapareForFrenchExam />
      <FrenchClassesForAnyLevel />
      <StudentsTestomony />
      <FaqsForFrenchKids />
      <EverythingYouNeedToKnowAboutFrench />
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

export default FrenchForKidsPage;
