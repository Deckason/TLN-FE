import WhyShould from "../../Components/HomeComp/WhyShould"; 
import StudentsTestomony from "./../../Shared/SharedMainLanguagePage/Components/StudentTestomony/StudentsTestomony";
import SubscribeToOur from "../SubscribeToOur";
import Banner from "./Components/Banner";
import EverythingYouNeedToKnowAboutLanguage from "./Components/EverythingYouNeedToKnowAboutLanguage";
import FaqsLanguage from "./Components/FaqsLanguage";
import HowItWorks from "./Components/HowItWorks";
import LanguageClassesForAnyLevel from "./Components/LanguageClassesForAnyLevel";
import LanguageLessons from "./Components/Languagelessons";
import PaymentBar from "./Components/PaymentBar";
import PrepareForLanguageExam from "./Components/PrepareForLanguageExam";
import SayBonjur from "./Components/SayBonjur";

import WhyKidsShouldLearnEnglish from "./Components/WhyKidShouldLearn";
import WhyLearnLanguage from "./Components/WhyLearnLanguage";
import UpcomingBatches from "../UpcomingBatches";

const SharedKidsPage = ({ Data, language,context }) => {
  let faqs = [];

  if (Data?.Faqs?.length > 0 && Data?.Faqs !== undefined) {
    faqs = Data?.Faqs;
  }

  return (
    <div className="">
      <div className="2xl:w-[1280px] 3xl:w-[1530px] 4xl:w-[1680px] lg:mx-10 mx-auto 2xl:mx-auto  relative  flex justify-center items-center flex-col mb-[112px]">
        <Banner BannerData={Data?.BannerData} language={language}/>
        <WhyKidsShouldLearnEnglish
          WhyKidsShouldLearnEnglish={Data?.WhyKidsShouldLearn}
        />
      </div>
      <HowItWorks HowItWorksCardData={Data?.HowItWorksCardData} />
      <div className=" relative flex justify-center items-center flex-col mb-[112px]">
        <WhyShould data={Data.whyTLN} title="Why Kids should learn with The Language Network?"/>
        <div className="mt-4">
          {/* <UpcomingBatches language={language}/> */}
        </div>
        <PrepareForLanguageExam LanguageExams={Data?.LanguageExams} />
        <LanguageClassesForAnyLevel
          ClassesForAnyLevel={Data?.ClassesForAnyLevel}
        />

      </div>
      <StudentsTestomony language={language} context={context}/>
      
      <FaqsLanguage FaqsData={faqs} />
      <EverythingYouNeedToKnowAboutLanguage
        EveryThingYouNeedToKnowAbout={Data?.EveryThingYouNeedToKnowAbout}
      />
      {/* <SayBonjur SayBonjur={Data?.SayBonjur} />
      <div className="mx-auto 3xl:mx-auto relative flex justify-center items-center flex-col mb-[112px]">
        <LanguageLessons LanguageLesson={Data?.LanguageLesson} />
      </div> */}
      <SubscribeToOur />

      <PaymentBar />
    </div>
  );
};

export default SharedKidsPage;
