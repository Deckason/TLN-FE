import WhyShould from "@/Components/HomeComp/WhyShould";
import HowItWorks from "./Components/HowItWorks";
import UpcomingBathches from "./Components/UpcomingBathches";

import StudentsTestomony from "@/Shared/StudentsTestomony";
import EnglishClassesForAnyLevel from "./Components/EnglishClassesForAnyLevel";
import PreapareForEnglishExam from "./Components/PreapareForEnglishExam";
import EverythingYouNeedToKnowAboutEnglish from "../Components/EverythingYouNeedToKnowAboutEnglish/EverythingYouNeedToKnowAboutEnglish";
import LanguageLessons from "../Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";
import EnglishForKidsBanner from "./Components/EnglishForKidsBanner";
import WhyKidsShouldLearnEnglish from "./Components/WhyKidsShouldLearnEnglish";
import FaqsForEnglishKids from "./Components/FaqsForEnglishKids";

const EnglishForKidsPage = () => {
 
  return (
    <div>
      <EnglishForKidsBanner />
      <WhyKidsShouldLearnEnglish />

      <HowItWorks />
      <WhyShould />
      <UpcomingBathches />
      <PreapareForEnglishExam />
      <EnglishClassesForAnyLevel />
      <StudentsTestomony />
      <FaqsForEnglishKids />
      <EverythingYouNeedToKnowAboutEnglish />
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

export default EnglishForKidsPage;
