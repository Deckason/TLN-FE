import WhyShould from "@/Components/HomeComp/WhyShould";
import HowItWorks from "./Components/HowItWorks";
import UpcomingBathches from "./Components/UpcomingBathches";

import StudentsTestomony from "@/Shared/StudentsTestomony";
import LanguageLessons from "../Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";
import EverythingYouNeedToKnowAboutKorean from "../Components/EverythingYouNeedToKnowAboutKorean/EverythingYouNeedToKnowAboutKorean";
import KoreanForKidsBanner from "./Components/KoreanForKidsBanner";
import WhyKidsShouldLearnKorean from "./Components/WhyKidsShouldLearnKorean";
import PreapareForKoreanExam from "./Components/PreapareForKoreanExam";
import KoreanClassesForAnyLevel from "./Components/KoreanClassesForAnyLevel";
import FaqsForKoreanKids from "./Components/FaqsForKoreanKids";

const KoreanForKidsPage = () => {
  return (
    <div>
      <KoreanForKidsBanner />
      <WhyKidsShouldLearnKorean />

      <HowItWorks />
      <WhyShould />
      <UpcomingBathches />
      <PreapareForKoreanExam />
      <KoreanClassesForAnyLevel />
      <StudentsTestomony />
      <FaqsForKoreanKids />
      <EverythingYouNeedToKnowAboutKorean />
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

export default KoreanForKidsPage;
