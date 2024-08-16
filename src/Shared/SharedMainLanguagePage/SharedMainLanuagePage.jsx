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
import UpcomingBatches from "../UpcomingBatches";
import WhyLearnLanguage from "./Components/WhyLearnLanguage/WhyLearnLanguage";

const SharedMainLanuagePage = ({ Data, language }) => {
  // console.log(Data);
  return (
    <div>
      <div className="mx-4 lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px]">
        <div className=" mx-auto  relative 3xl:mx-auto  flex justify-center items-center flex-col mb-[112px]">
          <Banner BannerData={Data?.Banner} />
          <OnlineLanguageClass
            OnlineLanguageClass={Data?.OnlineLanguageClass}
          />
          <LanguageClassesForAnyGoal
            ClassesForAnyGoal={Data?.ClassesForAnyGoal}
          />
          <PrepareForLanguageExam LanguageExams={Data?.LanguageExams} />
          <LanguageClassesForAnyLevel
            ClassesForAnyLevel={Data?.ClassesForAnyLevel}
          />
          <WhyLearnLanguage WhyLearnLanguage={Data?.WhyLearnLanguage} />
          <div className="-mt-[330px] -mb-[180px] sm:-my-[150px] z-10">
            <UpcomingBatches language={language} />
          </div>
        </div>
      </div>
      <div>
        <StudentsTestomony />
        <FaqsLanguage FaqsData={Data?.FaqsData} />
        <div className="mb-[50px]">
          <EverythingYouNeedToKnowAboutLanguage
            EveryThingYouNeedToKnowAbout={Data?.EveryThingYouNeedToKnowAbout}
          />
        </div>
        {/* <SayBonjur SayBonjur={Data?.SayBonjur} /> */}
        {/* <div className="mx-auto 3xl:mx-auto relative flex justify-center items-center flex-col mb-[112px]">
          <LanguageLessons LanguageLesson={Data?.LanguageLesson} />
        </div> */}
        <SubscribeToOur />

        <PaymentBar />
      </div>
    </div>
  );
};

export default SharedMainLanuagePage;
