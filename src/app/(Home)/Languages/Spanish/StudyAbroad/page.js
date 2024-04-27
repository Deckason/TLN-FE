import WhyShould from "@/Components/HomeComp/WhyShould";
import HowItWorks from "./Components/HowItWorks";
import UpcomingBathches from "./Components/UpcomingBathches";

import StudentsTestomony from "@/Shared/StudentsTestomony";
import ClassesForAnyLevel from "./Components/ClassesForAnyLevel";
import PreapareForSpanishExam from "./Components/PreapareForSpanishExam";

import LanguageLessons from "../Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";

import FaqsSudyAbroad from "./Components/FaqsSudyAbroad";
import StudyAbroad from "./Components/StudyAbroad";
import EverythingYouNeedToKnowAboutSpanish from "../Components/EverythingYouNeedToKnowAboutSpanish/EverythingYouNeedToKnowAboutSpanish";

const FrenchForStudyAbroadPage = () => {
  return (
    <div>
      <StudyAbroad />

      <HowItWorks />
      <WhyShould />
      <UpcomingBathches />
      <PreapareForSpanishExam />
      <ClassesForAnyLevel />
      <StudentsTestomony />
      <FaqsSudyAbroad />
      <EverythingYouNeedToKnowAboutSpanish />
      <div>
        <div className="w-full bg-primary-color max-sm:h-[200px] h-[380px] relative">
          <div className=" h-full flex items-center text-center text-white text-5xl max-sm:text-2xl max-lg:text-4xl font-bold justify-center">
            Your pathway to studying abroad!
          </div>
        </div>
      </div>
      <LanguageLessons />
      <SubscribeToOur />
      <PaymentBar />
    </div>
  );
};

export default FrenchForStudyAbroadPage;
