"use client";
import PaymentBar from "../../Components/HomeComp/PaymentBar";
import SubscribeToOur from "../SubscribeToOur";

import Banner from "./Components/Banner/Banner";
import EverythingYouNeedToKnowAboutLanguage from "./Components/EverythingYouNeedToKnowAboutLanguage/EverythingYouNeedToKnowAboutLanguage";
import FaqsLanguage from "./Components/FaqsLanguage/FaqsLanguage";
import LanguageClassesForAnyGoal from "./Components/LanguageClassesForAnyGoal/LanguageClassesForAnyGoal";
import LanguageClassesForAnyLevel from "./Components/LanguageClassesForAnyLevel/LanguageClassesForAnyLevel";
import LanguageLessons from "./Components/Languagelessons/LanguageLessons";

import OnlineLanguageClass from "./Components/OnlineLanguageClass/OnlineLanguageClass";
import PrepareForLanguageExam from "./Components/PrepareForLanguageExam/PrepareForLanguageExam";
import SayBonjur from "./Components/SayBonjur/SayBonjur";
import StudentsTestomony from "./Components/StudentTestomony/StudentsTestomony";
import UpcomingBathches from "./Components/UpcomingBatches/UpcomingBatches";
import WhyLearnLanguage from "./Components/WhyLearnLanguage/WhyLearnLanguage";

const SharedMainLanuagePage = ({ Data }) => {
  // console.log(Data);
  return (
    <div className="mx-4 lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px]">
      <div className=" mx-auto  relative 3xl:mx-auto  flex justify-center items-center flex-col mb-[112px]">
        <Banner BannerData={Data?.Banner} />
        <OnlineLanguageClass OnlineLanguageClass={Data?.OnlineLanguageClass} />
        <LanguageClassesForAnyGoal
          ClassesForAnyGoal={Data?.ClassesForAnyGoal}
        />
        <PrepareForLanguageExam LanguageExams={Data?.LanguageExams} />
        <LanguageClassesForAnyLevel
          ClassesForAnyLevel={Data?.ClassesForAnyLevel}
        />
        <WhyLearnLanguage WhyLearnLanguage={Data?.WhyLearnLanguage} />
        <UpcomingBathches />
      </div>
      <StudentsTestomony />
      <FaqsLanguage FaqsData={Data?.FaqsData} />
      <EverythingYouNeedToKnowAboutLanguage
        EveryThingYouNeedToKnowAbout={Data?.EveryThingYouNeedToKnowAbout}
      />
      <SayBonjur SayBonjur={Data?.SayBonjur} />
      <div className="mx-auto 3xl:mx-auto relative flex justify-center items-center flex-col mb-[112px]">
        <LanguageLessons LanguageLesson={Data?.LanguageLesson} />
      </div>
      <SubscribeToOur />

      <PaymentBar />
    </div>
  );
};

export default SharedMainLanuagePage;
