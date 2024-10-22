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
import WhyShould from "../../Components/HomeComp/WhyShould";
import UpcomingBatches from "../UpcomingBatches";

const SharedStudyAbroad = ({ Data, language, context }) => {
  let faqs = [];

  if (Data?.Faqs?.length > 0 && Data?.Faqs !== undefined) {
    faqs = Data?.Faqs;
  }

  return (
    <div className="">
      <div className="2xl:max-w-[1680px] lg:mx-10 mx-auto 2xl:mx-[100px]  relative 3xl:mx-auto  flex justify-center items-center flex-col mb-[112px]">
        <Banner BannerData={Data?.BannerData} language={language} />
        {/* <WhyKidsShouldLearnEnglish
          WhyKidsShouldLearnEnglish={Data?.WhyKidsShouldLearn}
        /> */}
      </div>
      <HowItWorks HowItWorksCardData={Data?.HowItWorksCardData} />
      <div className=" relative flex justify-center items-center flex-col mb-[112px]">
        <WhyShould data={Data.whyTLN}/>
        {/* <div className="">
          <UpcomingBatches language={language}/>
        </div> */}
        <LanguageClassesForAnyLevel
          ClassesForAnyLevel={Data?.ClassesForAnyLevel}
        />
        <PrepareForLanguageExam LanguageExams={Data?.LanguageExams} />
      </div>
      <StudentsTestomony language={language} context={context} />
      <FaqsLanguage FaqsData={faqs} />
      {Data?.EveryThingYouNeedToKnowAbout?.length ? <EverythingYouNeedToKnowAboutLanguage
        EveryThingYouNeedToKnowAbout={Data?.EveryThingYouNeedToKnowAbout}
      />:null}
      {/* <SayBonjur SayBonjur={Data?.SayBonjur} /> */}
      {/* <div className="mx-auto 3xl:mx-auto relative flex justify-center items-center flex-col mb-[112px]">
        <LanguageLessons LanguageLesson={Data?.LanguageLesson} />
      </div> */}
      <SubscribeToOur />

      <PaymentBar />
    </div>
  );
};

export default SharedStudyAbroad;
