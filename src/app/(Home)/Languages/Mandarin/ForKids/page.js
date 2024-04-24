import WhyShould from "@/Components/HomeComp/WhyShould";
import HowItWorks from "./Components/HowItWorks";
import UpcomingBathches from "./Components/UpcomingBathches";

import StudentsTestomony from "@/Shared/StudentsTestomony";
import LanguageLessons from "../Components/Languagelessons/LanguageLessons";
import SubscribeToOur from "@/Shared/SubscribeToOur";
import PaymentBar from "@/Components/HomeComp/PaymentBar";
import EverythingYouNeedToKnowAboutMandarin from "../Components/EverythingYouNeedToKnowAboutMandarin/EverythingYouNeedToKnowAboutMandarin";
import MandarinForKidsBanner from "./Components/MandarinForKidsBanner";
import WhyKidsShouldLearnMandarin from "./Components/WhyKidsShouldLearnMandarin";
import PreapareForMandarinExam from "./Components/PreapareForMandarinExam";
import MandarinClassesForAnyLevel from "./Components/MandarinClassesForAnyLevel";
import FaqsForMandarinKids from "./Components/FaqsForMandarinKids";

const MandarinForKidsPage = () => {
  return (
    <div>
      <MandarinForKidsBanner />
      <WhyKidsShouldLearnMandarin />

      <HowItWorks />
      <WhyShould />
      <UpcomingBathches />
      <PreapareForMandarinExam />
      <MandarinClassesForAnyLevel />
      <StudentsTestomony />
      <FaqsForMandarinKids />
      <EverythingYouNeedToKnowAboutMandarin />
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

export default MandarinForKidsPage;
