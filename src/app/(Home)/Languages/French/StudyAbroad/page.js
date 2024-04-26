import WhyShould from "@/Components/HomeComp/WhyShould";
import HowItWorks from "./Components/HowItWorks";
import UpcomingBathches from "./Components/UpcomingBathches";

import StudentsTestomony from "@/Shared/StudentsTestomony";
import ClassesForAnyLevel from "./Components/ClassesForAnyLevel";
import PreapareForFrenchExam from "./Components/PreapareForFrenchExam";
import EverythingYouNeedToKnowAboutFrench from "../Components/EverythingYouNeedToKnowAboutFrench/EverythingYouNeedToKnowAboutFrench";
import LanguageLessons from "../Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";

import FaqsSudyAbroad from "./Components/FaqsSudyAbroad";
import StudyAbroad from "./Components/StudyAbroad";

const FrenchForStudyAbroadPage = () => {
  return (
    <div>
      <StudyAbroad />

      <HowItWorks />
      <WhyShould />
      <UpcomingBathches />
      <PreapareForFrenchExam />
      <ClassesForAnyLevel />
      <StudentsTestomony />
      <FaqsSudyAbroad />
      <EverythingYouNeedToKnowAboutFrench />
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
