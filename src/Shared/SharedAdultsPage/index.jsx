import StudentsTestomony from "../StudentsTestomony";
import SubscribeToOur from "../SubscribeToOur";
import Banner from "./Components/Banner";
import FaqsLanguage from "./Components/FaqsLanguage";
import HowItWorks from "./Components/HowItWorks";
import LanguageClassesForAnyLevel from "./Components/LanguageClassesForAnyLevel";
import LanguageLessons from "./Components/Languagelessons";
import PaymentBar from "./Components/PaymentBar";
import PrepareForLanguageExam from "./Components/PrepareForLanguageExam";
import SayBonjur from "./Components/SayBonjur";
// import UpcomingBatches from "./Components/UpcomingBatches";
import WhyShould from "../../Components/HomeComp/WhyShould";
import UpcomingBatches from "../UpcomingBatches";

const SharedAdultsPage = ({ Data, language }) => {
  // console.log(Data);
  let faqs = [];

  if (Data?.Faqs?.length > 0 && Data?.Faqs !== undefined) {
    faqs = Data?.Faqs;
  }

  // console.log(bannerInfo);
  return (
    <div className="">
      <div className="2xl:w-[1280px] 3xl:w-[1530px] 4xl:w-[1680px] lg:mx-10 mx-auto 2xl:mx-auto  relative  flex justify-center items-center flex-col mb-[12px] xl:mb-[31px] 4xl:mb-[112px]">
        <Banner BannerData={Data?.BannerData} />
        {/* <WhyKidsShouldLearnEnglish
          WhyKidsShouldLearnEnglish={Data?.WhyKidsShouldLearn}
        /> */}
      </div>
      <HowItWorks HowItWorksCardData={Data?.HowItWorksCardData} />
      <div className="2xl:max-w-[1680px] lg:mx-10 mx-auto 2xl:mx-[100px]  relative 3xl:mx-auto  flex justify-center items-center flex-col mb-[2px] xl:mb-[31px] 4xl:mb-[112px]">
        <WhyShould />
        {/* <div className="">
          <UpcomingBatches language={language} />
        </div> */}

        <PrepareForLanguageExam LanguageExams={Data?.LanguageExams} />

        <LanguageClassesForAnyLevel
          ClassesForAnyLevel={Data?.ClassesForAnyLevel}
        />
      </div>
      <div>
        <StudentsTestomony />
      </div>
      <FaqsLanguage FaqsData={faqs} />
      {/* <EverythingYouNeedToKnowAboutLanguage
        EveryThingYouNeedToKnowAbout={Data?.EveryThingYouNeedToKnowAbout}
      /> */}
      {/* <SayBonjur SayBonjur={Data?.SayBonjur} /> */}
      {/* <div className="mx-auto 3xl:mx-auto relative flex justify-center items-center flex-col mb-[112px]">
        <LanguageLessons LanguageLesson={Data?.LanguageLesson} />
      </div> */}
      <div className="mt-20"></div>
      {/* //added this because of commenting the above sections */}
      <SubscribeToOur />

      <PaymentBar />
    </div>
  );
};

export default SharedAdultsPage;
