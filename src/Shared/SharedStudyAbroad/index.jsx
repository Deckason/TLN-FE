import StudentsTestomony from "../StudentsTestomony";
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
import UpcomingBathches from "../SharedMainLanguagePage/Components/UpcomingBatches/UpcomingBatches";

const SharedStudyAbroad = ({ Data }) => {
  // console.log(Data);
  let faqs = [];

  if (Data?.Faqs?.length > 0 && Data?.Faqs !== undefined) {
    faqs = Data?.Faqs;
  }

  // console.log(bannerInfo);
  return (
    <div className="">
      <div className="2xl:max-w-[1680px] lg:mx-10 mx-auto 2xl:mx-[100px]  relative 3xl:mx-auto  flex justify-center items-center flex-col mb-[112px]">
        <Banner BannerData={Data?.BannerData} />
        {/* <WhyKidsShouldLearnEnglish
          WhyKidsShouldLearnEnglish={Data?.WhyKidsShouldLearn}
        /> */}
      </div>
      <HowItWorks HowItWorksCardData={Data?.HowItWorksCardData} />
      <div className="2xl:max-w-[1680px] lg:mx-10 mx-auto 2xl:mx-[100px]  relative 3xl:mx-auto  flex justify-center items-center flex-col mb-[112px]">
        <WhyShould />
        <div className="mt-[70px] md:mt-[112px]">
          <UpcomingBathches />
        </div>
        <LanguageClassesForAnyLevel
          ClassesForAnyLevel={Data?.ClassesForAnyLevel}
        />
        <PrepareForLanguageExam LanguageExams={Data?.LanguageExams} />
      </div>
      <StudentsTestomony />
      <FaqsLanguage FaqsData={faqs} />
      {/* <EverythingYouNeedToKnowAboutLanguage
        EveryThingYouNeedToKnowAbout={Data?.EveryThingYouNeedToKnowAbout}
      /> */}
      <SayBonjur SayBonjur={Data?.SayBonjur} />
      <div className="2xl:max-w-[1680px] lg:mx-10 mx-auto 2xl:mx-[100px] 3xl:mx-auto relative flex justify-center items-center flex-col mb-[112px]">
        <LanguageLessons LanguageLesson={Data?.LanguageLesson} />
      </div>
      <SubscribeToOur />

      <PaymentBar />
    </div>
  );
};

export default SharedStudyAbroad;
